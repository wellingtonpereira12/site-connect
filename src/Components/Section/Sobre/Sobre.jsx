import React from "react";
import foto from '../../../assets/Wellington.png';
import './Sobre.css';


const Sobre = () => {
    return (
        <section id="sobre-nos" className="sobreSectionSobre">
            <div>
                <h1 className="sobreTitulo">Nossa Equipe</h1>
                <div className="sobreContainer">
                    <div className="sobreContainerH1">
                        <h1 className="sobreh1">"Na React, maximizamos a visibilidade online com estratégias de SEO eficazes para atrair tráfego qualificado."</h1>
                    </div>
                    <div className="sobreContainerH1Nome">
                        <h1 className="sobreh1Nome">Wellington Pereira</h1>
                        <h1 className="sobreh1Cargo">CEO da Connect</h1>
                    </div>
                    <div className="sobreBolaEsquerda"><div className="flecha-esquerda"></div></div>
                    <div className="sobreBolaDireita"><div className="flecha-direita"></div></div>
                    <div className="sobreContainerImg">
                        <div className="sobreDetalheImg"></div>
                        <img src={foto} alt="img" className="sobreImg" />   
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Sobre;