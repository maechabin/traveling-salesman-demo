export interface LatLng {
  lat: number;
  lng: number;
}

export async function fetchLatLng(address: string): Promise<LatLng> {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_GOOGLE_MAPS_API_URI}/geocoding?address=${address}`,
    );
    const latlng = await res.json();
    return latlng.results[0].geometry.location;
  } catch (error) {
    return error;
  }
}
