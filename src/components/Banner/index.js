//import dados_financeiros from '../../assets/dados_financeiros.svg'
import './style.css';

const Banner =(props)=>{

    return(
        <div className='container_banner'>
            <img src={props.imagemBanner} alt="Logo de dados financeiros"/>
            <div>
                <h1>{props.titulo}</h1>
                <p>{props.subtitulo}</p>
            </div>
            
        </div>
    )

}

export default Banner