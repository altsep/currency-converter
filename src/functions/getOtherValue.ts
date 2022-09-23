export function getOtherValue(
  isBaseInstance: boolean,
  value: string,
  ratio: number | null
): string {
  if (!ratio || value.length === 0) return '';
  const numericValue = +value;
  const result = isBaseInstance ? numericValue * ratio : numericValue / ratio;
  return result.toFixed(2).toString().replace('.00', '');
}
