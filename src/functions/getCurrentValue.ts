export function getCurrentValue(
  isBaseInstance: boolean,
  otherValue: string,
  ratio: number
) {
  if (!ratio || otherValue.length === 0) return '';
  const numericValue = +otherValue;
  const result = isBaseInstance ? numericValue / ratio : numericValue * ratio;
  return result.toFixed(2).toString().replace('.00', '');
}
