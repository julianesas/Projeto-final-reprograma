import LogoSite from '../../../assets/LogoSite.png'
import './style.css';


const Logo =(props)=>{
    return(
        <div className={props.classLogo}>
            <img src={LogoSite} alt="ìcone do globo Terra" /> 
            <h1>Data<strong>Finance</strong></h1>
        </div>
    )
}

export default Logo