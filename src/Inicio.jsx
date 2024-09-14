import React, { useEffect, useState } from 'react';
import logoConnect from './assets/logoConnect.png';
import fundoInicio from './assets/fundoInicio.png';
import './Inicio.css';

function Inicio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div>
      <section id="inicio">
        <div className="hero-container">
          <img src={fundoInicio} alt="fundoInicio" className="hero-image" />
          <h1 className={`h1 ${scrolled ? 'scrolled' : ''}`}>Connect</h1>
          <img src={logoConnect} alt="Logo Connect" className={`logo ${scrolled ? 'scrolled' : ''}`} />
          <nav className={`nav-menu ${scrolled ? 'scrolled' : ''}`}>
          <ul>
              <li><a href="#inicio" className={scrolled ? 'scrolled' : ''}>Início</a></li>
              <li><a href="#servico" className={scrolled ? 'scrolled' : ''}>Serviço</a></li>
              <li><a href="#sobre-nos" className={scrolled ? 'scrolled' : ''}>Sobre Nós</a></li>
              <li><a href="#duvidas" className={scrolled ? 'scrolled' : ''}>Dúvidas</a></li>
          </ul>
          </nav>
        </div>
      </section>

      <section id="servico" className="section">
        <h1 className="section-title">Serviço</h1>
        <p>Conteúdo da seção Serviço.</p>
      </section>

      <section id="sobre-nos" className="sectiSon">
        <h1 className="section-title">Sobre Nós</h1>
        <p>Conteúdo da seção Sobre Nós.</p>
      </section>

      <section id="duvidas" className="section">
        <h1 className="section-title">Dúvidas</h1>
        <p>Conteúdo da seção Dúvidas.</p>
      </section>
    </div>
  );
}

export default Inicio;
