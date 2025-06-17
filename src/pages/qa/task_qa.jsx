import React from "react";
import AdBanner from "../ads/ad_banner.jsx";
import AdVertical from "../ads/ad_vertical";

export default function TaskQA() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 display-4 text-primary">¿Qué hace un QA?</h1>

      <section className="mb-4">
        <p className="lead">
          Un <strong>QA</strong> (Quality Assurance o Aseguramiento de la Calidad) es el profesional responsable de garantizar que un software funcione correctamente, sea confiable y cumpla con los requisitos esperados.
        </p>
        <p>
          A diferencia del desarrollador, que se enfoca en construir el software, el QA se enfoca en verificar que ese software no tenga errores y que proporcione una buena experiencia al usuario.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h4 text-success mb-3">Tareas comunes de un QA</h2>
        <ul className="list-group list-group-flush shadow-sm mb-3">
          <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i>Diseñar casos de prueba</li>
          <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i>Ejecutar pruebas manuales o automáticas</li>
          <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i>Detectar y reportar errores (bugs)</li>
          <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i>Verificar que las funcionalidades cumplan los requisitos</li>
          <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i>Colaborar con desarrolladores para mejorar el producto</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h4 text-info mb-3">Herramientas que usa un QA</h2>
        <p>Algunas herramientas populares en el mundo QA:</p>
        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className="col">
            <div className="card border-info h-100">
              <div className="card-body">
                <h5 className="card-title"><strong>Postman</strong></h5>
                <p className="card-text">Para probar APIs</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-info h-100">
              <div className="card-body">
                <h5 className="card-title"><strong>Selenium</strong></h5>
                <p className="card-text">Para pruebas automatizadas en el navegador</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-info h-100">
              <div className="card-body">
                <h5 className="card-title"><strong>Playwright</strong></h5>
                <p className="card-text">Framework moderno para pruebas automáticas</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-info h-100">
              <div className="card-body">
                <h5 className="card-title"><strong>Jira</strong></h5>
                <p className="card-text">Para reportar y seguir errores</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-info h-100">
              <div className="card-body">
                <h5 className="card-title"><strong>TestRail</strong></h5>
                <p className="card-text">Para gestionar planes y casos de prueba</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-4">
        <AdBanner />
      </div>

      <section className="text-center mt-5">
        <h2 className="h4 text-warning">¿Te interesa ser QA?</h2>
        <p>Descubre más sobre el rol y cómo empezar en el mundo del testing de software.</p>
        <a href="/blog/rol-qa" className="btn btn-warning btn-lg mt-3 shadow">
          Leer más sobre el rol de QA
        </a>
      </section>

      <div className="mt-5">
        <AdVertical />
      </div>

      <footer className="text-center mt-5 pt-5 border-top">
        <p className="text-muted small">&copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
} 
