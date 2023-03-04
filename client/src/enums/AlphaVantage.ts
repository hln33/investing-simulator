enum DataType {
  'JSON' = 'json', 
  'CSV' = 'csv',
};

enum TimeSeries {
  'INTRADAY' = 'TIME_SERIES_INTRADAY',
};

enum Symbol {
  'IBM' = 'IBM', 
};

enum OutputSize {
  'COMPACT' = 'compact', 
};

enum Interval {
  'ONE_MIN' = '1min', 
  'FIVE_MIN' = '5min', 
  'FIFTEEN_MIN' ='15min', 
  'THIRTY_MIN' = '30min',
  'ONE_HOUR' = '60min',
};

export {
  DataType,
  TimeSeries,
  Symbol,
  OutputSize,
  Interval,
};
