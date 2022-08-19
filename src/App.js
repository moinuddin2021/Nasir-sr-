import Sidebar from "./Componant/sidebar"
import Searchbar from './Componant/searchbar';
import {Routes,Route} from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import Myclass from './screens/Myclass';
import Fee from './screens/Fee';
import Faculty from './screens/Faculty';
import Help from './screens/Help';
import Reciept from './screens/Reciept';
import Report from './screens/Report';
import Studentregister from './screens/Studentregister';

function App() {
  return (
    <div className="bg-Shad-400 min-h-screen flex">
          
            <Sidebar/>
            <div className='w-full'>
            <Searchbar/>
            <Routes>
              <Route exact path='/' element={<Dashboard/>} />
              <Route exact path='myclass' element={<Myclass/>} />
              <Route exact path='fee' element={<Fee/>} />
              <Route exact path='faculty' element={<Faculty/>} />
              <Route exact path='help' element={<Help/>} />
              <Route exact path='reciept' element={<Reciept/>} />
              <Route exact path='report' element={<Report/>} />
              <Route exact path='studentregister' element={<Studentregister/>} />
            </Routes>
            </div>
          
    </div>
  );
}

export default App;
