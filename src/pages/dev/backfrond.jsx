import React from "react";
import AdBanner from "../ads/ad_banner.jsx";
import AdVertical from "../ads/ad_vertical.jsx";  

export default function BackFront() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center fw-bold display-5">Frontend vs Backend: ¿Qué camino elegir en desarrollo web?</h1>

      <section className="mb-4">
        <p className="lead text-secondary text-center fs-4">
          Si estás iniciando en el mundo de la programación web, probablemente te hayas encontrado con los términos <strong>Frontend</strong> y <strong>Backend</strong>. En esta guía te explicamos qué significa cada uno, qué herramientas se utilizan y cuál podría ser mejor para ti según tus intereses.
        </p>
      </section>

      <section className="mb-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-primary">
              <div className="card-body">
                <h3 className="card-title text-primary mb-3 fs-3">Frontend</h3>
                <ul className="list-group list-group-flush mb-3 fs-5">
                  <li className="list-group-item">Es la parte visual que ve el usuario: botones, formularios, menús, etc.</li>
                  <li className="list-group-item">Usa lenguajes como HTML, CSS y JavaScript.</li>
                  <li className="list-group-item">Herramientas comunes: React, Vue, Angular, Tailwind, Bootstrap.</li>
                  <li className="list-group-item">Se enfoca en la experiencia del usuario (UX/UI).</li>
                  <li className="list-group-item">
                    Más información: <a href="https://roadmap.sh/frontend" target="_blank" rel="noopener noreferrer">roadmap.sh/frontend</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-success">
              <div className="card-body">
                <h3 className="card-title text-success mb-3 fs-3">Backend</h3>
                <ul className="list-group list-group-flush mb-3 fs-5">
                  <li className="list-group-item">Se encarga de la lógica, base de datos, servidores y autenticación.</li>
                  <li className="list-group-item">Usa lenguajes como Node.js, Python, Java, PHP.</li>
                  <li className="list-group-item">Herramientas comunes: Express, Django, Flask, PostgreSQL, MongoDB.</li>
                  <li className="list-group-item">Se enfoca en que todo funcione detrás del escenario.</li>
                  <li className="list-group-item">
                    Más información: <a href="https://roadmap.sh/backend" target="_blank" rel="noopener noreferrer">roadmap.sh/backend</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <h2 className="mb-3 text-center fs-2">¿Cuál elegir primero?</h2>
        <p className="text-center fs-4">
          Si disfrutas diseñar interfaces, trabajar con colores, estilos y ver resultados rápidos, probablemente te interese más el <strong>Frontend</strong>. Si te interesa la lógica, resolver problemas, manejar datos y trabajar en lo "invisible", <strong>Backend</strong> puede ser tu mejor opción.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <a href="/blog/primer-proyecto-frontend" className="btn btn-primary btn-lg px-4 fs-5">Quiero probar Frontend</a>
          <a href="/blog/primer-proyecto-backend" className="btn btn-success btn-lg px-4 fs-5">Quiero probar Backend</a>
        </div>
      </section>
      
      <div className="my-4 d-flex justify-content-center">
        <AdBanner />
      </div>

      <section className="mt-5">
        <h3 className="mb-3 fs-3"><span role="img" aria-label="herramienta">🔧</span> Recursos recomendados</h3>
        <ul className="list-group list-group-flush fs-5">
          <li className="list-group-item">
            <a href="https://roadmap.sh/frontend" target="_blank" rel="noopener noreferrer" className="link-primary">Roadmap Frontend</a> – Lo que necesitas aprender paso a paso.
          </li>
          <li className="list-group-item">
            <a href="https://roadmap.sh/backend" target="_blank" rel="noopener noreferrer" className="link-success">Roadmap Backend</a> – Todo el camino para dominar el backend.
          </li>
          <li className="list-group-item">
            <a href="https://frontendmentor.io" target="_blank" rel="noopener noreferrer" className="link-info">Frontend Mentor</a> – Prácticas de diseño frontend.
          </li>
          <li className="list-group-item">
            <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="link-dark">freeCodeCamp</a> – Cursos gratuitos para ambos roles.
          </li>
        </ul>
      </section>

      <div className="mt-5 d-flex justify-content-center">
        <AdVertical />
      </div>

      <footer className="text-center mt-5 pt-5 border-top">
        <p className="text-muted mb-0 fs-6">&copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
