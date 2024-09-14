import React, {useState} from "react";
import './Navbar.css'

const Navbar = () => {
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");

    const navToggle =() =>{
        active === "nav_menu"
            ? setActive("nav_menu nav_active")
            : setActive("nav_menu");

        toggleIcon === 'nav_toggler'  
        ? setToggleIcon('nav_toggler toggler')
        : setToggleIcon('nav_toggler')
    }
 
    return(
        <div className="navbar">
            <nav className={`nav`}>
                <a href="#" className="nav_brand">Connect</a>
                <ul className={active}>
                    <li  className="nav_item" ><a href="#inicio" className="nav_link">Início</a></li>
                    <li  className="nav_item" ><a href="#servico" className="nav_link">Serviço</a></li>
                    <li  className="nav_item" ><a href="#sobre-nos" className="nav_link">Sobre Nós</a></li>
                    <li  className="nav_item" ><a href="#duvidas" className="nav_link">Dúvidas</a></li>
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