import React, { useState, useEffect } from "react";
import AdBanner from "../ads/ad_banner.jsx";
import AdVertical from "../ads/ad_vertical.jsx";

export default function ProyectoDev() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  useEffect(() => {
    const almacenadas = localStorage.getItem("tareas");
    if (almacenadas) {
      setTareas(JSON.parse(almacenadas));
    }
  }, []);

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
      <AdBanner />
      <h1 className="mb-4 text-primary text-center">
        Tu primer proyecto como Dev: Lista de Tareas con React
      </h1>

      <section className="mb-4">
        <div className="alert alert-info" role="alert">
          <p className="lead mb-0">
            En esta guía, aprenderás paso a paso cómo construir tu primera
            aplicación como desarrollador frontend. Crearás una lista de tareas
            interactiva usando React, una de las librerías más populares para
            construir interfaces modernas.
          </p>
        </div>
        <ol className="list-group list-group-numbered mb-3">
          <li className="list-group-item">
            <strong>Inicia tu proyecto con Vite o Create React App</strong> para
            tener un entorno moderno de desarrollo.
          </li>
          <li className="list-group-item">
            <strong>Crea componentes funcionales</strong> con React para
            estructurar tu aplicación.
          </li>
          <li className="list-group-item">
            <strong>Usa useState y useEffect</strong> para manejar el estado de
            las tareas y su persistencia.
          </li>
          <li className="list-group-item">
            <strong>Agrega estilos con Bootstrap</strong> para que tu aplicación
            luzca mejor.
          </li>
          <li className="list-group-item">
            <strong>Guarda tareas en localStorage</strong> para que no se
            pierdan al recargar.
          </li>
        </ol>
      </section>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe una tarea"
              value={nuevaTarea}
              onChange={(e) => setNuevaTarea(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && agregarTarea()}
            />
            <button className="btn btn-primary" onClick={agregarTarea}>
              <i className="bi bi-plus-circle"></i> Agregar
            </button>
          </div>
        </div>
      </div>

      <ul className="list-group mb-4">
        {tareas.length === 0 && (
          <li className="list-group-item text-center text-muted">
            No hay tareas. ¡Agrega una!
          </li>
        )}
        {tareas.map((tarea, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              tarea.completada ? "list-group-item-success" : ""
            }`}
          >
            <div className="form-check flex-grow-1">
              <input
                className="form-check-input me-2"
                type="checkbox"
                checked={tarea.completada}
                onChange={() => toggleCompleta(index)}
                id={`tarea-${index}`}
              />
              <label
                className={`form-check-label ${
                  tarea.completada
                    ? "text-decoration-line-through text-muted"
                    : ""
                }`}
                htmlFor={`tarea-${index}`}
                style={{ cursor: "pointer" }}
              >
                {tarea.texto}
              </label>
            </div>
            <button
              className="btn btn-sm btn-outline-danger ms-2"
              onClick={() => eliminarTarea(index)}
              title="Eliminar"
            >
              <i className="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ul>

      <section className="mt-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card border-success h-100">
              <div className="card-header bg-success text-white">
                ¿Qué aprendiste?
              </div>
              <div className="card-body">
                <ul className="mb-0">
                  <li>Cómo iniciar un proyecto con React</li>
                  <li>Crear componentes funcionales</li>
                  <li>Manejo del estado y eventos en React</li>
                  <li>Guardar y cargar datos con localStorage</li>
                  <li>Diseño básico con Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card border-primary h-100">
              <div className="card-header bg-primary text-white">
                Ideas para expandir tu proyecto:
              </div>
              <div className="card-body">
                <ul className="mb-0">
                  <li>Agregar filtros: todas, completadas, pendientes</li>
                  <li>Permitir edición de tareas</li>
                  <li>Agregar alertas o notificaciones</li>
                  <li>Diseñar una interfaz más profesional con Tailwind</li>
                  <li>Publicar tu app en GitHub Pages, Netlify o Vercel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-5">
        <AdVertical />
      </div>
    </div>
  );
}
