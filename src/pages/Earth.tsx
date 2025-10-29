import { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export default function Earth() {
  const [photo, setPhoto] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRandomEarthPhoto = async () => {
    setLoading(true);
    setError("");
    setPhoto(null);

    try {
      // Pega todas as fotos recentes diretamente do endpoint principal
      const res = await fetch(
        `https://api.nasa.gov/EPIC/api/natural/images?api_key=${API_KEY}`
      );

      if (!res.ok) throw new Error("Erro na requisição da API");

      const data = await res.json();

      if (!data || data.length === 0) {
        setError("Nenhuma foto encontrada da Terra.");
        setLoading(false);
        return;
      }

      // Escolhe uma foto aleatória do array retornado
      const selected = data[Math.floor(Math.random() * data.length)];

      // Monta a URL da imagem manualmente
      const datePath = selected.date.split(" ")[0].replace(/-/g, "/"); // YYYY/MM/DD
      const url = `https://epic.gsfc.nasa.gov/archive/natural/${datePath}/png/${selected.image}.png`;

      setPhoto({
        title: `Earth - ${selected.caption}`,
        explanation: `Data: ${selected.date}`,
        url,
        media_type: "image",
      });
    } catch (e) {
      console.error(e);
      setError("Erro ao carregar fotos da Terra.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomEarthPhoto();
  }, []);

  return (
    <div className="container my-4">
      <h1 className="mb-4">Foto Aleatória da Terra (EPIC)</h1>

      {loading && <p>Carregando...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {photo && (
        <ImageCard
          title={photo.title}
          explanation={photo.explanation}
          url={photo.url}
          media_type="image"
        />
      )}

      <button className="btn btn-primary mt-3" onClick={fetchRandomEarthPhoto}>
        Nova Foto Aleatória
      </button>
    </div>
  );
}
