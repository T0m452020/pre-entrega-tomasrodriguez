import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import  "./components/ItemListContainer/ItemListContainer.css";
import  './App.css';

function App() {
  return (
    <div>
        
        <NavBar/>
        
        <ItemListContainer greeting="¡Bienvenidos a nuestra nueva tienda!" />
    </div>
  

  );
}   

export default App;