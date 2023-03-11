import './App.css';
import Tarjeta from './Componentes/Tarjeta';
import Codigo from './images/image-qr-code.png';

function App() {
  return (
    <div className="App"> 
      <Tarjeta qr={Codigo}/>
    </div>
  );
}

export default App;
