import React from "react";
import AdBanner from "../ads/ad_banner.jsx";
import AdVertical from "../ads/ad_vertical.jsx";

export default function DevsPage() {
  return (
    <div className="container py-5">
      {/* Encabezado */}
      <section className="text-center mb-5">
        <h1 className="display-4 fw-bold">¿Quieres ser Desarrollador?</h1>
        <p className="lead">
          Explora recursos, tecnologías y consejos para comenzar tu camino como Dev Frontend, Backend o Fullstack.
        </p>
      </section>

      {/* ¿Qué es un desarrollador? */}
      <section className="mb-4">
        <h2 className="h5 fw-bold">¿Qué es un desarrollador?</h2>
        <p>
          Un desarrollador (o "dev") es una persona que crea, mantiene y mejora aplicaciones, sitios web o sistemas informáticos. Su trabajo puede abarcar desde el diseño de interfaces hasta la lógica de negocio y la gestión de bases de datos.
        </p>
        <ul>
          <li><strong>Funciones principales:</strong> escribir código, depurar errores, colaborar en equipos, diseñar soluciones y documentar proyectos.</li>
          <li><strong>Metas:</strong> construir software funcional, eficiente y seguro que resuelva problemas reales o mejore procesos.</li>
          <li><strong>Requerimientos de conocimiento:</strong> lógica de programación, estructuras de datos, control de versiones (Git), y dominio de al menos un lenguaje de programación.</li>
          <li>
            <strong>Información adicional:</strong> Los desarrolladores pueden especializarse en áreas como frontend (interfaz de usuario), backend (lógica y datos), o fullstack (ambos). La formación puede ser autodidacta, a través de bootcamps o estudios universitarios.
          </li>
        </ul>
      </section>

      <div className="d-flex justify-content-center my-4">
        <span className="text-secondary fs-5">¡Empieza hoy tu viaje en el mundo del desarrollo!</span>
      </div>

      <div className="row g-4">
        <section className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="h5 mb-3">Rutas recomendadas</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Frontend:</strong> HTML, CSS, JavaScript, React</li>
                <li className="list-group-item"><strong>Backend:</strong> Node.js, Python (Flask o Django), Java (Spring Boot), Bases de datos</li>
                <li className="list-group-item"><strong>Fullstack:</strong> Combinación de ambos + DevOps básico</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="h5 mb-3">Tecnologías clave</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HTML, CSS, JavaScript</li>
                <li className="list-group-item">React, Vue, Angular</li>
                <li className="list-group-item">Git y GitHub</li>
                <li className="list-group-item">Node.js, Express, Spring Boot, Python</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Artículos destacados */}
      <section className="mb-5 mt-5">
        <h2 className="h4 mb-4 text-center">Lecturas recomendadas</h2>
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
              <div className="card h-100 border-0 shadow">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text flex-grow-1">{article.text}</p>
                  <a href={article.link} className="btn btn-outline-primary mt-auto">Leer más</a>
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
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="h5 mb-3">Herramientas recomendadas</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a> – Editor de código favorito de los devs
                </li>
                <li className="list-group-item">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a> – Para compartir y colaborar en código
                </li>
                <li className="list-group-item">
                  <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">Postman</a> – Para probar APIs
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ejercicios y proyectos */}
        <section className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="h5 mb-3">Proyectos para practicar</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">To-do list con React</li>
                <li className="list-group-item">Mini API REST con Express o Flask</li>
                <li className="list-group-item">Portafolio web personal</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="text-center my-5">
        <div className="p-4 bg-light rounded shadow-sm d-inline-block">
          <h3 className="mb-3">¿Listo para comenzar?</h3>
          <p className="mb-4">Revisa nuestras guías paso a paso para comenzar a programar como desarrollador hoy mismo.</p>
          <a href="/blog/proyecto-dev" className="btn btn-primary btn-lg">Comenzar ahora</a>
        </div>
      </section>

      <div className="my-5 d-flex justify-content-center">
        <AdVertical />
      </div>

      <footer className="text-center mt-5 pt-5 border-top">
        <p className="mb-0">&copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
