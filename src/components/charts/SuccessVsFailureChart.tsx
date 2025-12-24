import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import type { SuccessVsFailureData } from '../../types';
import '../charts/ChartCard.css';

interface SuccessVsFailureChartProps {
  data: SuccessVsFailureData;
  onEdit: () => void;
}

const COLORS = ['#06B6D4', '#A855F7'];

export function SuccessVsFailureChart({ data, onEdit }: SuccessVsFailureChartProps) {
  const chartData = [
    { name: 'Success', value: data.success },
    { name: 'Failure', value: data.failure },
  ];

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h2 className="card-title">Success vs Failure</h2>
        <button className="btn-secondary btn-edit" onClick={onEdit}>
          Edit Values
        </button>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => {
                const percentValue = percent ?? 0;
                return `${name}: ${(percentValue * 100).toFixed(0)}%`;
              }}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E2339',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: '#FFFFFF',
              }}
            />
            <Legend
              wrapperStyle={{ color: '#E0E7FF' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

