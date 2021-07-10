import './style.css';
import { Link } from 'react-router-dom'
import Logo from '../Navbar/Logo'
import Instagram from '../../assets/Instagram.png'
import Linkedin from '../../assets/Linkedin.png'
import Github from '../../assets/Github.png'

const Footer =()=>{

    return (
        <footer className="rodape">
            <div className="rodape__principal">
                <ul className="rodape__navegacao">
                    <li key='1'>
                        <Link className='links-rodape' to='/'>Home</Link>
                    </li>
                    <li key='2'>
                        <Link className="links-rodape" to="/dicionariofinanceiro">Dicionário financeiro</Link>
                    </li>
                    <li key='3'>
                        <Link className="links-rodape" to="/sobredesenvolvedora">Sobre a Desenvolvedora</Link>
                    </li>
                </ul>
                <div className="rodape__logo ">
                   <Logo classLogo='logo-rodape' />
                </div>

                <div className="rodape__redes-sociais ">
                    <a href="https://www.instagram.com/julle_andrade/" target="_blank ">
                        <img src={Instagram} alt="Íconde do Instagram" />
                    </a>
                    <a href="https://github.com/julianesas" target="_blank ">
                        <img src={Github} alt="Ícone do Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/juliane-andrade-837a05113/" target="_blank ">
                        <img src={Linkedin} alt="Ícone do Linkedin" />
                    </a>
                   
                </div>

            </div>

            <div className="rodape__cc ">
                <p>Creative Commons 2021 | Feito com amor por Juliane Andrade</p>
            </div>
    </footer>
    )
    

}

export default Footer