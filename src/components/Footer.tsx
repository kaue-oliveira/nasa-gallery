export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <div className="container d-flex justify-content-between flex-wrap gap-2">
        <small>© {new Date().getFullYear()} NasaGallery — NASA APIs</small>
        <small>Feito com carinho usando React + TypeScript, Desafio Zetta Lab</small>
      </div>
    </footer>
  );
}
