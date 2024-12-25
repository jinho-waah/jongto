export const formatNumber = (value: string | number): string => {
  if (typeof value === "string") {
    const numericValue = parseFloat(value.replace(/,/g, "")); // 문자열에서 콤마 제거 후 숫자로 변환
    if (isNaN(numericValue)) return value; // 숫자로 변환 불가 시 원본 반환
    return numericValue.toLocaleString(); // 숫자를 포맷팅
  }

  return value.toLocaleString(); // 숫자인 경우 그대로 포맷팅
};
