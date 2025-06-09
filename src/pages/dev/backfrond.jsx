import React from "react";

export default function BackFront() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Frontend vs Backend: ¿Qué camino elegir en desarrollo web?</h1>

      <section className="mb-4">
        <p className="lead">
          Si estás iniciando en el mundo de la programación web, probablemente te hayas encontrado con los términos <strong>Frontend</strong> y <strong>Backend</strong>. En esta guía te explicamos qué significa cada uno, qué herramientas se utilizan y cuál podría ser mejor para ti según tus intereses.
        </p>
      </section>

      <section className="mb-5">
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-primary">Frontend</h3>
            <ul>
              <li>Es la parte visual que ve el usuario: botones, formularios, menús, etc.</li>
              <li>Usa lenguajes como HTML, CSS y JavaScript.</li>
              <li>Herramientas comunes: React, Vue, Angular, Tailwind, Bootstrap.</li>
              <li>Se enfoca en la experiencia del usuario (UX/UI).</li>
              <li>Mas informacion sobre los conceptos de Frontend en esta pagina https://roadmap.sh/frontend .</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3 className="text-success">Backend</h3>
            <ul>
              <li>Se encarga de la lógica, base de datos, servidores y autenticación.</li>
              <li>Usa lenguajes como Node.js, Python, Java, PHP.</li>
              <li>Herramientas comunes: Express, Django, Flask, PostgreSQL, MongoDB.</li>
              <li>Se enfoca en que todo funcione detrás del escenario.</li>
              <li>Mas informacion sobre los conceptos de Backend en esta pagina https://roadmap.sh/backend</li>
            </ul>
          </div>
        </div>
      </section>

      <div>
              <AdBanner />
            </div>

      <section className="my-5">
        <h2 className="mb-3">¿Cuál elegir primero?</h2>
        <p>
          Si disfrutas diseñar interfaces, trabajar con colores, estilos y ver resultados rápidos, probablemente te interese más el <strong>Frontend</strong>. Si te interesa la lógica, resolver problemas, manejar datos y trabajar en lo "invisible", <strong>Backend</strong> puede ser tu mejor opción.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <a href="/blog/primer-proyecto-frontend" className="btn btn-primary">Quiero probar Frontend</a>
          <a href="/blog/primer-proyecto-backend" className="btn btn-success">Quiero probar Backend</a>
        </div>
      </section>

      <section className="mt-5">
        <h3>🔧 Recursos recomendados</h3>
        <ul>
          <li><a href="https://roadmap.sh/frontend" target="_blank" rel="noopener noreferrer">Roadmap Frontend</a> – Lo que necesitas aprender paso a paso.</li>
          <li><a href="https://roadmap.sh/backend" target="_blank" rel="noopener noreferrer">Roadmap Backend</a> – Todo el camino para dominar el backend.</li>
          <li><a href="https://frontendmentor.io" target="_blank" rel="noopener noreferrer">Frontend Mentor</a> – Prácticas de diseño frontend.</li>
          <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a> – Cursos gratuitos para ambos roles.</li>
        </ul>
      </section>

      <div className="mt-5">
              <AdVertical />
              </div>

      <footer className="text-center mt-5 pt-5 border-top">
        <p>&copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.</p>
       
      </footer>
    </div>
  );
}
