import React from "react";
import foto from '../../../assets/Wellington.png';
import './Sobre.css';


const Sobre = () => {
    return (
        <section id="sobre-nos" className="sobreSectionSobre">
            <div>
                <h1 className="sobreTitulo">Nossa Equipe</h1>
                <div className="sobreContainer" >
                    <h1 className="sobreh1">msg</h1>
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