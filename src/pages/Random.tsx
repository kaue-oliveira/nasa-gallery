import { useEffect, useState } from "react";
import { fetchAPOD } from "../api/nasa";
import ImageCard from "../components/ImageCard";

export default function About() {
  const [apod, setApod] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadRandom = async () => {
    setLoading(true);
    setError("");
    try {
      const randomDate = getRandomDate();
      const data = await fetchAPOD(randomDate);
      setApod(data);
    } catch (e) {
      setError("Erro ao carregar imagem aleatória");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRandom();
  }, []);

  return (
    <div className="container my-4">
      <h1 className="mb-4">Imagem Aleatória do Dia (APOD)</h1>
      <button className="btn btn-primary mb-4" onClick={loadRandom}>
        Carregar outra imagem
      </button>

      {loading && <p>Carregando...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

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

// Função para gerar data aleatória
function getRandomDate(): string {
  const start = new Date(1995, 5, 16).getTime(); // 16 junho 1995
  const end = new Date().getTime();
  const randomTime = start + Math.random() * (end - start);
  const randomDate = new Date(randomTime);
  return randomDate.toISOString().split("T")[0]; // YYYY-MM-DD
}
