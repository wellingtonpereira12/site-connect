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
                        <h1>Transforme sua Marca</h1>
                        <h1>com um Site de Sucesso</h1>
                    </div> 
                    <div className="textoSobrepostoDescr"> 
                        <h1>Inovação e Eficiência na Criação de Sites</h1>
                        <h1>Experimente uma Prévia Grátis!</h1>
                    </div>  
                    <button class="botao-especialista"  onClick={handleClick}>Peça sua prévia</button>
                </div>
            </div>
        </section>
    )
}

export default Home;