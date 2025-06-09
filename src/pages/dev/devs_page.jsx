import React from "react";

export default function DevsPage() {
  return (
    <div className="container py-5">
      {/* Encabezado */}
      <section className="text-center mb-5">
        <h1 className="display-5 fw-bold">¿Quieres ser Desarrollador?</h1>
        <p className="lead">
          Explora recursos, tecnologías y consejos para comenzar tu camino como Dev Frontend, Backend o Fullstack.
        </p>
      </section>

      <div className="row">
      <section className="col-md-6 mb-3 mb-md-0">
        <h2>Rutas recomendadas</h2>
        <ul>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React</li>
          <li><strong>Backend:</strong> Node.js, Python (Flask o Django), Java(Spring boot), Bases de datos</li>
          <li><strong>Fullstack:</strong> Combinación de ambos + DevOps básico</li>
        </ul>
      </section>
      <section className="col-md-6 mb-3 mb-md-0">
        <h2>Tecnologías clave</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Vue, Angular</li>
          <li>Git y GitHub</li>
          <li>Node.js, Express, Spring Boot, Python</li>
        </ul>
      </section>
    </div>
      {/* Artículos destacados */}
      <section className="mb-5">
        <h2>Lecturas recomendadas</h2>
        <div className="row">
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
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.text}</p>
                  <a href={article.link} className="btn btn-outline-primary">Leer más</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div>
              <AdBanner />
            </div>
      
      <div className="row">
      <section className="col-md-6 mb-3 mb-md-0">
        <h2>Herramientas recomendadas</h2>
        <ul>
          <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a> – Editor de código favorito de los devs</li>
          <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a> – Para compartir y colaborar en código</li>
          <li><a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">Postman</a> – Para probar APIs</li>
        </ul>
      </section>

      {/* Ejercicios y proyectos */}
      <section className="col-md-6 mb-3 mb-md-0">
        <h2>Proyectos para practicar</h2>
        <ul>
          <li>To-do list con React</li>
          <li>Mini API REST con Express o Flask</li>
          <li>Portafolio web personal</li>
        </ul>
      </section>
      </div>

      {/* CTA */}
      <section className="text-center my-5">
        <h3>¿Listo para comenzar?</h3>
        <p>Revisa nuestras guías paso a paso para comenzar a programar como desarrollador hoy mismo.</p>
        <a href="/blog/proyecto-dev" className="btn btn-primary">Comenzar ahora</a>
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
