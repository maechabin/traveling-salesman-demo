import { Route } from '../state.model';

export function copyArrayWithObject(routes: Route[]): Route[] {
  return routes.map(route => JSON.parse(JSON.stringify(route)));
}

export async function fetchLatLngFromGMaps(address: string): Promise<{ lat: number; lng: number }> {
  const res = await fetch(
    `https://us-central1-maps-functions-6b26b.cloudfunctions.net/geocoding?address=${address}`,
  );
  const latlng = await res.json();
  return latlng.results[0].geometry.location;
}
