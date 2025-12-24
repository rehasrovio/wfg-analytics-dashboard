import { useState, useEffect } from 'react';
import { CallsPerDayChart } from './charts/CallsPerDayChart';
import { SuccessVsFailureChart } from './charts/SuccessVsFailureChart';
import { AvgCallDurationChart } from './charts/AvgCallDurationChart';
import { EmailModal } from './modals/EmailModal';
import { EditChartModal } from './modals/EditChartModal';
import { getUserChartData, saveUserChartData } from '../services/supabase';
import type {
  ChartData,
  CallsPerDayData,
  SuccessVsFailureData,
  AvgCallDurationData,
} from '../types';
import './Dashboard.css';

// Default dummy data
const defaultChartData: ChartData = {
  callsPerDay: [
    { date: 'Mon', calls: 45 },
    { date: 'Tue', calls: 52 },
    { date: 'Wed', calls: 48 },
    { date: 'Thu', calls: 61 },
    { date: 'Fri', calls: 55 },
    { date: 'Sat', calls: 38 },
    { date: 'Sun', calls: 42 },
  ],
  successVsFailure: {
    success: 285,
    failure: 15,
  },
  avgCallDuration: [
    { period: 'Week 1', duration: 120 },
    { period: 'Week 2', duration: 135 },
    { period: 'Week 3', duration: 128 },
    { period: 'Week 4', duration: 142 },
  ],
};

const EMAIL_STORAGE_KEY = 'wfg_analytics_email';

export function Dashboard() {
  const [chartData, setChartData] = useState<ChartData>(defaultChartData);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingChartType, setEditingChartType] = useState<
    'callsPerDay' | 'successVsFailure' | 'avgCallDuration' | null
  >(null);
  const [previousData, setPreviousData] = useState<
    CallsPerDayData[] | SuccessVsFailureData | AvgCallDurationData[] | null
  >(null);
  const [loading, setLoading] = useState(false);

  // Load user email from localStorage on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem(EMAIL_STORAGE_KEY);
    if (savedEmail) {
      setUserEmail(savedEmail);
      loadUserData(savedEmail);
    }
  }, []);

  const loadUserData = async (email: string) => {
    setLoading(true);
    try {
      const savedData = await getUserChartData(email);
      if (savedData) {
        setChartData(savedData);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = async (chartType: 'callsPerDay' | 'successVsFailure' | 'avgCallDuration') => {
    // Check if user has email
    const email = userEmail || localStorage.getItem(EMAIL_STORAGE_KEY);
    
    if (!email) {
      // Show email modal first
      setEditingChartType(chartType);
      setEmailModalOpen(true);
      return;
    }

    // User has email, fetch previous data and show edit modal
    setEditingChartType(chartType);
    try {
      const savedData = await getUserChartData(email);
      if (savedData) {
        switch (chartType) {
          case 'callsPerDay':
            setPreviousData(savedData.callsPerDay);
            break;
          case 'successVsFailure':
            setPreviousData(savedData.successVsFailure);
            break;
          case 'avgCallDuration':
            setPreviousData(savedData.avgCallDuration);
            break;
        }
      } else {
        setPreviousData(null);
      }
    } catch (error) {
      console.error('Error fetching previous data:', error);
      setPreviousData(null);
    }
    setEditModalOpen(true);
  };

  const handleEmailConfirm = async (email: string) => {
    setUserEmail(email);
    localStorage.setItem(EMAIL_STORAGE_KEY, email);
    setEmailModalOpen(false);

    // Now show edit modal
    if (editingChartType) {
      try {
        const savedData = await getUserChartData(email);
        if (savedData && editingChartType) {
          switch (editingChartType) {
            case 'callsPerDay':
              setPreviousData(savedData.callsPerDay);
              break;
            case 'successVsFailure':
              setPreviousData(savedData.successVsFailure);
              break;
            case 'avgCallDuration':
              setPreviousData(savedData.avgCallDuration);
              break;
          }
        } else {
          setPreviousData(null);
        }
      } catch (error) {
        console.error('Error fetching previous data:', error);
        setPreviousData(null);
      }
      setEditModalOpen(true);
    }
  };

  const handleSaveChartData = async (
    newData: CallsPerDayData[] | SuccessVsFailureData | AvgCallDurationData[]
  ) => {
    if (!userEmail && !localStorage.getItem(EMAIL_STORAGE_KEY)) {
      console.error('No user email available');
      return;
    }

    const email = userEmail || localStorage.getItem(EMAIL_STORAGE_KEY) || '';
    
    setLoading(true);
    try {
      // Update local state
      const updatedChartData: ChartData = { ...chartData };
      
      if (editingChartType === 'callsPerDay') {
        updatedChartData.callsPerDay = newData as CallsPerDayData[];
      } else if (editingChartType === 'successVsFailure') {
        updatedChartData.successVsFailure = newData as SuccessVsFailureData;
      } else if (editingChartType === 'avgCallDuration') {
        updatedChartData.avgCallDuration = newData as AvgCallDurationData[];
      }

      setChartData(updatedChartData);

      // Save to Supabase
      const success = await saveUserChartData(email, updatedChartData);
      if (!success) {
        console.error('Failed to save data to Supabase');
        // Still update local state even if save fails
      }
    } catch (error) {
      console.error('Error saving chart data:', error);
    } finally {
      setLoading(false);
      setEditModalOpen(false);
      setEditingChartType(null);
      setPreviousData(null);
    }
  };

  const getCurrentChartData = () => {
    if (!editingChartType) return null;

    switch (editingChartType) {
      case 'callsPerDay':
        return chartData.callsPerDay;
      case 'successVsFailure':
        return chartData.successVsFailure;
      case 'avgCallDuration':
        return chartData.avgCallDuration;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Call Analytics Dashboard</h1>
        {userEmail && (
          <p className="dashboard-subtitle">Logged in as: {userEmail}</p>
        )}
      </div>

      {loading && (
        <div className="loading-indicator">
          <p>Loading...</p>
        </div>
      )}

      <div className="dashboard-grid">
        <CallsPerDayChart
          data={chartData.callsPerDay}
          onEdit={() => handleEditClick('callsPerDay')}
        />
        <SuccessVsFailureChart
          data={chartData.successVsFailure}
          onEdit={() => handleEditClick('successVsFailure')}
        />
        <AvgCallDurationChart
          data={chartData.avgCallDuration}
          onEdit={() => handleEditClick('avgCallDuration')}
        />
      </div>

      <EmailModal
        isOpen={emailModalOpen}
        onClose={() => {
          setEmailModalOpen(false);
          setEditingChartType(null);
        }}
        onConfirm={handleEmailConfirm}
      />

      {editingChartType && (
        <EditChartModal
          isOpen={editModalOpen}
          onClose={() => {
            setEditModalOpen(false);
            setEditingChartType(null);
            setPreviousData(null);
          }}
          onSave={handleSaveChartData}
          chartType={editingChartType}
          initialData={getCurrentChartData()!}
          previousData={previousData}
        />
      )}
    </div>
  );
}

