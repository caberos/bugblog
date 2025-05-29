import React from "react";

export default function QAModern() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Herramientas de un QA moderno</h1>

      <section className="mb-5">
        <p className="lead">
          Un profesional de QA moderno necesita dominar una variedad de herramientas que le permitan automatizar pruebas, verificar APIs, revisar interfaces y colaborar en equipos ágiles.
        </p>
      </section>

      <section className="mb-5">
        <h2>🔧 Herramientas esenciales</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Postman</strong>: Para pruebas de APIs REST.
          </li>
          <li className="list-group-item">
            <strong>Selenium</strong>: Framework para pruebas automatizadas de interfaces.
          </li>
          <li className="list-group-item">
            <strong>Playwright</strong>: Alternativa moderna a Selenium, creada por Microsoft.
          </li>
          <li className="list-group-item">
            <strong>Jest + Testing Library</strong>: Para pruebas en aplicaciones frontend (React, por ejemplo).
          </li>
          <li className="list-group-item">
            <strong>JIRA</strong>: Para gestión de tareas y bugs.
          </li>
          <li className="list-group-item">
            <strong>Git</strong>: Para control de versiones y colaboración.
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>📦 Herramientas adicionales útiles</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Browser DevTools</strong>: Inspección y depuración directa en el navegador.
          </li>
          <li className="list-group-item">
            <strong>Charles Proxy / Fiddler</strong>: Para analizar tráfico de red.
          </li>
          <li className="list-group-item">
            <strong>TestRail / Xray</strong>: Para gestión de casos de prueba.
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>📘 Recursos recomendados</h2>
        <ul>
          <li>
            <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">Postman</a>
          </li>
          <li>
            <a href="https://playwright.dev/" target="_blank" rel="noopener noreferrer">Playwright</a>
          </li>
          <li>
            <a href="https://testing-library.com/" target="_blank" rel="noopener noreferrer">Testing Library</a>
          </li>
        </ul>
      </section>

      <footer className="text-center mt-5 pt-5 border-top">
        <p>&copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.</p>
        
      </footer>
    </div>
  );
}
