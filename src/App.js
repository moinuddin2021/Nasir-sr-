import logo from './logo.svg';
import './App.css';
import Sidebar from "./Componant/sidebar"
import Searchbar from './Componant/searchbar';
import Main from './Componant/content';

function App() {
  return (
    <div className="App bg-Shad-400 min-h-screen flex">
          
            <Sidebar/>
            <div className='w-full'>
            <Searchbar/>
            <Main/>

            </div>
          
    </div>
  );
}

export default App;
