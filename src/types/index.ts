export interface APOD {
  date: string;
  explanation: string;
  hdurl?: string;
  media_type: 'image' | 'video';
  service_version: string;
  title: string;
  url: string;
}

export interface RoverPhoto {
  id: number;
  sol: number;
  camera: { id: number; name: string; rover_id: number; full_name: string };
  img_src: string;
  earth_date: string;
  rover: { id: number; name: string; landing_date: string; launch_date: string; status: string };
}
