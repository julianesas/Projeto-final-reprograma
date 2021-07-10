import './style.css';
import dadosEmpresas from "../../services/dadosEmpresas"
import { useState } from 'react';
import EmpresaPesquisada from '../../assets/EmpresaPesquisada.png'

const Search = () => {
    const [empresa, setEmpresa] = useState([])
    const [nomeEmpresa, setNomeEmpresa] = useState('')
    const [pesquisar, setPesquisar] = useState({clicked: false})

    function handleClick(event) {
        event.preventDefault()
        
        if(!nomeEmpresa){
            setPesquisar({clicked: false})
            alert('Digite o nome da Empresa')
        }else{
            handleSubmit()
        }  
    }
    function handleChange(event) {
        let nomeInput = event.target.value;
        let arrayNome = nomeInput.split('-')
        setNomeEmpresa(arrayNome[arrayNome.length -1].trim())
    }
    console.log(pesquisar.clicked)
    
    function handleSubmit(){
        fetch(`https://api.hgbrasil.com/finance/stock_price?format=json-cors&key=21de1d7a&symbol=${nomeEmpresa}`)
            .then(response => response.json())
            .then(dados =>{
                nomeEmpresa.toUpperCase()
                if(dados.results[nomeEmpresa.toUpperCase()].error===true){
                    throw new Error()
                }else{
                    setPesquisar({clicked: true})
                    setEmpresa(dados.results[nomeEmpresa])
                    console.log(dados.results)
                    
                }    
            })
            .catch(error=>{
                setPesquisar({clicked: false})
                alert('Ação não encontrada!!')
            })
    }


    return (
        <div className='pesquisar'>
            <div className='container_pesquisar'>
                <div className='input_pesquisar'>
                    <form>
                        <input list="opcoes" name="Empresas" onChange={handleChange} placeholder='Pesquise o Valor de uma ação'/>
                        <datalist id="opcoes" className='ui-autocomplete'>
                            {dadosEmpresas.map(function (objeto) {
                                let empresa = Object.keys(objeto)[0]
                                
                                    return (
                                        <option  value={objeto[empresa] + ' - ' + empresa} key={empresa} />
                                    )
                                
                               
                            })
                            }
                        </datalist>
                        
                        <button type="submit" id='btn_pesquisar'onClick={handleClick}>
                            <span className="material-icons">search</span>
                        </button>
                    </form>
                </div>
            </div>
            <div className={ !pesquisar.clicked? 'none':'dadosCompanhia'}>
                <div className='companhia_nome'>
                    <img src={EmpresaPesquisada} alt="Ícone de uma empresa dentro da Lupa" />
                    <h1>{(empresa.company_name)+' - '+( empresa.symbol)}</h1>
                </div>
                <div>
                    <div className='container_dados_pesquisados'>
                        <div className='resultado_dados'>
                            <span className="material-icons icone-empresa">article</span>
                            <h2>CNPJ:</h2>
                            <p>{empresa.document}</p>
                        </div>
                        <div className='resultado_dados'>
                        <span className="material-icons icone-empresa">place</span>
                            <h2>Localização:</h2>
                            <p>{empresa.region}</p>
                        </div>
                    </div>
                    <div className='container_dados_pesquisados'>
                        <div className='resultado_dados'>
                            <span className="material-icons icone-empresa">price_check</span>
                            <h2>Preço por ação:</h2>
                            <p> R$ {empresa.price}</p>
                        </div>
                        <div className='resultado_dados'>
                            <span className="material-icons icone-empresa">insights</span>
                            <h2>Percentual de mudança do dia:</h2>
                            <p>{empresa.change_percent} </p>
                        </div>
                        <div className='resultado_dados'>
                            <span className="material-icons icone-empresa">paid</span>
                            <h2>Valor de mercado (em milhões):</h2>
                            <p>  R$ {empresa.market_cap}</p>
                        </div>
                    </div>
                    <div className='container_dados_pesquisados'>
                        <div className='resultado_dados'>
                        <span className="material-icons icone-empresa">description</span>
                            <h2>Descrição da empresa: <span>{empresa.description}</span></h2>
                        </div>
                        
                    </div>
                    <div className='saber_mais_Empresa'>
                        <a href={empresa.website} target="_blank" rel="noreferrer">Saiba mais sobre a empresa</a>
                        
                    </div>                     
                </div>
            </div>
        </div>

    )
}

export default Search