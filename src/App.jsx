import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Servico from './Components/Section/Servico/Servico.jsx';
import Duvida from './Components/Section/Duvidas/Duvidas.jsx';
import Sobre from './Components/Section/Sobre/Sobre.jsx';
import End from './Components/End/End.jsx';
import Whats from './Components/Whats/Whats.jsx';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css'

function App() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
            <title>React Soluções - Desenvolvimento Web</title>
            <link rel="canonical" href="https://reactsolucoes.com.br" />
            <meta name="description" content="Oferecemos soluções em desenvolvimento web, focando na inovação e eficiência." />
        </Helmet>
        <Navbar />
        <Home />
        <Servico />
        <Sobre />
        <Duvida /> 
        <End />
        <Whats />
        <ScrollToTop />
      </div>
    </HelmetProvider>  
  )
}

export default App;
