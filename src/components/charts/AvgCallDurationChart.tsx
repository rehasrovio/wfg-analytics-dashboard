import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { AvgCallDurationData } from '../../types';
import '../charts/ChartCard.css';

interface AvgCallDurationChartProps {
  data: AvgCallDurationData[];
  onEdit: () => void;
}

export function AvgCallDurationChart({ data, onEdit }: AvgCallDurationChartProps) {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h2 className="card-title">Average Call Duration</h2>
        <button className="btn-secondary btn-edit" onClick={onEdit}>
          Edit Values
        </button>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis
              dataKey="period"
              stroke="#E0E7FF"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="#E0E7FF"
              style={{ fontSize: '12px' }}
              label={{ value: 'Seconds', angle: -90, position: 'insideLeft', fill: '#E0E7FF' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E2339',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: '#FFFFFF',
              }}
              formatter={(value: number | undefined) => {
                if (value === undefined) return ['0s', 'Duration'];
                return [`${value}s`, 'Duration'];
              }}
            />
            <Line
              type="monotone"
              dataKey="duration"
              stroke="#A855F7"
              strokeWidth={3}
              dot={{ fill: '#A855F7', r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

