/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
        <ItemListContainer></ItemListContainer>
        <ItemCount></ItemCount>
      </div>
    </div>
  )
}

export default App;
