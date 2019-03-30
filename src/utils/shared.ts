export function copyArrayWithObject<T>(routes: T[]): T[] {
  return routes.map(route => JSON.parse(JSON.stringify(route)));
}
}
