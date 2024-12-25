export const URL = "http://3.36.151.122";

export const TAB_NAME = {
  gainTop10: "등락율 상위 Top 10",
  lossTop10: "등락율 하위 Top 10",
  volumeTop10: "거래량 상위 Top 10",
  marketCapTop10: "시가총액 Top 10",
};

export const GAIN_TOP_10 = [
  "data_rank",
  "hts_kor_isnm",
  "mksc_shrn_iscd",
  "stck_prpr",
  "prdy_vrss",
  "prdy_ctrt",
  "acml_vol",
];

export const LOSS_TOP_10 = [
  "data_rank",
  "hts_kor_isnm",
  "mksc_shrn_iscd",
  "stck_prpr",
  "prdy_vrss",
  "prdy_ctrt",
  "acml_vol",
];

export const VOLUME_TOP_10 = [
  "data_rank",
  "hts_kor_isnm",
  "mksc_shrn_iscd",
  "stck_prpr",
  "prdy_vrss",
  "prdy_ctrt",
  "acml_vol",
];

export const MARKET_CAP_TOP_10 = [
  "data_rank",
  "hts_kor_isnm",
  "mksc_shrn_iscd",
  "stck_prpr",
  "prdy_vrss",
  "prdy_ctrt",
  "acml_vol",
];

export const TABLE_FIELDS: Record<string, string> = {
  data_rank: "순위",
  hts_kor_isnm: "종목명",
  mksc_shrn_iscd: "종목코드",
  stck_prpr: "현재가",
  acml_vol: "누적 거래량",
  prdy_vrss: "전일 대비 가격 차이",
  prdy_ctrt: "전일 대비율",
};

export const TABLE_QUERY_KEY: Record<string, string> = {
  GAIN_RATE_RANK: "gainRateRank",
  LOSS_RATE_RANK: "lossRateRank",
  VOLUME_RANK: "volumeRank",
  MARKET_CAP_RANK: "marketCapRank",
};
