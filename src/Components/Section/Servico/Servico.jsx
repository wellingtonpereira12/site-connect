import React, { useState }  from "react";
import './Servico.css';

function Servico() {
    const [hover, setHover] = useState(false);
    const [hover1, setHover1] = useState(false);

    const handleMouseEnter = () => {
      setHover(true); // Define o estado como true ao passar o mouse
    };
  
    const handleMouseLeave = () => {
      setHover(false); // Define o estado como false ao sair o mouse
    };

    const handleMouseEnter1 = () => {
      setHover1(true); // Define o estado como true ao passar o mouse
    };

    const handleMouseLeave1 = () => {
      setHover1(false); // Define o estado como false ao sair o mouse
    };

    const handleClick = () => {
        window.open('https://api.whatsapp.com/send/?phone=47984862476', '_blank');
    };
  
    return (
        <section id="servico" className="sectionServico">
            <div className="container">
                <div className="square">
                    <div className="titulo" >nossas especialidades</div>
                    <div className="descricao" >Sites rápidos, adaptáveis e otimizados para garantir resultados e melhorar sua presença online</div>
                    <div className="squareInfDet" >
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={hover ? "squareInfhover" : "squareInf"}>
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={hover ? "circlehover" : "circle"}>
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={hover ? "squareLogoHover" : "squareLogo"}>
                                  <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className={hover ? "orizontal-lineHover" : "orizontal-line"} ></div>
                                </div>
                            </div>
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={hover ? "textoTituloHover" : "textoTitulo"} >Criação de Sites: Sua Presença Digital Começa Aqui</div>
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={hover ? "descricaoEspHover" : "descricaoEsp"} >Na Connect, criamos sites personalizados, responsivos e otimizados para SEO, garantindo uma experiência digital eficiente e atraente para destacar sua marca no mercado.</div>
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="fundoBotao1"> 
                                <div onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className={hover ? "botaoServicoHover" : "botaoServico"}>Saiba Mais</div> 
                            </div>      
                        </div>
                        <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className={hover1 ? "squareInfhover" : "squareInf"}>
                            <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className={hover1 ? "circlehover" : "circle"}>
                                <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  className={hover1 ? "squareLogoHover" : "squareLogo"}>
                                  <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  className={hover1 ? "orizontal-lineHover" : "orizontal-line"}></div>
                                  <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  className={hover1 ? "orizontal-lineHover" : "orizontal-line"}></div>
                                  <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  className={hover1 ? "orizontal-lineHover" : "orizontal-line"}></div>
                                  <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  className={hover1 ? "orizontal-lineHover" : "orizontal-line"}></div>
                                </div>
                            </div>
                            <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className={hover1 ? "textoTituloHover" : "textoTitulo"}>Landing Pages: Converta Mais com Páginas Otimizadas</div>
                            <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className={hover1 ? "descricaoEspHover" : "descricaoEsp"}>Na Connect, criamos landing pages otimizadas para capturar leads e aumentar suas conversões, com design estratégico e foco em resultados rápidos.</div>
                            <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className="fundoBotao2">
                                <div onClick={handleClick} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  className={hover1 ? "botaoServicoHover" : "botaoServico"}>Saiba Mais</div> 
                            </div>                     
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servico;