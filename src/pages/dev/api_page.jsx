import React, { useEffect, useState } from "react";

export default function ApiPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4">¿Qué es una API?</h1>

      <section className="mb-4">
        <p className="lead">
          Una <strong>API</strong> (Interfaz de Programación de Aplicaciones) Se
          trata de un conjunto de definiciones y protocolos que se utiliza para
          desarrollar e integrar el software de las aplicaciones, permitiendo la
          comunicación entre dos aplicaciones de software a través de un
          conjunto de reglas.
        </p>
        <p>
          Las APIs son fundamentales en el desarrollo moderno porque permiten la
          integración entre servicios. Hay APIs para obtener datos de clima,
          procesar pagos, enviar mensajes, y mucho más.
        </p>
      </section>

      <section className="mb-5">
        <h2>¿Cómo se usa una API?</h2>
        <p>
          La arquitectura de las API suele explicarse en términos de cliente y
          servidor. La aplicación que envía la solicitud se llama cliente, y la
          que envía la respuesta se llama servidor. En el ejemplo del tiempo, la
          base de datos meteorológicos del instituto es el servidor y la
          aplicación móvil es el cliente.
        </p>
        <p>
          Las API pueden funcionar de cuatro maneras diferentes, según el
          momento y el motivo de su creación.
        </p>
        <p className="ps-3">
          {" "}
          <strong>API de SOAP</strong> Estas API utilizan el protocolo simple de acceso a
          objetos. El cliente y el servidor intercambian mensajes mediante XML.
          Se trata de una API menos flexible que era más popular en el pasado.
        </p>
        <p className="ps-3">
          <strong>API de RPC</strong> Estas API se denominan llamadas a procedimientos remotos.
          El cliente completa una función (o procedimiento) en el servidor, y el
          servidor devuelve el resultado al cliente.
        </p>
        <p className="ps-3">
          <strong>API de WebSocket</strong> La API de WebSocket es otro desarrollo moderno de la
          API web que utiliza objetos JSON para transmitir datos. La API de
          WebSocket admite la comunicación bidireccional entre las aplicaciones
          cliente y el servidor. El servidor puede enviar mensajes de devolución
          de llamada a los clientes conectados, por lo que es más eficiente que
          la API de REST.
        </p>
        <p className="ps-3">
          <strong>API de REST</strong> Estas son las API más populares y flexibles que se
          encuentran en la web actualmente. El cliente envía las solicitudes al
          servidor como datos. El servidor utiliza esta entrada del cliente para
          iniciar funciones internas y devuelve los datos de salida al cliente.
        </p>

        <a
          href="/blog/que-es-una-api"
          className="btn btn-outline-secondary mt-3"
        >
          Leer más sobre APIs
        </a>
      </section>

      <div>
              <AdBanner />
            </div>

      <section className="mt-5">
        <h3>🔧 Recursos recomendados</h3>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/es/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
              target="_blank"
              rel="noopener noreferrer"
            >
              Introducción a las APIs (MDN)
            </a>
          </li>
          <li>
            <a
              href="https://jsonplaceholder.typicode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              API JSONPlaceholder
            </a>
          </li>
          <li>
            <a
              href="https://restfulapi.net/"
              target="_blank"
              rel="noopener noreferrer"
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
        <p>
          &copy; {new Date().getFullYear()} BugBlog. Todos los derechos
          reservados.
        </p>
       
      </footer>
    </div>
  );
}
