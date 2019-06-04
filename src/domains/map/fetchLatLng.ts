export interface LatLng {
  lat: number;
  lng: number;
}

export async function fetchLatLng(address: string): Promise<LatLng> {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_GOOGLE_MAPS_API_URI}/geocoding?address=${address}`,
    );
    if (res.ok) {
      const latlng = await res.json();
      return latlng.results[0].geometry.location;
    }
    return res.json().then(error => {
      throw new Error(`API Error: ${error}`);
    });
  } catch (error) {
    throw new Error(`Fetch Error: ${error}`);
  }
}
