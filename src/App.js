import './App.css';
import {React} from'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Login } from './pages/Login/Login';
import { Signup } from './pages/Login/Signup';
import { AboutPage } from './MainPages/about/AboutPage';
import { PropertiesPage } from './MainPages/Properties/PropertiesPage';
import { ContentImage } from './pages/ContentImage/ContentImage';
import { Agentpages } from './MainPages/AgentPages/Agentpages';
import { Pagination } from './pages/Pagination/Pagination.jsx';
import { Parent } from './pages/Summa/Parent.jsx';
function App() {
 
  return (<>

  {
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/properties' element={<PropertiesPage/>}/>
        <Route path='/agent' element={<Agentpages/>} />
        <Route path='/page' element={<Pagination/>}/>
        <Route path='/high' element={<Parent/>}/>
        {/* <Route path='/blog' element={} />
        <Route path='/contact' element={} /> */}
      </Routes>
  </BrowserRouter> 
  }
  <div>
  </div>
 </>
  );
}

export default App;
