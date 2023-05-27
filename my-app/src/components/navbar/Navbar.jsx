import React , {useState} from 'react';
import './navbar.css';
import{RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from'../../assests/logo.svg'

const Menu=()=>(
  <>
  <p><a href='#home'>Home</a></p>
          <p><a href='#what'>what</a></p>
          <p><a href='#possibilities'>poss</a></p>
          <p><a href='#features'>features</a></p>
          <p><a href='#blog'>blog</a></p>
  </>
)

const Navbar = () => {
  const[toggleMenu, setToogleMenu]= useState(false);
  return (
    <div className="share_navbar">
      <div className="share_navbar-links">
        <div className="share_navbar-links_logo">
          <image src={logo} alt="logo"/>
        </div>
        <div className="share_navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="share_navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="share_navbar-menu">
        {toggleMenu
        ?<RiCloseLine color="#fff" size={27} onClick={()=>setToogleMenu(false)}/>
        :<RiMenu3Line color="#fff" size={27} onClick={()=>setToogleMenu(true)}/>
}
{toggleMenu &&(
  <div className="share_navbar-menu_container_scale-up-ver-bottom">
    <div className="share_navbar-menu_container">
      <Menu/>
      <div className="share_navbar-menu_container-links-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  )
}

export default Navbar
