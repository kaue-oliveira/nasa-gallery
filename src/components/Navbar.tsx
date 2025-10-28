import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">NasaGallery</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/">APOD</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/rovers">Rovers</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/favorites">Favorites</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
