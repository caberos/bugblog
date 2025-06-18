

export default function Blog() {
  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-3 fw-bold text-primary">Blog de Desarrollo y QA</h1>
        <p className="lead fs-3">
          Explora artículos, guías y recursos sobre desarrollo de software y aseguramiento de calidad.
        </p>
      </header>

      <section className="mb-5">
        <h2 className="h2 fw-semibold mb-4">Últimos artículos</h2>
        <ul className="list-unstyled">
          <li className="mb-3">
            <a href="/blog/dev-vs-qa" className="text-decoration-none text-primary fs-4">DEV vs QA: ¿Qué camino tomar?</a>
          </li>
          <li className="mb-3">
            <a href="/blog/rol-dev" className="text-decoration-none text-primary fs-4">Perfil de un Desarrollador (DEV)</a>
          </li>
          <li className="mb-3">
            <a href="/blog/rol-qa" className="text-decoration-none text-primary fs-4">Perfil de un QA (Quality Assurance)</a>
          </li>
          <li className="mb-3">
            <a href="/blog/qa-modern" className="text-decoration-none text-primary fs-4">Herramientas de un QA moderno</a>
          </li>
        </ul>
      </section>

      <section className="text-center my-5">
        <h2 className="h2 fw-semibold mb-4">¿Tienes preguntas?</h2>
        <p className="fs-4 text-muted mb-4">Visita nuestra sección de preguntas frecuentes o contáctanos directamente.</p>
        <a href="/faq" className="btn btn-outline-secondary btn-lg px-5 py-3 fs-4 shadow">Ir a FAQ</a>
      </section>
    </div>
  );
}