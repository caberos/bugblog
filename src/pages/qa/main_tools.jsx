import React from "react";
import AdBanner from "../ads/ad_banner.jsx";
import AdVertical from "../ads/ad_vertical.jsx";

export default function MainTools() {
  return (
    <div className="container py-5" style={{ fontSize: "1.25rem" }}>
      <h1 className="mb-4 display-4 text-primary text-center" style={{ fontSize: "3rem" }}>Herramientas de Testing para Principiantes</h1>

      <section className="mb-4">
        <p className="lead text-secondary text-center" style={{ fontSize: "1.5rem" }}>
          Si estás empezando en el mundo del testing, existen herramientas que te
          permiten probar software de forma efectiva y sin necesidad de mucha experiencia técnica.
        </p>
        <p className="text-center" style={{ fontSize: "1.25rem" }}>
          Aquí te presentamos algunas de las herramientas más accesibles y populares para dar tus primeros pasos como tester.
        </p>
      </section>
      <section className="mb-5">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="h5 card-title text-info" style={{ fontSize: "1.5rem" }}>1. Postman</h2>
                <p className="card-text" style={{ fontSize: "1.15rem" }}>
                  Ideal para probar APIs de manera visual. Puedes enviar peticiones GET, POST, PUT y DELETE sin necesidad de programar.
                </p>
                <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary w-100" style={{ fontSize: "1.1rem" }}>Ir a Postman</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="h5 card-title text-info" style={{ fontSize: "1.5rem" }}>2. Testing Library</h2>
                <p className="card-text" style={{ fontSize: "1.15rem" }}>
                  Una biblioteca muy usada en el mundo React para probar interfaces de usuario de forma sencilla y accesible.
                </p>
                <a href="https://testing-library.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary w-100" style={{ fontSize: "1.1rem" }}>Explorar Testing Library</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="h5 card-title text-info" style={{ fontSize: "1.5rem" }}>3. Cypress</h2>
                <p className="card-text" style={{ fontSize: "1.15rem" }}>
                  Herramienta de testing end-to-end para probar flujos completos en aplicaciones web. Tiene una interfaz visual y grabadora de pasos.
                </p>
                <a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary w-100" style={{ fontSize: "1.1rem" }}>Ver Cypress</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="h5 card-title text-info" style={{ fontSize: "1.5rem" }}>4. Playwright</h2>
                <p className="card-text" style={{ fontSize: "1.15rem" }}>
                  Alternativa moderna a Selenium. Permite automatizar pruebas de UI con una sintaxis simple y soporte para múltiples navegadores.
                </p>
                <a href="https://playwright.dev/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary w-100" style={{ fontSize: "1.1rem" }}>Aprender Playwright</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light p-4 rounded shadow-sm mt-5">
        <h3 className="mb-3 text-success" style={{ fontSize: "2rem" }}>🔧 Consejos para elegir tu primera herramienta</h3>
        <ul className="list-group list-group-flush" style={{ fontSize: "1.2rem" }}>
          <li className="list-group-item">Empieza con herramientas visuales como Postman o Cypress si no sabes programar.</li>
          <li className="list-group-item">Si ya conoces JavaScript, prueba Testing Library o Playwright.</li>
          <li className="list-group-item">No intentes aprender todas a la vez. Profundiza en una antes de saltar a otra.</li>
        </ul>
      </section>

      <div className="mt-5 d-flex justify-content-center">
        <AdVertical />
      </div>

      <footer className="text-center mt-5 pt-5 border-top text-muted" style={{ fontSize: "1.1rem" }}>
        <p>&copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
} 
