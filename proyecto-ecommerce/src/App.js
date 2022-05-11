/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
        <ItemListContainer></ItemListContainer>
      </div>
    </div>
  )
}

export default App;
