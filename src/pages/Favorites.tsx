import { useEffect, useState } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  return (
    <div className="container my-4">
      <h1>Favoritos</h1>
      {favorites.length === 0 && <p>Nenhum favorito salvo.</p>}
      <div className="row">
        {favorites.map((url, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card h-100">
              <img src={url} className="card-img-top" alt="Favorito" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
