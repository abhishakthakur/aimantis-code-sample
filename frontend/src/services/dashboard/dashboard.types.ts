// Excerpt containing occupancy summaries and chart types.

export interface OccupancyData {
  today: number; 
  next_7_days: number; 
  next_30_days: number;
}

export interface MonthlyOccupancyChart {
  month: string; 
  year: string;
  occupancy: number; 
}

export interface ChartsData {
  monthly_occupancy: MonthlyOccupancyChart[];
}
