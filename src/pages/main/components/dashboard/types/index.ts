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
