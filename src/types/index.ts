export interface ChartData {
  callsPerDay: CallsPerDayData[];
  successVsFailure: SuccessVsFailureData;
  avgCallDuration: AvgCallDurationData[];
}

export interface CallsPerDayData {
  date: string;
  calls: number;
}

export interface SuccessVsFailureData {
  success: number;
  failure: number;
}

export interface AvgCallDurationData {
  period: string;
  duration: number; // in seconds
}

export interface UserChartData {
  email: string;
  chart_values: ChartData;
  updated_at?: string;
}

