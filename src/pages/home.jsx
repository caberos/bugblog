import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container py-5">
            <header className="text-center mb-5">
                <h1 className="display-2 fw-bold text-primary lh-base">Desarrollador vs QA: ¿Qué camino tomar?</h1>
                <p className="lead fs-2 text-muted">
                    Explora las diferencias entre desarrollo y aseguramiento de calidad en tecnología. Descubre cuál se adapta más a ti.
                </p>
            </header>
            <section className="text-center mb-5">
                <h2 className="h2 fw-semibold mb-3">¿Qué encontrarás en esta página?</h2>
                <p className="fs-4 text-muted">
                    Artículos, guías y consejos para ayudarte a elegir entre Desarrollo (DEV) o Aseguramiento de Calidad (QA).
                </p>
                <Link to="/blog/dev-vs-qa" className="btn btn-primary btn-lg mt-3 px-5 py-3 fs-4 shadow-lg">
                    Leer comparación completa
                </Link>
            </section>

            <section className="mb-5">
                <h2 className="mb-4 h1 fw-bold">Comparación básica entre DEV y QA</h2>
                <div className="row g-5">
                    <div className="col-md-6">
                        <div className="border rounded-5 p-5 h-100 bg-white shadow-lg">
                            <h4 className="text-success fs-1 mb-4">👨‍💻 DEV</h4>
                            <ul className="list-unstyled fs-4">
                                <li>✔️ Crea software, escribe código y diseña funcionalidades.</li>
                                <li>✔️ Usa lenguajes como JavaScript, Python, Java.</li>
                                <li>✔️ Más técnico desde el inicio.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="border rounded-5 p-5 h-100 bg-white shadow-lg">
                            <h4 className="text-danger fs-1 mb-4">🧪 QA</h4>
                            <ul className="list-unstyled fs-4">
                                <li>🛠️ Prueba el software, encuentra errores y asegura la calidad.</li>
                                <li>🛠️ Usa herramientas como Postman, Playwright, Selenium.</li>
                                <li>🛠️ Enfocado en lógica, pruebas y mejora continua.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-center my-5">
                <h2 className="mb-3 h1 fw-bold">¿Cuál rol te interesa más?</h2>
                <p className="fs-4 text-muted mb-4">Haz clic en uno para conocer su perfil y herramientas recomendadas:</p>
                <div className="d-flex justify-content-center gap-4 flex-wrap">
                    <Link to="/blog/rol-dev" className="btn btn-outline-success btn-lg px-5 py-3 fs-4 shadow">
                        Quiero ser Dev
                    </Link>
                    <Link to="/blog/rol-qa" className="btn btn-outline-danger btn-lg px-5 py-3 fs-4 shadow">
                        Prefiero QA
                    </Link>
                </div>
            </section>

            <section className="mb-5">
                <h2 className="mb-4 h1 fw-bold">📰 Últimos artículos</h2>
                <div className="row g-5">
                    {[
                        {
                            title: "DEV vs QA: Diferencias clave",
                            text: "Analizamos qué hace cada rol, sus ventajas y desafíos.",
                            link: "/blog/dev-vs-qa",
                        },
                        {
                            title: "Herramientas de un QA moderno",
                            text: "Descubre qué herramientas necesita dominar un buen QA.",
                            link: "/blog/herramientas-qa",
                        },
                        {
                            title: "Mi primer proyecto como Dev",
                            text: "Guía práctica para lanzar tu primer proyecto de desarrollo.",
                            link: "/blog/proyecto-dev",
                        },
                    ].map((article, idx) => (
                        <div className="col-md-4" key={idx}>
                            <div className="card h-100 shadow-lg border-0 rounded-5">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fs-3 fw-semibold">{article.title}</h5>
                                    <p className="card-text flex-grow-1 fs-4">{article.text}</p>
                                    <Link to={article.link} className="btn btn-outline-primary mt-3 px-4 py-2 fs-5">
                                        Leer más
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-light p-5 rounded-5 mb-5">
                <h3 className="mb-3 h2 fw-bold">🔧 Recursos recomendados para cada rol</h3>
                <ul className="fs-4">
                    <li>
                        <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer" className="link-primary fw-semibold">
                            Roadmap.sh
                        </a>{" "}
                        – Mapas para desarrolladores y testers.
                    </li>
                    <li>
                        <a href="https://testing-library.com" target="_blank" rel="noopener noreferrer" className="link-primary fw-semibold">
                            Testing Library
                        </a>{" "}
                        – Mejora tus pruebas como QA.
                    </li>
                    <li>
                        <a href="https://dev.to" target="_blank" rel="noopener noreferrer" className="link-primary fw-semibold">
                            Dev.to
                        </a>{" "}
                        – Comunidad de desarrollo.
                    </li>
                </ul>
            </section>

            <footer className="text-center pt-5 border-top">
                <p className="text-muted mb-0 fs-5">
                    &copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.
                </p>
            </footer>
        </div>
    );
}
