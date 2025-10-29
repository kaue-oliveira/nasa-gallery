import { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export default function Earth() {
  const [photo, setPhoto] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchEarthPhoto = async () => {
    setLoading(true);
    setError("");
    setPhoto(null);

    try {
      const res = await fetch(
        `https://api.nasa.gov/EPIC/api/natural/images?api_key=${API_KEY}`
      );
      const data = await res.json();

      if (data && data.length > 0) {
        // Pega uma foto aleatória do array
        const randomIndex = Math.floor(Math.random() * data.length);
        const selected = data[randomIndex];

        // Construindo a URL da imagem
        const date = selected.date.split(" ")[0].replace(/-/g, "/");
        const url = `https://epic.gsfc.nasa.gov/archive/natural/${date}/png/${selected.image}.png`;

        setPhoto({
          title: `Earth - ${selected.caption}`,
          explanation: `Data: ${selected.date}`,
          url,
          media_type: "image",
        });
      } else {
        setError("Nenhuma foto encontrada da Terra.");
      }
    } catch (e) {
      setError("Erro ao carregar fotos da Terra.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEarthPhoto();
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

      <button className="btn btn-primary mt-3" onClick={fetchEarthPhoto}>
        Nova Foto Aleatória
      </button>
    </div>
  );
}
