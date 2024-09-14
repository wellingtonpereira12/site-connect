import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Servico from './Components/Section/Servico/Servico.jsx';
import Duvida from './Components/Section/Duvidas/Duvidas.jsx';
import Sobre from './Components/Section/Sobre/Sobre.jsx';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Servico />
        <Sobre />
        <Duvida /> 
      </div>
    </>
  )
}

export default App;
