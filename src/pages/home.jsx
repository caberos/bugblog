import React from "react";

export default function Home() {
return (
    <div className="container py-5">
        <section className="text-center mb-5">
            <h1 className="display-4 fw-bold">Desarrollador vs QA: ¿Qué camino tomar?</h1>
            <p className="lead">
                Explora las diferencias entre desarrollo y aseguramiento de calidad en tecnología. Descubre cuál se adapta más a ti.
            </p>
            
        </section>

        <section className="mb-5">
            <h2>¿Qué encontrarás en esta página?</h2>
            <p>
                Artículos, guías y consejos para ayudarte a elegir entre Desarrollo (DEV) o Aseguramiento de Calidad (QA). Ideal para quienes inician en tecnología.
            </p>
            <a href="/blog/dev-vs-qa" className="btn btn-primary btn-lg mt-3">
                Leer comparación completa
            </a>
        </section>

        <section className="mb-5">
            <h2>Comparación básica entre DEV y QA</h2>
            <div className="row">
                <div className="col-md-6">
                    <h4 className="text-success">DEV</h4>
                    <ul>
                        <li>Crea software, escribe código y diseña funcionalidades.</li>
                        <li>Usa lenguajes como JavaScript, Python, Java.</li>
                        <li>Más técnico desde el inicio.</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h4 className="text-warning">QA</h4>
                    <ul>
                        <li>Prueba el software, encuentra errores y asegura la calidad del producto.</li>
                        <li>Usa herramientas como Postman, Playwright, Selenium.</li>
                        <li>Enfocado en lógica, pruebas y mejora continua.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="text-center my-5">
            <h2 className="mb-3">¿Cuál rol te interesa más?</h2>
            <p className="mb-4">Haz clic en uno para conocer su perfil y herramientas recomendadas:</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/blog/rol-dev" className="btn btn-success px-4 py-2">Quiero ser Dev</a>
                <a href="/blog/rol-qa" className="btn btn-warning px-4 py-2">Prefiero QA</a>
            </div>
        </section>

        <section className="mb-5">
            <h2>Últimos artículos</h2>
            <div className="row">
                {[
                    {
                        title: "DEV vs QA: Diferencias clave",
                        text: "Analizamos qué hace cada rol, sus ventajas y desafíos, para ayudarte a decidir.",
                        link: "/blog/dev-vs-qa",
                    },
                    {
                        title: "Herramientas de un QA moderno",
                        text: "Conoce qué herramientas necesitas dominar para destacar como QA.",
                        link: "/blog/herramientas-qa",
                    },
                    {
                        title: "Mi primer proyecto como Dev",
                        text: "Una guía práctica para lanzar tu primer mini proyecto de desarrollo.",
                        link: "/blog/proyecto-dev",
                    },
                ].map((article, idx) => (
                    <div className="col-md-4 mb-4" key={idx}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.text}</p>
                                <a href={article.link} className="btn btn-outline-primary">
                                    Leer más
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="bg-light p-4 rounded mt-5">
            <h3>🔧 Recursos recomendados para cada rol</h3>
            <ul>
                <li>
                    <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer">
                        Roadmap.sh
                    </a>{" "}
                    – Mapas para desarrolladores y testers
                </li>
                <li>
                    <a href="https://testing-library.com" target="_blank" rel="noopener noreferrer">
                        Testing Library
                    </a>{" "}
                    – Para mejorar tus pruebas como QA
                </li>
                <li>
                    <a href="https://dev.to" target="_blank" rel="noopener noreferrer">
                        Dev.to
                    </a>{" "}
                    – Comunidad para aprender y compartir como Dev
                </li>
            </ul>
        </section>

        <footer className="text-center mt-5 pt-5 border-top">
            <p>&copy; {new Date().getFullYear()} BugBlog. Todos los derechos reservados.</p>
            
        </footer>
    </div>
);
}
