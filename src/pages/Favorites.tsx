import { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("apod-favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  return (
    <div className="container my-4">
      <h1>Galeria de Favoritos</h1>
      {favorites.length === 0 && <p>Nenhum favorito ainda.</p>}

      <div className="row">
        {favorites.map((fav) => (
          <div className="col-md-6" key={fav.url}>
            <ImageCard {...fav} />
          </div>
        ))}
      </div>
    </div>
  );
}
