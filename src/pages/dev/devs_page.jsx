import React from "react";
import AdBanner from "../ads/ad_banner.jsx";
import AdVertical from "../ads/ad_vertical.jsx";

export default function DevsPage() {
  return (
    <div className="container py-5">
      {/* Encabezado */}
      <section className="text-center mb-5">
        <h1 className="display-3 fw-bold">¿Quieres ser Desarrollador?</h1>
        <p className="lead fs-3">
          Explora recursos, tecnologías y consejos para comenzar tu camino como
          Dev Frontend, Backend o Fullstack.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h2 fw-bold text-primary mb-3">¿Qué es un desarrollador?</h2>
        <p className="fs-4">
          Un desarrollador de software es un profesional encargado de crear,
          mantener y mejorar aplicaciones y sistemas informáticos. Su labor
          abarca desde el análisis de requerimientos y el diseño de soluciones,
          hasta la programación, pruebas y despliegue de software. A diferencia
          del programador, el desarrollador suele participar en todo el ciclo de
          vida del desarrollo, colaborando con equipos multidisciplinarios y
          clientes para transformar ideas en productos funcionales.
        </p>
        <div className="row text-center">
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body">
                <h5 className="fw-bold text-success mb-3 fs-3">Funciones principales</h5>
                <ul className="list-unstyled fs-4 text-start">
                  <li>✅ Diseñar y desarrollar aplicaciones y sistemas.</li>
                  <li>✅ Escribir, depurar y mantener código de calidad.</li>
                  <li>✅ Colaborar con equipos de diseño, producto y QA.</li>
                  <li>✅ Documentar procesos y soluciones técnicas.</li>
                  <li>✅ Actualizar y mejorar software existente.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body">
                <h5 className="fw-bold text-info mb-3 fs-3">Habilidades clave</h5>
                <ul className="list-unstyled fs-4 text-start">
                  <li>⭐ Dominio de lenguajes como Python, JS, Java, C++.</li>
                  <li>⭐ Conocimientos en bases de datos y Git.</li>
                  <li>⭐ Pensamiento analítico y resolución de problemas.</li>
                  <li>⭐ Comunicación efectiva y trabajo en equipo.</li>
                  <li>⭐ Adaptabilidad y aprendizaje continuo.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body">
                <h5 className="fw-bold text-warning mb-3 fs-3">Especializaciones</h5>
                <ul className="list-unstyled fs-4 text-start">
                  <li>
                    <strong>Frontend:</strong> UI/UX con HTML, CSS, JS, React.
                  </li>
                  <li>
                    <strong>Backend:</strong> Lógica, bases de datos y servidores
                    con Node.js, Python, SQL.
                  </li>
                  <li>
                    <strong>Fullstack:</strong> Combina frontend + backend + DevOps.
                  </li>
                  <li>🎓 Formación autodidacta, bootcamp o universidad.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="d-flex justify-content-center my-4">
        <span className="text-secondary fs-2 fw-semibold">
          ¡Empieza hoy tu viaje en el mundo del desarrollo!
        </span>
      </div>

      <div className="row g-4 mb-5">
        <section className="col-md-6">
          <div className="card h-100 border-primary border-3 shadow-lg">
            <div className="card-body">
              <h2 className="h3 mb-3 text-primary">Rutas recomendadas</h2>
              <ul className="list-group list-group-flush fs-4">
                <li className="list-group-item">
                  <strong>Frontend:</strong> HTML, CSS, JavaScript, React
                </li>
                <li className="list-group-item">
                  <strong>Backend:</strong> Node.js, Python (Flask/Django), Java
                  (Spring Boot), Bases de datos
                </li>
                <li className="list-group-item">
                  <strong>Fullstack:</strong> Combinación de ambos + fundamentos
                  de DevOps
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="col-md-6">
          <div className="card h-100 border-success border-3 shadow-lg">
            <div className="card-body">
              <h2 className="h3 mb-3 text-success">Tecnologías clave</h2>
              <ul className="list-group list-group-flush fs-4">
                <li className="list-group-item">HTML, CSS, JavaScript</li>
                <li className="list-group-item">React, Vue, Angular</li>
                <li className="list-group-item">Git y GitHub</li>
                <li className="list-group-item">
                  Node.js, Express, Spring Boot, Python
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="mb-5 mt-5">
        <h2 className="h3 mb-4 text-center text-info">Lecturas recomendadas</h2>
        <div className="row g-4">
          {[
            {
              title: "Tu primer proyecto como Dev",
              text: "Una guía práctica para lanzar tu primer mini proyecto de desarrollo.",
              link: "/blog/proyecto-dev",
            },
            {
              title: "Frontend vs Backend",
              text: "Descubre las diferencias clave y elige tu camino.",
              link: "/blog/back-front",
            },
            {
              title: "¿Qué es una API?",
              text: "Entiende cómo se comunican las aplicaciones modernas.",
              link: "/blog/api",
            },
          ].map((article, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary fs-3">{article.title}</h5>
                  <p className="card-text flex-grow-1 fs-4">{article.text}</p>
                  <a
                    href={article.link}
                    className="btn btn-outline-primary mt-auto fs-4"
                  >
                    Leer más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="my-4">
        <AdBanner />
      </div>

      <div className="row g-4">
        <section className="col-md-6">
          <div className="card h-100 border-info border-3 shadow-lg">
            <div className="card-body">
              <h2 className="h3 mb-3 text-info">Herramientas recomendadas</h2>
              <ul className="list-group list-group-flush fs-4">
                <li className="list-group-item">
                  <a
                    href="https://code.visualstudio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-primary fw-semibold"
                  >
                    VS Code
                  </a>{" "}
                  – Editor de código favorito de los devs
                </li>
                <li className="list-group-item">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-dark fw-semibold"
                  >
                    GitHub
                  </a>{" "}
                  – Para compartir y colaborar en código
                </li>
                <li className="list-group-item">
                  <a
                    href="https://www.postman.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-warning fw-semibold"
                  >
                    Postman
                  </a>{" "}
                  – Para probar APIs
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Ejercicios y proyectos */}
        <section className="col-md-6">
          <div className="card h-100 shadow-lg">
            <div className="card-body">
              <h2 className="h3 mb-3">Proyectos para practicar</h2>
              <ul className="list-group list-group-flush fs-4">
                <li className="list-group-item">To-do list con React</li>
                <li className="list-group-item">
                  Mini API REST con Express o Flask
                </li>
                <li className="list-group-item">Portafolio web personal</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="text-center my-5">
        <div className="p-5 bg-light rounded shadow-lg d-inline-block">
          <h3 className="mb-3 fs-2">¿Listo para comenzar?</h3>
          <p className="mb-4 fs-4">
            Revisa nuestras guías paso a paso para comenzar a programar como
            desarrollador hoy mismo.
          </p>
          <a href="/blog/proyecto-dev" className="btn btn-primary btn-lg fs-4">
            Comenzar ahora
          </a>
        </div>
      </section>

      <div className="my-5 d-flex justify-content-center">
        <AdVertical />
      </div>

      <footer className="text-center mt-5 pt-5 border-top">
        <p className="mb-0 fs-5">
          &copy; {new Date().getFullYear()} BugBlog. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}
