export function copyArrayWithObject<T>(array: T[]): T[] {
  return array.map(array => JSON.parse(JSON.stringify(array)));
}
