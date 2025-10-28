const BASE = "https://api.nasa.gov";
const KEY = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";

export async function fetchAPOD(date?: string) {
  const params = new URLSearchParams({ api_key: KEY });
  if (date) params.append("date", date);
  const res = await fetch(`${BASE}/planetary/apod?${params.toString()}`);
  if (!res.ok) throw new Error("Erro ao buscar APOD");
  return res.json();
}

export async function fetchRoverPhotos(rover: string, earth_date?: string) {
  const params = new URLSearchParams({ api_key: KEY });
  if (earth_date) params.append("earth_date", earth_date);
  const res = await fetch(`${BASE}/mars-photos/api/v1/rovers/${rover}/photos?${params.toString()}`);
  if (!res.ok) throw new Error("Erro ao buscar fotos do rover");
  const data = await res.json();
  return data.photos;
}
