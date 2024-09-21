import React from "react";
import fundoInicio from '../../assets/fundoInicio.png';
import logoWhats from '../../assets/whats.png';
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
                    <button className="botao-especialista" onClick={handleClick}>
                        <img 
                            src={logoWhats}
                            rel="noopener noreferrer" 
                            alt="WhatsApp" 
                            style={{ width: '3vw', height: 'auto', marginRight: '0.5vw', verticalAlign: 'middle' }} 
                        />
                        Peça sua prévia
                   </button>
                </div>
            </div>
        </section>
    )
}

export default Home;