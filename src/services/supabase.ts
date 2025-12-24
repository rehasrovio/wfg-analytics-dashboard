import { createClient } from '@supabase/supabase-js';
import type { ChartData } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Fetch user's saved chart data from Supabase
 */
export async function getUserChartData(email: string): Promise<ChartData | null> {
  try {
    const { data, error } = await supabase
      .from('user_chart_data')
      .select('chart_values')
      .eq('email', email)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No rows returned - user doesn't exist yet
        return null;
      }
      console.error('Error fetching chart data:', error);
      return null;
    }

    return data?.chart_values as ChartData | null;
  } catch (error) {
    console.error('Error fetching chart data:', error);
    return null;
  }
}

/**
 * Check if user has existing data in Supabase
 */
export async function checkUserExists(email: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('user_chart_data')
      .select('email')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error checking user:', error);
      return false;
    }

    return !!data;
  } catch (error) {
    console.error('Error checking user:', error);
    return false;
  }
}

/**
 * Save or update user's chart data in Supabase
 */
export async function saveUserChartData(
  email: string,
  chartValues: ChartData
): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('user_chart_data')
      .upsert({
        email,
        chart_values: chartValues,
        updated_at: new Date().toISOString(),
      });

    if (error) {
      console.error('Error saving chart data:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error saving chart data:', error);
    return false;
  }
}

