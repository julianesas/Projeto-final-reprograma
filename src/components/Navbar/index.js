
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './style.css';
import Menina from '../../assets/menina.png'
import Openbook from '../../assets/open-book.png'
import Home from '../../assets/home.png'

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
                <li key='1' className='link-menu'>
                    <img src={Home} alt="Ícone do Home"  className={state.clicked? '' : 'none'} />
                    <Link className='nav-links' to='/'>Home</Link>
                </li>
                <li key='2' className='link-menu'>
                    <img src={Openbook} alt="Ícone de um livro" className={state.clicked? '' : 'none'}  />
                    <Link className="nav-links" to="/dicionariofinanceiro">Dicionário financeiro</Link>
                </li>
                <li key='3' className='link-menu'>
                    <img src={Menina} alt="Ícone de uma menina" className={state.clicked? '' : 'none'} />
                    <Link className="nav-links" to="/sobredesenvolvedora">Sobre a Desenvolvedora</Link>
                </li>

            </ul>

        </nav>
        
    )
}

export default Navbar