import { useState, useEffect } from 'react';
import type { CallsPerDayData, SuccessVsFailureData, AvgCallDurationData } from '../../types';
import '../modals/EditChartModal.css';

interface EditChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: CallsPerDayData[] | SuccessVsFailureData | AvgCallDurationData[]) => void;
  chartType: 'callsPerDay' | 'successVsFailure' | 'avgCallDuration';
  initialData: CallsPerDayData[] | SuccessVsFailureData | AvgCallDurationData[];
  previousData?: CallsPerDayData[] | SuccessVsFailureData | AvgCallDurationData[] | null;
}

export function EditChartModal({
  isOpen,
  onClose,
  onSave,
  chartType,
  initialData,
  previousData,
}: EditChartModalProps) {
  const [localData, setLocalData] = useState(initialData);
  const [showConfirm, setShowConfirm] = useState(!!previousData);

  useEffect(() => {
    if (isOpen) {
      setLocalData(previousData || initialData);
      setShowConfirm(!!previousData);
    }
  }, [isOpen, initialData, previousData]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(localData);
    onClose();
  };

  const handleConfirmOverwrite = () => {
    setShowConfirm(false);
  };

  const handleCancel = () => {
    setLocalData(initialData);
    onClose();
  };

  const renderCallsPerDayEditor = () => {
    const data = localData as CallsPerDayData[];
    return (
      <div className="edit-form">
        <p className="edit-description">Edit the number of calls for each day:</p>
        <div className="edit-list">
          {data.map((item, index) => (
            <div key={index} className="edit-item">
              <label className="edit-label">{item.date}</label>
              <input
                type="number"
                className="form-input"
                value={item.calls}
                onChange={(e) => {
                  const newData = [...data];
                  newData[index] = { ...item, calls: parseInt(e.target.value) || 0 };
                  setLocalData(newData);
                }}
                min="0"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSuccessVsFailureEditor = () => {
    const data = localData as SuccessVsFailureData;
    return (
      <div className="edit-form">
        <p className="edit-description">Edit success and failure counts:</p>
        <div className="edit-list">
          <div className="edit-item">
            <label className="edit-label">Success</label>
            <input
              type="number"
              className="form-input"
              value={data.success}
              onChange={(e) => {
                setLocalData({
                  ...data,
                  success: parseInt(e.target.value) || 0,
                });
              }}
              min="0"
            />
          </div>
          <div className="edit-item">
            <label className="edit-label">Failure</label>
            <input
              type="number"
              className="form-input"
              value={data.failure}
              onChange={(e) => {
                setLocalData({
                  ...data,
                  failure: parseInt(e.target.value) || 0,
                });
              }}
              min="0"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderAvgCallDurationEditor = () => {
    const data = localData as AvgCallDurationData[];
    return (
      <div className="edit-form">
        <p className="edit-description">Edit average call duration (in seconds):</p>
        <div className="edit-list">
          {data.map((item, index) => (
            <div key={index} className="edit-item">
              <label className="edit-label">{item.period}</label>
              <input
                type="number"
                className="form-input"
                value={item.duration}
                onChange={(e) => {
                  const newData = [...data];
                  newData[index] = { ...item, duration: parseInt(e.target.value) || 0 };
                  setLocalData(newData);
                }}
                min="0"
                step="0.1"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const getChartTitle = () => {
    switch (chartType) {
      case 'callsPerDay':
        return 'Calls Per Day';
      case 'successVsFailure':
        return 'Success vs Failure';
      case 'avgCallDuration':
        return 'Average Call Duration';
      default:
        return 'Chart Data';
    }
  };

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleCancel} aria-label="Close modal">
          ×
        </button>
        <h2 className="modal-title">Edit {getChartTitle()}</h2>

        {showConfirm && previousData && (
          <div className="confirm-overwrite">
            <p className="confirm-message">
              You have previously saved data. Do you want to overwrite it?
            </p>
            <div className="previous-data-preview">
              <p className="preview-label">Previous values:</p>
              <pre className="preview-data">
                {JSON.stringify(previousData, null, 2)}
              </pre>
            </div>
            <div className="modal-actions">
              <button type="button" className="btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
              <button type="button" className="btn-primary" onClick={handleConfirmOverwrite}>
                Overwrite
              </button>
            </div>
          </div>
        )}

        {!showConfirm && (
          <>
            {chartType === 'callsPerDay' && renderCallsPerDayEditor()}
            {chartType === 'successVsFailure' && renderSuccessVsFailureEditor()}
            {chartType === 'avgCallDuration' && renderAvgCallDurationEditor()}

            <div className="modal-actions">
              <button type="button" className="btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
              <button type="button" className="btn-primary" onClick={handleSave}>
                Save Changes
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

