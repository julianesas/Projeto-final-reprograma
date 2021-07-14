
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Livro from '../../assets/Livro.svg'
import Dicionario from '../../assets/dicionario.png'
import './style.css'

const DicionarioFinanceiro = ()=>{
    const [dicionario, setDicionario]=useState([])
    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/julianesas/api_dicionario_financeiro/db')
        .then(response=> response.json())
        .then(dados=>setDicionario(dados.dicionario_financeiro))

    }, [])

    

    return(
        <>
            <Navbar 
            classLogo="logo-nav"
            />
            <Banner 
                titulo='Dicionário das informações'
                subtitulo='Encontre os significados das informações financeiras presentes no DataFinance!!'
                imagemBanner={Livro}
            />
            <main className="container_dicionario">
                <div className="dicionario">
                {dicionario.map(item=>{
                    return(
                        <div className="palavra" key={item.palavra}>
                            <div className="titulo_palavra">
                                <img src={Dicionario} alt="Logo dicionario" />
                                <h1>{item.palavra}</h1>
                            </div>
                            <p>{item.descricao}</p>
                            <div className="btn_dicionario">
                               <a href={item.url}>Clique para saber mais</a>
                            </div>
                        </div>
                    )
                })}

                </div>
            </main>
            <Footer />
        </>

    )
}

export default DicionarioFinanceiro