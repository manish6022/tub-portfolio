import { IconButton } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
// import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import Home from './pages/Home'
import PortfoliosPage from './pages/PortfoliosPage';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
import { useState } from 'react';


function App() {
  const [navToggle,setNavToggle]= useState(false);

const navClick = () => {
  setNavToggle(!navToggle)
  
}

  return (
   <div className="App">
     <div className={`sidebar ${navToggle? 'nav-toggle':'' }`}>
       <NavBar />
     </div>
     <div className="nav-btn" onClick={navClick}>
     <IconButton aria-label="toggler">
       {navToggle ? <MenuOpenOutlinedIcon style={{color:'white', fontSize:'4rem'}}/> : <MenuOutlinedIcon style={{color:'white', fontSize:'4rem'}} />}
     </IconButton>
     </div>
     
       <div className="main-content">
         <div className="content">
           <Switch >
             <Route path="/" exact>
             <Home />
             </Route>
             <Route path="/about" exact>
             <AboutPage />
             </Route>
              <Route path="/portfolios" exact>
             <PortfoliosPage />
             </Route>
             {/* <Route path="/blogs" exact>
             <BlogsPage />
             </Route> */}
             <Route path="/contact" exact>
             <ContactPage />
             </Route>
           </Switch>
         </div>

       </div>
    
   </div>
  );
}

export default App;