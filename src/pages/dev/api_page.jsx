import React, { useEffect, useState } from "react";
import AdBanner from "../ads/ad_banner.jsx";
import AdVertical from "../ads/ad_vertical.jsx";

export default function ApiPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4 display-3 text-primary fw-bold">¿Qué es una API?</h1>

      <section className="mb-4">
        <p className="lead fs-3">
          Una <strong>API</strong> (Interfaz de Programación de Aplicaciones) es un conjunto de definiciones y protocolos que se utiliza para desarrollar e integrar el software de las aplicaciones, permitiendo la comunicación entre dos aplicaciones de software a través de un conjunto de reglas.
        </p>
        <p className="fs-4">
          Las APIs son fundamentales en el desarrollo moderno porque permiten la integración entre servicios. Hay APIs para obtener datos de clima, procesar pagos, enviar mensajes, y mucho más.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h2 text-secondary mb-3 fw-bold">¿Cómo se usa una API?</h2>
        <p className="fs-4">
          La arquitectura de las API suele explicarse en términos de cliente y servidor. La aplicación que envía la solicitud se llama cliente, y la que envía la respuesta se llama servidor. En el ejemplo del tiempo, la base de datos meteorológicos del instituto es el servidor y la aplicación móvil es el cliente.
        </p>
        <p className="fs-4">
          Las API pueden funcionar de cuatro maneras diferentes, según el momento y el motivo de su creación.
        </p>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fs-4">API de SOAP</h5>
                <p className="card-text fs-5">
                  Estas API utilizan el protocolo simple de acceso a objetos. El cliente y el servidor intercambian mensajes mediante XML. Se trata de una API menos flexible que era más popular en el pasado.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fs-4">API de RPC</h5>
                <p className="card-text fs-5">
                  Estas API se denominan llamadas a procedimientos remotos. El cliente completa una función (o procedimiento) en el servidor, y el servidor devuelve el resultado al cliente.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fs-4">API de WebSocket</h5>
                <p className="card-text fs-5">
                  La API de WebSocket es otro desarrollo moderno de la API web que utiliza objetos JSON para transmitir datos. Admite la comunicación bidireccional entre las aplicaciones cliente y el servidor, siendo más eficiente que la API de REST.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fs-4">API de REST</h5>
                <p className="card-text fs-5">
                  Estas son las API más populares y flexibles que se encuentran en la web actualmente. El cliente envía las solicitudes al servidor como datos. El servidor utiliza esta entrada del cliente para iniciar funciones internas y devuelve los datos de salida al cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          href="/blog/que-es-una-api"
          className="btn btn-outline-primary mt-4 fs-4"
        >
          Leer más sobre APIs
        </a>
      </section>

      <div className="my-5">
        <AdBanner />
      </div>

      <section className="mt-5">
        <h3 className="mb-3 text-success fs-2">🔧 Recursos recomendados</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item fs-4">
            <a
              href="https://developer.mozilla.org/es/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="link-primary"
            >
              Introducción a las APIs (MDN)
            </a>
          </li>
          <li className="list-group-item fs-4">
            <a
              href="https://jsonplaceholder.typicode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-primary"
            >
              API JSONPlaceholder
            </a>
          </li>
          <li className="list-group-item fs-4">
            <a
              href="https://restfulapi.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-primary"
            >
              RESTful API Concepts
            </a>
          </li>
        </ul>
      </section>

      <div className="mt-5">
        <AdVertical />
      </div>

      <footer className="text-center mt-5 pt-5 border-top">
        <p className="text-muted fs-5">
          &copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
