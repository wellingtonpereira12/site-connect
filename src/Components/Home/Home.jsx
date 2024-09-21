import React from "react";
import fundoInicio from '../../assets/fundoInicio.png';
import logoWhats from '../../assets/whats.png';
import './Home.css';

function Home() {
    const phoneNumber = '47984862476'; // Coloque o número de telefone com DDD
    const message = 'Olá,%20gostaria%20de%20de%20criar%20uma%20prévia%20grátis%20da%20minha%20marca.%20Podemos%20conversar%20sobre%20os%20detalhes%20e%20etapas%20do%20projeto?';
  
    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
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