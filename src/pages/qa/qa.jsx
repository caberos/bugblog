import React from "react";
import AdBanner from "../ads/ad_banner.jsx";
import AdVertical from "../ads/ad_vertical.jsx";

export default function QA() {
  return (
    <div className="container py-5" style={{ fontSize: "1.25rem" }}>
      {/* Hero Section */}
      <section className="text-center mb-5">
        <h1 className="display-3 fw-bold">¿Te interesa ser QA (Aseguramiento de Calidad)?</h1>
        <p className="lead" style={{ fontSize: "1.5rem" }}>
          Aprende cómo empezar una carrera en testing, qué herramientas dominar y cómo destacar en un rol clave del desarrollo de software.
        </p>
      </section>

      {/* Intro */}
      <section className="mb-5">
        <h2 className="h3 fw-semibold mb-3">¿Qué hace un QA?</h2>
        <p>
          Un QA (Quality Assurance) se encarga de verificar que el software funcione correctamente antes de que llegue al usuario final. Realiza pruebas manuales y automáticas, reporta errores y colabora con el equipo para mejorar la calidad del producto.
        </p>
      </section>

      {/* Rutas */}
      <section className="mb-5">
        <h2 className="h3 fw-semibold mb-3">Rutas de aprendizaje</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{ fontSize: "1.15rem" }}>
            <strong>QA Manual:</strong> Aprende a probar interfaces, reportar bugs y trabajar con herramientas como Jira y Postman.
          </li>
          <li className="list-group-item" style={{ fontSize: "1.15rem" }}>
            <strong>QA Automatizado:</strong> Escribe pruebas con herramientas como Selenium, Playwright o Cypress usando JavaScript, Python o Java.
          </li>
          <li className="list-group-item" style={{ fontSize: "1.15rem" }}>
            <strong>QA DevOps:</strong> Automatiza procesos con CI/CD y trabaja en entornos ágiles.
          </li>
        </ul>
      </section>

      {/* Artículos */}
      <section className="mb-5">
        <h2 className="h3 fw-semibold mb-4">Artículos recomendados</h2>
        <div className="row g-4">
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
            <div className="col-md-4" key={idx}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold" style={{ fontSize: "1.35rem" }}>{article.title}</h5>
                  <p className="card-text flex-grow-1">{article.text}</p>
                  <a href={article.link} className="btn btn-outline-primary mt-auto" style={{ fontSize: "1.1rem" }}>Leer más</a>
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
          <div className="p-4 bg-light rounded-3 h-100">
            <h2 className="h4 fw-semibold mb-3" style={{ fontSize: "1.25rem" }}>Herramientas esenciales</h2>
            <ul className="list-unstyled mb-0">
              <li style={{ fontSize: "1.1rem" }}><i className="bi bi-check-circle text-success me-2"></i>Postman – Para pruebas de API</li>
              <li style={{ fontSize: "1.1rem" }}><i className="bi bi-check-circle text-success me-2"></i>Playwright / Cypress / Selenium – Automatización de pruebas</li>
              <li style={{ fontSize: "1.1rem" }}><i className="bi bi-check-circle text-success me-2"></i>Jira / Trello – Seguimiento de tareas y bugs</li>
              <li style={{ fontSize: "1.1rem" }}><i className="bi bi-check-circle text-success me-2"></i>VS Code / Git – Entorno de trabajo</li>
            </ul>
          </div>
        </section>

        <section className="col-md-6">
          <div className="p-4 bg-light rounded-3 h-100">
            <h2 className="h4 fw-semibold mb-3" style={{ fontSize: "1.25rem" }}>Proyectos para practicar</h2>
            <ul className="list-unstyled mb-0">
              <li style={{ fontSize: "1.1rem" }}><i className="bi bi-lightbulb text-warning me-2"></i>Prueba una API pública y reporta errores simulados</li>
              <li style={{ fontSize: "1.1rem" }}><i className="bi bi-lightbulb text-warning me-2"></i>Automatiza el login de un sitio usando Playwright</li>
              <li style={{ fontSize: "1.1rem" }}><i className="bi bi-lightbulb text-warning me-2"></i>Simula pruebas funcionales en una web simple</li>
            </ul>
          </div>
        </section>
      </div>

      {/* CTA final */}
      <section className="text-center my-5">
        <h2 className="h3 fw-bold mb-3">¿Listo para comenzar?</h2>
        <a href="/blog/empezar-qa" className="btn btn-warning btn-lg px-5 shadow" style={{ fontSize: "1.35rem" }}>Empezar ahora</a>
      </section>
      <div className="my-4">
        <AdVertical />
      </div>

      <footer className="text-center mt-5 pt-5 border-top small text-muted" style={{ fontSize: "1.1rem" }}>
        <p className="mb-0">&copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
