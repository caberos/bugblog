import React from "react";

export default function TaskQA() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">¿Qué hace un QA?</h1>

      <section className="mb-4">
        <p className="lead">
          Un <strong>QA</strong> (Quality Assurance o Aseguramiento de la Calidad) es el profesional responsable de garantizar que un software funcione correctamente, sea confiable y cumpla con los requisitos esperados.
        </p>
        <p>
          A diferencia del desarrollador, que se enfoca en construir el software, el QA se enfoca en verificar que ese software no tenga errores y que proporcione una buena experiencia al usuario.
        </p>
      </section>

      <section className="mb-5">
        <h2>Tareas comunes de un QA</h2>
        <ul className="list-group mb-3">
          <li className="list-group-item">Diseñar casos de prueba</li>
          <li className="list-group-item">Ejecutar pruebas manuales o automáticas</li>
          <li className="list-group-item">Detectar y reportar errores (bugs)</li>
          <li className="list-group-item">Verificar que las funcionalidades cumplan los requisitos</li>
          <li className="list-group-item">Colaborar con desarrolladores para mejorar el producto</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>Herramientas que usa un QA</h2>
        <p>Algunas herramientas populares en el mundo QA:</p>
        <ul>
          <li><strong>Postman</strong> – para probar APIs</li>
          <li><strong>Selenium</strong> – para pruebas automatizadas en el navegador</li>
          <li><strong>Playwright</strong> – framework moderno para pruebas automáticas</li>
          <li><strong>Jira</strong> – para reportar y seguir errores</li>
          <li><strong>TestRail</strong> – para gestionar planes y casos de prueba</li>
        </ul>
      </section>

      <section className="text-center mt-5">
        <h2>¿Te interesa ser QA?</h2>
        <p>Descubre más sobre el rol y cómo empezar en el mundo del testing de software.</p>
        <a href="/blog/rol-qa" className="btn btn-warning btn-lg mt-3">
          Leer más sobre el rol de QA
        </a>
      </section>

      <footer className="text-center mt-5 pt-5 border-top">
        <p>&copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
} 
