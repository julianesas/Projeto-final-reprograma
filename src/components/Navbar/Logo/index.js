import LogoSite from '../../../assets/LogoSite.png'
import './style.css';


const Logo =(props)=>{
    return(
        <div className={props.classLogo}>
            <img src={LogoSite} alt="Ícone da logo do site" /> 
            <h1>Finance<strong>Data</strong></h1>
        </div>
    )
}

export default Logo