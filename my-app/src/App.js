import React from 'react';
import { Footer,Blog,Possibility,Features,What,Header } from './container';
import './App.css';

import {Cta,Brand,Navbar} from './components'
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
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
