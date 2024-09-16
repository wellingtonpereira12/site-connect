import React from "react";
import fundoInicio from '../../assets/fundoInicio.png';
import './Home.css';

function Home() {

    const handleClick = () => {
        window.open('https://api.whatsapp.com/send/?phone=47984862476', '_blank');
    };

    return (
        <section id="inicio">
            <div className="hero-container">
                <img src={fundoInicio} alt="fundoInicio" className="hero-image" />
                <div className="textoSobrepostoPrinciapal">
                    <div className="textoSobreposto">
                        <h1>Connect sua Marca</h1>
                        <h1>na Internet</h1>
                    </div> 
                    <div className="textoSobrepostoDescr"> 
                        <h1>Criamos sites com eficiência e</h1>
                        <h1>Inovação.</h1>
                    </div>  
                    <button class="botao-especialista"  onClick={handleClick}>Fale com um especialista</button>
                </div>
            </div>
        </section>
    )
}

export default Home;