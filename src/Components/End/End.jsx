import React from "react";
import './End.css'
import logo from '../../assets/ReactLogo.png'

function End() {

    const handleClick = () => {
        window.open('https://api.whatsapp.com/send/?phone=47984862476', '_blank');
    };
    return (
        <div className="endSectionEnd">
            <div className="endSectionEndParticao">
                <h1>Interessado em Construir seu Site?</h1>
                <button onClick={handleClick}><div className="endflecha-esquerda" /></button>
            </div>
            <div className="endContainerPrincipal">
            <div className="endlinha-branca" />
            <div className="endContainer">
                <div className="endDivLogo">
                    <img src={logo} alt="ReactLogo" className="endlogo"/>
                    <h1>React Soluções</h1>
                </div>
                <div className="endAteLogo">Até logo! Nos procure se quando quiser!</div>
                <div className="endDado">
                    <div className="">Blumenau, Santa Catarina</div>
                    <div className="">(47) 98486-2476</div>
                </div>
            </div>
            <div className="endContainer1">
                <div className="endDivLogo1">
                    <h1>Explorar</h1>
                </div>
                <div className="endDado1">
                    <a href="#inicio">Inicio</a>
                    <a href="#servico">Serviços</a>
                    <a href="#sobre-nos">Sobre Nós</a>
                    <a href="#duvidas">Dúvidas</a>
                </div>
            </div>
            </div>
            <div className="endDireitos">2024 - React Soluções - Todos os direitos reservados</div>
        </div>
    )
}

export default End;
