export function copyArrayWithObject<T>(array: T[]): T[] {
  return array.map(arr => JSON.parse(JSON.stringify(arr)));
}
