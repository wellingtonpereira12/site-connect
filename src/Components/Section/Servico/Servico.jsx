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
    
    const phoneNumber = '47984862476'; // Coloque o número de telefone com DDD
    const message = 'Olá,%20gostaria%20de%20de%20criar%20uma%20prévia%20grátis%20da%20minha%20marca.%20Podemos%20conversar%20sobre%20os%20detalhes%20e%20etapas%20do%20projeto?';
  
    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
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
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="textoTitulo" >Criação de Sites: Sua Presença Digital Começa Aqui</div>
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="descricaoEsp" >Na React Soluções, criamos sites personalizados, responsivos e otimizados para SEO, garantindo uma experiência digital eficiente e atraente para destacar sua marca no mercado.</div>
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="fundoBotao"> 
                                <div onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className={hover ? "botaoServicoHover" : "botaoServico"}>Saiba Mais</div> 
                            </div>      
                        </div>
                        <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className={hover1 ? "squareInfhover1" : "squareInf1"}>
                            <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className={hover1 ? "circlehover" : "circle"}>
                                <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  className={hover1 ? "squareLogoHover" : "squareLogo"}>
                                  <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  className={hover1 ? "orizontal-lineHover" : "orizontal-line"}></div>
                                  <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  className={hover1 ? "orizontal-lineHover" : "orizontal-line"}></div>
                                  <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  className={hover1 ? "orizontal-lineHover" : "orizontal-line"}></div>
                                  <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  className={hover1 ? "orizontal-lineHover" : "orizontal-line"}></div>
                                </div>
                            </div>
                            <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className="textoTitulo">Landing Pages: Converta Mais com Páginas Otimizadas</div>
                            <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className="descricaoEsp">Na React Soluções, criamos landing pages otimizadas para capturar leads e aumentar suas conversões, com design estratégico e foco em resultados rápidos.</div>
                            <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className="fundoBotao">
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