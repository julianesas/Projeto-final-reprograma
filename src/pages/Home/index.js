import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Search from '../../components/Search'
import { useEffect, useState } from 'react'
import ContainerDados from '../../components/ContainerDados'
import Banner from '../../components/Banner'
import './style.css'
import MulherGrafico from '../../assets/MulherGrafico.svg'
import dadosFinanceiros from '../../assets/dadosFinanceiros.svg'
import MulheresBitcoin from '../../assets/MulheresBitcoin.svg'
import logoTaxas from '../../assets/logoTaxas.svg'
import PosicaoMercado from '../../assets/PosicaoMercado.svg'
import Moedas from '../../assets/Moedas.png'
import LogoTaxa from '../../assets/Taxas.png'
import Mercado from '../../assets/Mercado.png'
import Bitcoin from '../../assets/Bitcoin.png'



const Home = ()=>{

    const [moedas, setMoedas]=useState({})
    const [bitcoin, setBitcoin]=useState({})
    const [stocks, setStoks]=useState({})
    const [taxas, setTaxas]=useState({})

    useEffect(()=>{
    async function loadApi(){
        const response= await fetch('https://api.hgbrasil.com/finance?format=json-cors&key=21de1d7a')
        const dados = await response.json()
        setMoedas(dados.results.currencies)
            setBitcoin(dados.results.bitcoin)
            setStoks(dados.results.stocks)
            setTaxas(dados.results.taxes[0])
             console.log(dados.results.taxes[0])
    }
    loadApi()
           
    },[])

    
    return(
        <>
            <Navbar />
            <Banner 
            titulo='FinanceData'
            subtitulo='Obtenha dados econômicos em tempo real. Preço e variação de ações, Cotações de moedas, Bitcoin, índices das principais bolsas!!'
            imagemBanner={dadosFinanceiros}
            />
            <Search />
                <main className='container-informações'>
                    <div className='box_cotacao'>
                        <div className='box_cotacao_title' >
                            <img src={Moedas} alt="Logo diagrama" />
                            <h1>COTAÇÃO DAS PRINCIPAIS MOEDAS PARA O REAL</h1>
                        </div>
                        
                        <div className='container_moedas'>
                            <div className='container_moedas_img'>
                                <img src={MulherGrafico} alt="Logo de mulher com grágico"/>
                            </div>
                            
                            <div className='moedas'>
                            { Object.keys(moedas).map(function(item){
                                return(
                                    <div key={item} className={item==='source'? 'none': item}>
                                         
                                        <ContainerDados
                                        classSpam={(moedas[item].name)} 
                                        classTitulo='white'
                                        nome={(moedas[item].name)} 
                                        titulo1='Valor para compra:' valor1={(moedas[item].buy)}
                                        titulo2='Valor para Venda:' valor2={(moedas[item].sell)}
                                        titulo3='Última Posição:' valor3={(moedas[item].variation+'%')}  
                                                      
                                        />
                                    </div>
                                );    
                                
                            })}
                            </div> 
                            
                         </div> 
                    </div>
                    <div className='box_cotacao'>
                        <div className='box_cotacao_title' >
                            <img src={Bitcoin} alt="Logo diagrama" />
                            <h1>VEJA  A COTAÇÃO DO BITCOIN NAS PRINCIPAIS CORRETORAS</h1>
                        </div>
                       
                        <div className='container_moedas'>
                            <div className='container_moedas_img'>
                                <img src={MulheresBitcoin} alt="Logo de homem com dinheiro"/>
                            </div>
                            <div className='moedas'>
                            { Object.keys(bitcoin).map(function(item){
                                    return(
                                        <div key={item}>
                                            <ContainerDados 
                                            nome={(bitcoin[item].name)} 
                                            titulo1='Valor para compra:' valor1={(bitcoin[item].buy)}
                                            titulo2='Valor para Venda:' valor2={(bitcoin[item].sell)}
                                            titulo3='Última Posição:' valor3={(bitcoin[item].last)}
                                            titulo4='Variação:' valor4={(bitcoin[item].variation)} 
                                            titulo5='Formato:' valor5={(bitcoin[item].format[0]+ '/'+bitcoin[item].format[1])}                                 
                                            />
                                        </div>
                                    )
                                     
                            })}
                            </div> 
                         </div> 
                    </div>
                    <div className='box_cotacao'>
                        <div className='box_cotacao_title' >
                            <img src={Mercado} alt="Logo gráfico" />
                            <h1>POSIÇOES DOS PRINCIPAIS MERCADOS</h1>
                        </div>
                       
                        <div className='container_moedas'>
                            <div className='container_moedas_img'>
                                <img src={PosicaoMercado} alt="Logo de Mulher com relatorio"/>
                            </div>
                            
                            <div className='moedas'>
                            { Object.keys(stocks).map(function(item){  
                                    return(
                                        <div key={item}>
                                            <ContainerDados 
                                            nome={(stocks[item].name)} 
                                            classTitulo='white'
                                            titulo1='Localização' valor1={(stocks[item].location)}
                                            titulo2='Pontos' valor2={(stocks[item].points)}
                                            titulo3='Variação' valor3={(stocks[item].variation)}  
                                                
                                            />
                                        </div>
                                    )
                                    
                            })}
                            </div> 
                            
                         </div> 
                    </div>
                    <div className='box_cotacao'>
                        <div className='box_cotacao_title' >
                            <img src={LogoTaxa } alt="Logo taxa" />
                            <h1>TAXAS DE JUROS DO BRASIL</h1>
                        </div>
                       
                        <div className='container_taxas'>
                            <div className='container_moedas_img'>
                                <img src={logoTaxas} alt="Logo Taxa"/>
                            </div>
                            
                            <div className='moedas'>
                            { Object.keys(taxas).map(function(item){                          
                                    return(
                                        <div key={item} className={item==='date'? 'none': item + ' taxa_selic_cdi'}>
                                            <h1>{item.replace('daily','diário' ).replace('factor','fator' )} =</h1>
                                            <p>{taxas[item]}%</p>
                                        </div>
                                    )
                                     
                            })}
                            </div> 
                            
                         </div> 
                    </div>
                </main>
            <Footer />
        </>

    )
}

export default Home