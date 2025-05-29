import React from "react";

export default function MainTools() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Herramientas de Testing para Principiantes</h1>

      <section className="mb-4">
        <p className="lead">
          Si estás empezando en el mundo del testing, existen herramientas que te
          permiten probar software de forma efectiva y sin necesidad de mucha experiencia técnica.
        </p>
        <p>
          Aquí te presentamos algunas de las herramientas más accesibles y populares para dar tus primeros pasos como tester.
        </p>
      </section>

      <section className="mb-5">
        <h2>1. Postman</h2>
        <p>
          Ideal para probar APIs de manera visual. Puedes enviar peticiones GET, POST, PUT y DELETE sin necesidad de programar.
        </p>
        <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mb-4">Ir a Postman</a>

        <h2>2. Testing Library</h2>
        <p>
          Una biblioteca muy usada en el mundo React para probar interfaces de usuario de forma sencilla y accesible.
        </p>
        <a href="https://testing-library.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mb-4">Explorar Testing Library</a>

        <h2>3. Cypress</h2>
        <p>
          Herramienta de testing end-to-end para probar flujos completos en aplicaciones web. Tiene una interfaz visual y grabadora de pasos.
        </p>
        <a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mb-4">Ver Cypress</a>

        <h2>4. Playwright</h2>
        <p>
          Alternativa moderna a Selenium. Permite automatizar pruebas de UI con una sintaxis simple y soporte para múltiples navegadores.
        </p>
        <a href="https://playwright.dev/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mb-4">Aprender Playwright</a>
      </section>

      <section className="bg-light p-4 rounded">
        <h3>🔧 Consejos para elegir tu primera herramienta</h3>
        <ul>
          <li>Empieza con herramientas visuales como Postman o Cypress si no sabes programar.</li>
          <li>Si ya conoces JavaScript, prueba Testing Library o Playwright.</li>
          <li>No intentes aprender todas a la vez. Profundiza en una antes de saltar a otra.</li>
        </ul>
      </section>

      <footer className="text-center mt-5 pt-5 border-top">
        <p>&copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
} 
