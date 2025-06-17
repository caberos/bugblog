import React from "react";
import AdBanner from "../ads/ad_banner.jsx";
import AdVertical from "../ads/ad_vertical.jsx";

export default function DevVsQaPage() {
  return (
    <main className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">DEV vs QA: Diferencias clave</h1>
        <p className="lead">
          ¿Estás decidiendo entre convertirte en Desarrollador o QA? Descubre
          aquí las diferencias esenciales para tomar la mejor decisión.
        </p>
      </header>
      <div className="row">
        <section className="col-md-6 mb-3 mb-md-0">
          <h2>¿Qué hace un Desarrollador (DEV)?</h2>
          <ul>
            <li>
              Escribe y mantiene código para crear funcionalidades y
              aplicaciones.
            </li>
            <li>
              Trabaja con lenguajes como JavaScript, Python, Java, entre otros.
            </li>
            <li>
              Se enfoca en construir soluciones y resolver problemas técnicos.
            </li>
            <li>
              Colabora estrechamente con diseñadores, QA y otros
              desarrolladores.
            </li>
          </ul>
        </section>

        <section className="col-md-6 mb-3 mb-md-0">
          <h2>¿Qué hace un QA (Quality Assurance)?</h2>
          <ul>
            <li>
              Prueba el software para detectar errores antes de que llegue a
              producción.
            </li>
            <li>Diseña y ejecuta casos de prueba manuales o automatizados.</li>
            <li>
              Colabora con desarrolladores para mejorar la calidad del producto.
            </li>
            <li>
              Utiliza herramientas como Postman, Playwright, Selenium, entre
              otras.
            </li>
          </ul>
        </section>
      </div>
      <section className="mb-5">
        <h2>Comparación rápida</h2>
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="card h-100 border-success">
              <div className="card-body">
                <h4 className="text-success">DEV</h4>
                <ul>
                  <li>Crea el producto</li>
                  <li>Enfocado en construir</li>
                  <li>Requiere habilidades de programación sólidas</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-warning">
              <div className="card-body">
                <h4 className="text-warning">QA</h4>
                <ul>
                  <li>Valida el producto</li>
                  <li>Enfocado en encontrar errores</li>
                  <li>Requiere pensamiento analítico y atención al detalle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
              <AdBanner />
            </div>

      <section className="text-center my-5">
        <h2 className="mb-3">¿Cuál es mejor para ti?</h2>
        <p className="mb-4">
          Depende de tus intereses: ¿prefieres construir o validar?
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="/blog/rol-dev" className="btn btn-success px-4 py-2">
            Me interesa DEV
          </a>
          <a href="/blog/rol-qa" className="btn btn-warning px-4 py-2">
            Me interesa QA
          </a>
        </div>
      </section>

      <div className="mt-5">
              <AdVertical />
              </div>

      <footer className="text-center mt-5 pt-5 border-top">
        <p>
          &copy; {new Date().getFullYear()} BugBlog. Todos los derechos
          reservados.
        </p>
       
      </footer>
    </main>
  );
}
