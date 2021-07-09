
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './NavBar.css';

const Navbar = ()=>{
    const [state, setState] = useState({clicked: false})


    function clicado (){
        setState({clicked: !state.clicked})
    }
    
    return(
        <nav className="NavbarItens">
            <Logo classLogo='navbar-logo'/>  
            <div className="menu-icon" onClick={clicado}>
                <span className="material-icons">
                {state.clicked? 'close':'menu'}
                </span>
            </div>
            <ul className={state.clicked? 'nav-menu active' : 'nav-menu'}>
                <li key='1'>
                    <Link className='nav-links' to='/'>Home</Link>
                </li>
                <li key='2'>
                    <Link className="nav-links" to="/dicionariofinanceiro">Dicionário financeiro</Link>
                </li>
                <li key='3'>
                    <Link className="nav-links" to="/sobreautora">Sobre a Autora</Link>
                </li>

            </ul>

        </nav>
        
    )
}

export default Navbar