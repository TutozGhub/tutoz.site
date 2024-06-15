import React from "react";
import "./Header.css";
import Link from "next/link";

export default function header() {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Tutoz.site
        </Link>
        <button
          className="navbar-toggler borderless"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" href="/">
              Inicio
            </Link>
            <Link className="nav-link" href='/proyectos'>
              Proyectos
            </Link>
            <Link className="nav-link" href="/sobremi">
              Sobre mi
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
