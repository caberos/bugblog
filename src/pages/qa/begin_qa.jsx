import React from "react";

export default function BeginQA() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Cómo empezar en QA sin experiencia</h1>

      <section className="mb-4">
        <p className="lead">
          ¿Quieres iniciar en el mundo del aseguramiento de calidad de software pero no sabes por dónde empezar? Aquí te damos una guía clara y sencilla para comenzar desde cero.
        </p>
      </section>

      <section className="mb-4">
        <h2>1. Entiende qué es QA</h2>
        <p>
          QA (Quality Assurance) se refiere al proceso de garantizar que una aplicación funcione correctamente antes de que llegue al usuario final. Los testers o QAs son los encargados de encontrar errores y asegurar la calidad del producto.
        </p>
      </section>

      <section className="mb-4">
        <h2>2. Aprende los conceptos básicos</h2>
        <ul>
          <li>Tipos de pruebas: manuales, automatizadas, funcionales, regresión, etc.</li>
          <li>Ciclo de vida del software (SDLC)</li>
          <li>Reportes de bugs</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>3. Herramientas recomendadas para principiantes</h2>
        <ul>
          <li><strong>Postman:</strong> Para probar APIs.</li>
          <li><strong>Jira:</strong> Gestión de tareas y bugs.</li>
          <li><strong>TestRail o Google Sheets:</strong> Documentación de pruebas.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>4. Aprende automatización básica</h2>
        <p>
          Una vez que tengas bases sólidas, puedes empezar a explorar herramientas de automatización como Selenium, Cypress o Playwright.
        </p>
      </section>

      <section className="mb-4">
        <h2>5. Crea tu portafolio de pruebas</h2>
        <p>
          Simula pruebas de aplicaciones reales, crea reportes y súbelos a GitHub o un blog personal. Esto mostrará tu compromiso y habilidades.
        </p>
      </section>

      <section className="mb-4">
        <h2>🔗 Recursos gratuitos para comenzar</h2>
        <ul>
          <li><a href="https://www.qasandbox.com" target="_blank" rel="noopener noreferrer">QASandbox</a></li>
          <li><a href="https://roadmap.sh/qa" target="_blank" rel="noopener noreferrer">Roadmap QA</a></li>
          <li><a href="https://testautomationu.applitools.com/" target="_blank" rel="noopener noreferrer">Test Automation University</a></li>
        </ul>
      </section>

      <footer className="text-center mt-5 pt-5 border-top">
        <p>&copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.</p>
       
      </footer>
    </div>
  );
}
