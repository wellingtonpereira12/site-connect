import React, { useState, useEffect } from "react";
import './Duvidas.css';

const duvidas = [
    "Qual é o prazo para a conclusão de um site?",
    "Os sites da React são responsivos?",
    "Vocês oferecem manutenção para os sites após a entrega?",
    "O que está incluído no serviço de otimização para SEO?",
    "Qual é o custo médio para criar um site?"
];

const respostas = [
    "O prazo pode variar dependendo da complexidade do projeto, mas geralmente, entregamos um site completo em 1 a 3 semanas.",
    "Sim, todos os sites que criamos são responsivos, garantindo que funcionem bem em qualquer dispositivo, desde desktops até smartphones.",
    "Sim, oferecemos pacotes de manutenção para garantir que seu site permaneça atualizado e funcione sem problemas.",
    "Incluímos pesquisa de palavras-chave, otimização de conteúdo, ajuste de meta tags e melhorias técnicas para seu ranqueamento no Google.",
    "O custo varia com a complexidade e requisitos do projeto. Consulte-nos para uma estimativa precisa."
];


function Duvidas() {
    const [hoverStates, setHoverStates] = useState([true, false, false, false, false]);
    const phoneNumber = '47984862476'; // Coloque o número de telefone com DDD
    const message = 'Olá,%20gostaria%20de%20de%20criar%20uma%20prévia%20grátis%20da%20minha%20marca.%20Podemos%20conversar%20sobre%20os%20detalhes%20e%20etapas%20do%20projeto?';
  
    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    const handleClickOpen = (index) => {
        let newHoverStates = hoverStates.map((_, i) => i === index);
        setHoverStates(newHoverStates);
    };

    return (
        <section id="duvidas" className="duvidasSectionDuvidas">
            <h1 className="duvidasTitulo">duvidas</h1>
            <div className="duvidasContainer">
                <div className="duvidasContainerItem">
                    <div className="duvidasContainerItemDiv">
                        <h1 className="duvidasContainerItemDivh1">Se tiver alguma dúvida, sinta-se à vontade para entrar em contato conosco. Estamos aqui para ajudar!</h1>
                        <div className="duvidasContainerItemDivDivbutton">
                            <button onClick={handleClick} className="duvidasContainerItemDivbutton">Entre em Contato</button>
                        </div>
                    </div>
                </div>
                <div className="duvidasContainerItem1">
                    <div className="duvidasContainerItem1Div">
                        {duvidas.map((duvida, index) => (
                            <div
                            key={index}
                            onClick={() => handleClickOpen(index)}
                            className={hoverStates[index] ? "duvidasContainerItem1DivQuadradoClick" : "duvidasContainerItem1DivQuadrado"}
                            >
                            {hoverStates[index] ? (
                                <div>
                                <h1 className="duvidasContainerItem1DivDuvidaClick">{duvida}</h1>
                                <p  className="duvidasContainerItem1DivDuvidaResposta"> {respostas[index]}</p>
                                </div>
                            ) : (
                                <h1 className="duvidasContainerItem1DivDuvida">{duvida}</h1>
                            )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Duvidas;