import logo from './logo.svg';
import './App.css';
import Sidebar from "./Componant/sidebar"
import Searchbar from './Componant/searchbar';

function App() {
  return (
    <div className="App bg-Shad-400 min-h-screen flex">
          
            <Sidebar/>
            <Searchbar/>
          
    </div>
  );
}

export default App;
