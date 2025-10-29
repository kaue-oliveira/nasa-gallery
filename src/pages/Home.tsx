import { useEffect, useState } from "react";
import { fetchAPOD } from "../api/nasa";
import ImageCard from "../components/ImageCard";

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
      setError(""); // limpa erro ao carregar com sucesso
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
      <h1 className="mb-4">Imagem do Dia (APOD)</h1>

      {/* Formulário para buscar por data */}
      <form
        className="row g-2 mb-3"
        onSubmit={(e) => {
          e.preventDefault();
          load(date);
        }}
      >
        <div className="col-auto">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" type="submit">
            Buscar
          </button>
        </div>
      </form>

      {/* Mensagens de carregamento ou erro */}
      {loading && <p>Carregando...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Exibe a APOD usando ImageCard */}
      {apod && (
        <ImageCard
          title={apod.title}
          explanation={apod.explanation}
          url={apod.url}
          media_type={apod.media_type}
        />
      )}
    </div>
  );
}
