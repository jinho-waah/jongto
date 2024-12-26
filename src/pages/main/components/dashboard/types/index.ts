interface StockData {
  acml_vol: string;
  data_rank: string;
  hts_kor_isnm: string;
  mksc_shrn_iscd: string;
  prdy_ctrt: string;
  prdy_vrss: string;
  prdy_vrss_sign: string;
  stck_prpr: string;
}

export interface StockTableProps {
  data: StockData[];
  fields: (keyof StockData)[];
}

export const GAIN_TOP_10: (keyof StockData)[] = [
  "data_rank",
  "hts_kor_isnm",
  "mksc_shrn_iscd",
  "stck_prpr",
  "prdy_vrss",
  "prdy_ctrt",
  "acml_vol",
] as const;

export const LOSS_TOP_10: (keyof StockData)[] = [
  "data_rank",
  "hts_kor_isnm",
  "mksc_shrn_iscd",
  "stck_prpr",
  "prdy_vrss",
  "prdy_ctrt",
  "acml_vol",
] as const;

export const VOLUME_TOP_10: (keyof StockData)[] = [
  "data_rank",
  "hts_kor_isnm",
  "mksc_shrn_iscd",
  "stck_prpr",
  "prdy_vrss",
  "prdy_ctrt",
  "acml_vol",
] as const;

export const MARKET_CAP_TOP_10: (keyof StockData)[] = [
  "data_rank",
  "hts_kor_isnm",
  "mksc_shrn_iscd",
  "stck_prpr",
  "prdy_vrss",
  "prdy_ctrt",
  "acml_vol",
] as const;