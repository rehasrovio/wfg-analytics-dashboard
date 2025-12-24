import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { CallsPerDayData } from '../../types';
import '../charts/ChartCard.css';

interface CallsPerDayChartProps {
  data: CallsPerDayData[];
  onEdit: () => void;
}

export function CallsPerDayChart({ data, onEdit }: CallsPerDayChartProps) {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h2 className="card-title">Calls Per Day</h2>
        <button className="btn-secondary btn-edit" onClick={onEdit}>
          Edit Values
        </button>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis
              dataKey="date"
              stroke="#E0E7FF"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="#E0E7FF"
              style={{ fontSize: '12px' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E2339',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: '#FFFFFF',
              }}
            />
            <Bar
              dataKey="calls"
              fill="#06B6D4"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

