import React from "react";
import AdBanner from "../ads/ad_banner.jsx";
import AdVertical from "../ads/ad_vertical.jsx";

export default function QA() {
  return (
    <div className="container py-5" style={{ fontSize: "1.35rem", maxWidth: 1100 }}>
      {/* Hero Section */}
      <section className="text-center mb-5">
        <h1 className="display-3 fw-bold mb-4">
          ¿Te interesa ser QA (Aseguramiento de Calidad)?
        </h1>
        <p className="lead fs-2 text-secondary">
          Aprende cómo empezar una carrera en testing, qué herramientas dominar y cómo destacar en un rol clave del desarrollo de software.
        </p>
      </section>

      {/* Intro */}
      <section className="mb-5">
        <h2 className="h1 fw-semibold mb-4">¿Qué hace un QA?</h2>
        <p className="fs-4">
          Un QA (Quality Assurance) es responsable de asegurar que el software cumpla con los estándares de calidad antes de llegar a los usuarios finales. Evalúa aplicaciones y sistemas para detectar errores, mejorar la experiencia del usuario y garantizar que todo funcione correctamente.
        </p>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body">
                <h5 className="fw-bold text-success mb-3 fs-3">Funciones principales</h5>
                <ul className="list-unstyled fs-4 text-start">
                  <li>✅ Diseñar y ejecutar casos de prueba.</li>
                  <li>✅ Identificar y reportar errores.</li>
                  <li>✅ Verificar correcciones y regresiones.</li>
                  <li>✅ Evaluar la experiencia del usuario.</li>
                  <li>✅ Documentar procesos y resultados.</li>
                  <li>✅ Colaborar con equipos de desarrollo.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body">
                <h5 className="fw-bold text-info mb-3 fs-3">Habilidades clave</h5>
                <ul className="list-unstyled fs-4 text-start">
                  <li>⭐ Conocimientos técnicos en pruebas y herramientas.</li>
                  <li>⭐ Atención al detalle y pensamiento analítico.</li>
                  <li>⭐ Comunicación efectiva y trabajo en equipo.</li>
                  <li>⭐ Adaptabilidad y aprendizaje continuo.</li>
                  <li>⭐ Resolución de problemas.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body">
                <h5 className="fw-bold text-warning mb-3 fs-3">¿Por qué es importante el QA?</h5>
                <ul className="list-unstyled fs-4 text-start">
                  <li>🏆 Garantiza la calidad y confiabilidad del producto.</li>
                  <li>🏆 Mejora la experiencia del usuario.</li>
                  <li>🏆 Reduce costos al detectar errores tempranamente.</li>
                  <li>🏆 Protege la reputación de la empresa.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="h1 fw-semibold mb-4">Rutas de aprendizaje</h2>
        <div className="list-group shadow-lg fs-4">
          <div className="list-group-item list-group-item-action py-3">
            <strong>QA Manual:</strong> Aprende a probar interfaces, reportar bugs y trabajar con herramientas como Jira y Postman.
          </div>
          <div className="list-group-item list-group-item-action py-3">
            <strong>QA Automatizado:</strong> Escribe pruebas con herramientas como Selenium, Playwright o Cypress usando JavaScript, Python o Java.
          </div>
          <div className="list-group-item list-group-item-action py-3">
            <strong>QA DevOps:</strong> Automatiza procesos con CI/CD y trabaja en entornos ágiles.
          </div>
        </div>
      </section>

      {/* Artículos */}
      <section className="mb-5">
        <h2 className="h1 fw-semibold mb-4">Artículos recomendados</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {[{
            title: "¿Qué hace un QA?",
            text: "Una mirada simple al rol de aseguramiento de calidad en tecnología.",
            link: "/blog/que-hace-un-qa"
          }, {
            title: "Herramientas de testing para principiantes",
            text: "Explora las herramientas más utilizadas por los testers hoy en día.",
            link: "/blog/herramientas-testing"
          }, {
            title: "Cómo empezar en QA sin experiencia",
            text: "Consejos prácticos para entrar en QA desde cero.",
            link: "/blog/empezar-qa"
          }].map((article, idx) => (
            <div className="col" key={idx}>
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold fs-2">{article.title}</h5>
                  <p className="card-text flex-grow-1 fs-4">{article.text}</p>
                  <a href={article.link} className="btn btn-outline-primary mt-auto fs-4 px-4 py-2">
                    Leer más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="my-5">
        <AdBanner />
      </div>

      <div className="row g-4">
        {[{
          title: "Herramientas esenciales",
          icon: "bi-check-circle text-success",
          items: [
            "Postman – Para pruebas de API",
            "Playwright / Cypress / Selenium – Automatización de pruebas",
            "Jira / Trello – Seguimiento de tareas y bugs",
            "VS Code / Git – Entorno de trabajo"
          ]
        }, {
          title: "Proyectos para practicar",
          icon: "bi-lightbulb text-warning",
          items: [
            "Prueba una API pública y reporta errores simulados",
            "Automatiza el login de un sitio usando Playwright",
            "Simula pruebas funcionales en una web simple"
          ]
        }].map((block, idx) => (
          <section className="col-md-6" key={idx}>
            <div className="p-4 bg-light rounded-4 h-100 shadow-lg border">
              <h2 className="h3 fw-semibold mb-3">{block.title}</h2>
              <ul className="list-unstyled mb-0 fs-4">
                {block.items.map((item, i) => (
                  <li key={i} className="mb-2">
                    <i className={`bi ${block.icon} me-2`}></i>{item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* CTA final */}
      <section className="text-center my-5">
        <h2 className="h1 fw-bold mb-4">¿Listo para comenzar?</h2>
        <a href="/blog/empezar-qa" className="btn btn-warning btn-lg px-5 py-3 shadow fs-2">
          Empezar ahora
        </a>
      </section>

      <div className="my-5">
        <AdVertical />
      </div>

      <footer className="text-center mt-5 pt-5 border-top small text-muted fs-4">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
