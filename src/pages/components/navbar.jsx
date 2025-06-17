import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
        <Link className="navbar-brand fw-bold text-center"
            to="/" style={{ fontSize: "2.2rem", marginTop: "0.3rem", marginBottom: "0.3rem", display: "inline-block" }}> 🐞 BugBlog
        </Link>
        <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"  >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ gap: "2.5 rem", display: "flex" }}>
                <li className="nav-item" style={{ fontSize: "1.5rem" }}>
                    <Link className="nav-link" to="/blog/rol-dev">Dev</Link>
                </li>
                <li className="nav-item" style={{ fontSize: "1.5rem" }}>
                    <Link className="nav-link" to="/blog/rol-qa">QA</Link>
                </li>
                <li className="nav-item" style={{ fontSize: "1.5rem" }}>
                    <Link className="nav-link" to="/blog">Blog</Link>
                </li>
            </ul>
        </div>
    </nav>
);
}
