import { useState, useEffect } from "react";

interface ImageCardProps {
  title: string;
  explanation: string;
  url: string;
  media_type: string;
}

export default function ImageCard({ title, explanation, url, media_type }: ImageCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const localStorageKey = "apod-favorites";

  // Verifica se a imagem já está nos favoritos
  useEffect(() => {
    const stored = localStorage.getItem(localStorageKey);
    if (stored) {
      const favorites = JSON.parse(stored);
      const exists = favorites.some((item: any) => item.url === url);
      setIsFavorite(exists);
    }
  }, [url]);

  // Adiciona ou remove do localStorage
  const toggleFavorite = () => {
    const stored = localStorage.getItem(localStorageKey);
    let favorites = stored ? JSON.parse(stored) : [];

    if (isFavorite) {
      favorites = favorites.filter((item: any) => item.url !== url);
    } else {
      favorites.push({ title, explanation, url, media_type });
    }

    localStorage.setItem(localStorageKey, JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card mb-4 image-card-hover">
      {media_type === "image" ? (
        <img src={url} className="card-img-top" alt={title} />
      ) : (
        <div className="ratio ratio-16x9">
          <iframe src={url} title={title}></iframe>
        </div>
      )}

      <div className="card-body">
        <h5 className="apod-title">{title}</h5>
        <p className="apod-description" dangerouslySetInnerHTML={{ __html: explanation }}></p>

        {/* Botão de Favoritar */}
        <button
          className={`btn btn-warning mt-3 w-100`}
          onClick={toggleFavorite}
        >
          {isFavorite ? "Remover Favorito" : "Favoritar"}
        </button>
      </div>
    </div>
  );
}
