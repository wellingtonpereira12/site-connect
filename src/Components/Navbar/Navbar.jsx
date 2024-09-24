import React, { useEffect, useState } from 'react';
import logo from '../../assets/ReactLogo.webp'
import './Navbar.css'
import { Instagram } from 'lucide-react';

const Navbar = () => {
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");
    const [scrolled, setScrolled] = useState(false);

    const handleClickInsta = () => {
        window.open(`https://www.instagram.com/reactsolucoes/`, '_blank');
    };

    const navToggle =() =>{
        active === "nav_menu"
            ? setActive("nav_menu nav_active")
            : setActive("nav_menu");

        toggleIcon === 'nav_toggler'  
        ? setToggleIcon('nav_toggler toggler')
        : setToggleIcon('nav_toggler')
    }

    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 50;
          if (isScrolled !== scrolled) setScrolled(isScrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);
    
    return(
        <div className="navbar">
            <nav className={`nav  ${scrolled ? 'scrolled' : ''}`}>
                <div className='containerlogo'>
                    <img src={logo} alt="ReactLogo" className={`logo ${scrolled ? 'scrolled' : ''}`}/>
                    <div className={`ContainerNome ${scrolled ? 'scrolled' : ''}`}>
                        <a href="#" className={`nomeEmpresa ${scrolled ? 'scrolled' : ''}`} >React</a>
                        <a href="#" className={`DescrEmpresa ${scrolled ? 'scrolled' : ''}`} >Desenvolvimento Web</a>
                    </div>
                </div>
                <ul className={active}>
                    <li><a className={`a ${scrolled ? 'scrolled' : ''}`} href="#inicio">Início</a></li>
                    <li><a className={`a ${scrolled ? 'scrolled' : ''}`} href="#servico">Serviço</a></li>
                    <li><a className={`a ${scrolled ? 'scrolled' : ''}`} href="#sobre-nos">Sobre Nós</a></li>
                    <li><a className={`a ${scrolled ? 'scrolled' : ''}`} href="#duvidas">Dúvidas</a></li>
                    <button onClick={handleClickInsta} className={`btnInsta ${scrolled ? 'scrolled' : ''}`}> 
                        <Instagram /> Instagram
                    </button>
                </ul>
                <div onClick={navToggle} className={toggleIcon}>
                   <div className="line1"></div>
                   <div className="line2"></div>
                   <div className="line3"></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;