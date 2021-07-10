import './style.css';

const ContainerDados =(props)=>{
    return(
        <div className='container_dados'>
            <div className='container_dados_titulo'>
                 <span className={props.classSpam}></span>
                <h1 className={props.classTitulo}>{props.nome}</h1>
            </div>
            
            <div >
                <div className='dados_financeiros'>
                    <h2>{props.titulo1}</h2>
                    <p>{props.valor1}</p>
                </div>
                <div className='dados_financeiros'>
                    <h2>{props.titulo2}</h2>
                    <p>{props.valor2}</p>
                </div>
                <div className='dados_financeiros'>
                    <h2>{props.titulo3}</h2>
                    <p>{props.valor3}</p>
                </div>
                <div className='dados_financeiros'>
                    <h2>{props.titulo4}</h2>
                    <p>{props.valor4}</p>
                </div>
                <div className='dados_financeiros'>
                    <h2>{props.titulo5}</h2>
                    <p>{props.valor5}</p>
                </div>
            </div>
        </div>
    )
}

export default ContainerDados