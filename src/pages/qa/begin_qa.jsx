import React from "react";
import AdBanner from "../ads/ad_banner.jsx";
import AdVertical from "../ads/ad_vertical.jsx";

export default function BeginQA() {
  return (
   <div className="container py-5" style={{ fontSize: "1.15rem" }}>
  <h1 className="mb-4 text-center" style={{ fontSize: "2.5rem" }}>Cómo empezar en QA sin experiencia</h1>

  <section className="mb-5">
    <div className="alert alert-info fs-5">
      ¿Quieres iniciar en el mundo del aseguramiento de calidad de software pero no sabes por dónde empezar? Aquí te damos una guía clara y sencilla para comenzar desde cero.
    </div>
  </section>

  <section className="mb-5">
    <h2 className="h4" style={{ fontSize: "1.5rem" }}>1. Entiende qué es QA</h2>
    <p>
      QA (Quality Assurance) se refiere al proceso de garantizar que una aplicación funcione correctamente antes de que llegue al usuario final. Los testers o QAs son los encargados de encontrar errores y asegurar la calidad del producto.
    </p>
  </section>

  <section className="mb-5">
    <h2 className="h4" style={{ fontSize: "1.5rem" }}>2. Aprende los conceptos básicos</h2>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Tipos de pruebas: manuales, automatizadas, funcionales, regresión, etc.</li>
      <li className="list-group-item">Ciclo de vida del software (SDLC)</li>
      <li className="list-group-item">Reportes de bugs</li>
    </ul>
  </section>

  <section className="mb-5">
    <h2 className="h4" style={{ fontSize: "1.5rem" }}>3. Herramientas recomendadas para principiantes</h2>
    <div className="row row-cols-1 row-cols-md-3 g-3">
      <div className="col">
        <div className="card border-secondary h-100">
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "1.2rem" }}>Postman</h5>
            <p className="card-text">Para probar APIs.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-secondary h-100">
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "1.2rem" }}>Jira</h5>
            <p className="card-text">Gestión de tareas y bugs.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-secondary h-100">
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "1.2rem" }}>TestRail o Google Sheets</h5>
            <p className="card-text">Documentación de pruebas.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="mb-5">
    <h2 className="h4" style={{ fontSize: "1.5rem" }}>4. Aprende automatización básica</h2>
    <p>
      Una vez que tengas bases sólidas, puedes empezar a explorar herramientas de automatización como Selenium, Cypress o Playwright.
    </p>
  </section>

  <section className="mb-5">
    <h2 className="h4" style={{ fontSize: "1.5rem" }}>5. Crea tu portafolio de pruebas</h2>
    <p>
      Simula pruebas de aplicaciones reales, crea reportes y súbelos a GitHub o un blog personal. Esto mostrará tu compromiso y habilidades.
    </p>
  </section>

  <div className="my-4">
    <AdBanner />
  </div>

  <section className="mb-5">
    <h2 className="h4" style={{ fontSize: "1.5rem" }}>🔗 Recursos gratuitos para comenzar</h2>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <a href="https://www.qasandbox.com" target="_blank" rel="noopener noreferrer">QASandbox</a>
      </li>
      <li className="list-group-item">
        <a href="https://roadmap.sh/qa" target="_blank" rel="noopener noreferrer">Roadmap QA</a>
      </li>
      <li className="list-group-item">
        <a href="https://testautomationu.applitools.com/" target="_blank" rel="noopener noreferrer">Test Automation University</a>
      </li>
    </ul>
  </section>

  <div className="my-5">
    <AdVertical />
  </div>

  <footer className="text-center mt-5 pt-5 border-top">
    <p className="text-muted" style={{ fontSize: "1rem" }}>&copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.</p>
  </footer>
</div>

  );
}
