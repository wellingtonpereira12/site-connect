import React from "react";
import fundoInicio from '../../assets/fundoInicio.png';
import './Home.css';

function Home() {
    return (
        <section id="inicio">
            <div>
                <img src={fundoInicio} alt="fundoInicio" className="hero-image" />
            </div>
        </section>
    )
}

export default Home;