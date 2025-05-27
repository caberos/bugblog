import React from "react";

export default function QA() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <h1 className="display-4 fw-bold">¿Te interesa ser QA (Aseguramiento de Calidad)?</h1>
        <p className="lead">
          Aprende cómo empezar una carrera en testing, qué herramientas dominar y cómo destacar en un rol clave del desarrollo de software.
        </p>
      </section>

      {/* Intro */}
      <section className="mb-5">
        <h2>¿Qué hace un QA?</h2>
        <p>
          Un QA (Quality Assurance) se encarga de verificar que el software funcione correctamente antes de que llegue al usuario final. Realiza pruebas manuales y automáticas, reporta errores y colabora con el equipo para mejorar la calidad del producto.
        </p>
      </section>

      {/* Rutas */}
      <section className="mb-5">
        <h2>Rutas de aprendizaje</h2>
        <ul>
          <li><strong>QA Manual:</strong> Aprende a probar interfaces, reportar bugs y trabajar con herramientas como Jira y Postman.</li>
          <li><strong>QA Automatizado:</strong> Escribe pruebas con herramientas como Selenium, Playwright o Cypress usando JavaScript, Python o Java.</li>
          <li><strong>QA DevOps:</strong> Automatiza procesos con CI/CD y trabaja en entornos ágiles.</li>
        </ul>
      </section>

      {/* Artículos */}
      <section className="mb-5">
        <h2>Artículos recomendados</h2>
        <div className="row">
          {[ 
            {
              title: "¿Qué hace un QA?",
              text: "Una mirada simple al rol de aseguramiento de calidad en tecnología.",
              link: "/blog/que-hace-un-qa",
            },
            {
              title: "Herramientas de testing para principiantes",
              text: "Explora las herramientas más utilizadas por los testers hoy en día.",
              link: "/blog/herramientas-testing",
            },
            {
              title: "Cómo empezar en QA sin experiencia",
              text: "Consejos prácticos para entrar en QA desde cero.",
              link: "/blog/empezar-qa",
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

      {/* Herramientas */}
      <section className="mb-5">
        <h2>Herramientas esenciales</h2>
        <ul>
          <li>Postman – Para pruebas de API</li>
          <li>Playwright / Cypress / Selenium – Automatización de pruebas</li>
          <li>Jira / Trello – Seguimiento de tareas y bugs</li>
          <li>VS Code / Git – Entorno de trabajo</li>
        </ul>
      </section>

      {/* Proyectos prácticos */}
      <section className="mb-5">
        <h2>Proyectos para practicar</h2>
        <ul>
          <li>Prueba una API pública y reporta errores simulados</li>
          <li>Automatiza el login de un sitio usando Playwright</li>
          <li>Simula pruebas funcionales en una web simple</li>
        </ul>
      </section>

      {/* CTA final */}
      <section className="text-center my-5">
        <h2>¿Listo para comenzar?</h2>
        <a href="/blog/empezar-qa" className="btn btn-warning btn-lg mt-3">Empezar ahora</a>
      </section>

      <footer className="text-center mt-5 pt-5 border-top">
        <p>&copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.</p>
        
      </footer>
    </div>
  );
}
