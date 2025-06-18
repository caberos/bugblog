import React from "react";
import AdBanner from "../ads/ad_banner.jsx";
import AdVertical from "../ads/ad_vertical.jsx";

export default function DevVsQaPage() {
  return (
    <main className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-3 fw-bold text-primary">DEV vs QA: Diferencias clave</h1>
        <p className="lead fs-3">
          ¿Estás decidiendo entre convertirte en Desarrollador o QA? Descubre
          aquí las diferencias esenciales para tomar la mejor decisión.
        </p>
      </header>

      <div className="row g-5 mb-5">
        <section className="col-lg-6">
          <div className="card h-100 border-0 shadow-lg">
            <div className="card-body">
              <h2 className="h2 fw-bold mb-4 text-success">¿Qué hace un Desarrollador (DEV)?</h2>
              <ul className="list-unstyled fs-4">
                <li className="mb-3"><i className="bi bi-code-slash text-primary me-2"></i>Escribe y mantiene código para crear funcionalidades y aplicaciones.</li>
                <li className="mb-3"><i className="bi bi-laptop text-primary me-2"></i>Trabaja con lenguajes como JavaScript, Python, Java, entre otros.</li>
                <li className="mb-3"><i className="bi bi-tools text-primary me-2"></i>Se enfoca en construir soluciones y resolver problemas técnicos.</li>
                <li className="mb-3"><i className="bi bi-people text-primary me-2"></i>Colabora estrechamente con diseñadores, QA y otros desarrolladores.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="col-lg-6">
          <div className="card h-100 border-0 shadow-lg">
            <div className="card-body">
              <h2 className="h2 fw-bold mb-4 text-warning">¿Qué hace un QA (Quality Assurance)?</h2>
              <ul className="list-unstyled fs-4">
                <li className="mb-3"><i className="bi bi-bug text-warning me-2"></i>Prueba el software para detectar errores antes de que llegue a producción.</li>
                <li className="mb-3"><i className="bi bi-list-check text-warning me-2"></i>Diseña y ejecuta casos de prueba manuales o automatizados.</li>
                <li className="mb-3"><i className="bi bi-patch-check text-warning me-2"></i>Colabora con desarrolladores para mejorar la calidad del producto.</li>
                <li className="mb-3"><i className="bi bi-boxes text-warning me-2"></i>Utiliza herramientas como Postman, Playwright, Selenium, entre otras.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="mb-5">
        <h2 className="h2 fw-bold mb-4 text-center text-info">Comparación rápida</h2>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card h-100 border-success border-3 shadow">
              <div className="card-body">
                <h4 className="text-success fw-bold fs-2 mb-3"><i className="bi bi-terminal me-2"></i>DEV</h4>
                <ul className="fs-4">
                  <li className="mb-2"><i className="bi bi-arrow-up-right-circle me-2"></i>Crea el producto</li>
                  <li className="mb-2"><i className="bi bi-hammer me-2"></i>Enfocado en construir</li>
                  <li className="mb-2"><i className="bi bi-code me-2"></i>Requiere habilidades de programación sólidas</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100 border-warning border-3 shadow">
              <div className="card-body">
                <h4 className="text-warning fw-bold fs-2 mb-3"><i className="bi bi-shield-check me-2"></i>QA</h4>
                <ul className="fs-4">
                  <li className="mb-2"><i className="bi bi-eye me-2"></i>Valida el producto</li>
                  <li className="mb-2"><i className="bi bi-search me-2"></i>Enfocado en encontrar errores</li>
                  <li className="mb-2"><i className="bi bi-graph-up-arrow me-2"></i>Requiere pensamiento analítico y atención al detalle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-5">
        <AdBanner />
      </div>

      <section className="text-center my-5">
        <h2 className="h2 fw-bold mb-3 text-primary">¿Cuál es mejor para ti?</h2>
        <p className="lead fs-3 mb-4">Depende de tus intereses: ¿prefieres construir o validar?</p>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <a href="/blog/rol-dev" className="btn btn-success px-5 py-3 fs-4 fw-semibold shadow">
            Me interesa DEV
          </a>
          <a href="/blog/rol-qa" className="btn btn-warning px-5 py-3 fs-4 fw-semibold shadow">
            Me interesa QA
          </a>
        </div>
      </section>

      <div className="mt-5">
        <AdVertical />
      </div>

      <footer className="text-center mt-5 pt-5 border-top text-muted fs-5">
        <p>&copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
