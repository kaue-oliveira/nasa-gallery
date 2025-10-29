import { useState } from "react";
import { fetchRoverPhotos } from "../api/nasa";

export default function Rovers() {
  const [rover, setRover] = useState("curiosity");
  const [date, setDate] = useState("");
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const data = await fetchRoverPhotos(rover, date);
      setPhotos(data);
    } catch {
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container my-4">
      <h1>Fotos dos Rovers</h1>
      <form className="row g-2 mb-3" onSubmit={(e) => { e.preventDefault(); load(); }}>
        <div className="col-auto">
          <select className="form-select" value={rover} onChange={(e) => setRover(e.target.value)}>
            <option value="curiosity">Curiosity</option>
            <option value="opportunity">Opportunity</option>
            <option value="spirit">Spirit</option>
          </select>
        </div>
        <div className="col-auto">
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" type="submit">Buscar</button>
        </div>
      </form>

      {loading && <p>Carregando...</p>}
      <div className="row">
        {photos.map((p) => (
          <div key={p.id} className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card h-100">
              <img src={p.img_src} className="card-img-top" />
              <div className="card-body">
                <h6>{p.rover.name} — {p.camera.full_name}</h6>
                <p><small>{p.earth_date}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
