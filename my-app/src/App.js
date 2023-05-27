import React from 'react';
import { Footer,Possibility,Features,What,Header } from './container';
import './App.css';

import {Cta,Navbar, Article} from './components'
function App() {
  return (
    <div className="App">
     <div className="gradient__bg">
      <Navbar/>
      <Header/>

     </div>
    
     <What/>
     <Features/>
     
     <Possibility/>
    
     <Cta/>
   
     <Footer/>
    </div>
  );
}

export default App;
