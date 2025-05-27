import React, { useState, useEffect } from "react";

export default function ProyectoDev() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Cargar tareas desde localStorage
  useEffect(() => {
    const almacenadas = localStorage.getItem("tareas");
    if (almacenadas) {
      setTareas(JSON.parse(almacenadas));
    }
  }, []);

  // Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    setTareas([...tareas, { texto: nuevaTarea.trim(), completada: false }]);
    setNuevaTarea("");
  };

  const eliminarTarea = (index) => {
    const nuevas = tareas.filter((_, i) => i !== index);
    setTareas(nuevas);
  };

  const toggleCompleta = (index) => {
    const nuevas = tareas.map((tarea, i) =>
      i === index ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(nuevas);
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Tu primer proyecto como Dev: Lista de Tareas con React</h1>

      <section className="mb-4">
        <p className="lead">
          En esta guía, aprenderás paso a paso cómo construir tu primera aplicación como desarrollador frontend. Crearás una lista de tareas interactiva usando React, una de las librerías más populares para construir interfaces modernas.
        </p>
        <ol>
          <li><strong>Inicia tu proyecto con Vite o Create React App</strong> para tener un entorno moderno de desarrollo.</li>
          <li><strong>Crea componentes funcionales</strong> con React para estructurar tu aplicación.</li>
          <li><strong>Usa useState y useEffect</strong> para manejar el estado de las tareas y su persistencia.</li>
          <li><strong>Agrega estilos con Bootstrap</strong> para que tu aplicación luzca mejor.</li>
          <li><strong>Guarda tareas en localStorage</strong> para que no se pierdan al recargar.</li>
        </ol>
      </section>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Escribe una tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={agregarTarea}>
          Agregar Tarea
        </button>
      </div>

      <ul className="list-group">
        {tareas.map((tarea, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${tarea.completada ? "text-decoration-line-through" : ""}`}
          >
            <span onClick={() => toggleCompleta(index)} style={{ cursor: "pointer" }}>
              {tarea.texto}
            </span>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => eliminarTarea(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <section className="mt-5">
        <h3>¿Qué aprendiste?</h3>
        <ul>
          <li>Cómo iniciar un proyecto con React</li>
          <li>Crear componentes funcionales</li>
          <li>Manejo del estado y eventos en React</li>
          <li>Guardar y cargar datos con localStorage</li>
          <li>Diseño básico con Bootstrap</li>
        </ul>
      </section>

      <section className="mt-4">
        <h4>Ideas para expandir tu proyecto:</h4>
        <ul>
          <li>Agregar filtros: todas, completadas, pendientes</li>
          <li>Permitir edición de tareas</li>
          <li>Agregar alertas o notificaciones</li>
          <li>Diseñar una interfaz más profesional con Tailwind</li>
          <li>Publicar tu app en GitHub Pages, Netlify o Vercel</li>
        </ul>
      </section>
    </div>
  );
}
