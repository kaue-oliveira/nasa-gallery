import { useEffect, useState } from "react";
import { fetchAPOD } from "../api/nasa";

export default function Home() {
  const [apod, setApod] = useState<any>(null);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function load(dateParam?: string) {
    try {
      setLoading(true);
      const data = await fetchAPOD(dateParam);
      setApod(data);
    } catch (e) {
      setError("Erro ao carregar dados");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="container my-4">
      <h1>Imagem do Dia (APOD)</h1>
      <form className="row g-2 mb-3" onSubmit={(e) => { e.preventDefault(); load(date); }}>
        <div className="col-auto">
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" type="submit">Buscar</button>
        </div>
      </form>

      {loading && <p>Carregando...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {apod && (
        <div className="card">
          {apod.media_type === "image" ? (
            <img src={apod.url} className="card-img-top" alt={apod.title} />
          ) : (
            <div className="ratio ratio-16x9">
              <iframe src={apod.url} title={apod.title}></iframe>
            </div>
          )}
          <div className="card-body">
            <h5>{apod.title}</h5>
            <p>{apod.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
