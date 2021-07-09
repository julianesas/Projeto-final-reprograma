import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner'
import mulher_computador2 from '../../assets/mulher_computador2.svg'
import julianePerfil from '../../assets/Juliane-perfil.jpeg'
import julianeComputador from '../../assets/Juliane-computador.jpg'
import './style.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'


const SobreAutora = () => {
    return (
        <>
            <Navbar />
            <Banner
                titulo='Sobre a Desenvolvedora'
                subtitulo='Conheça um pouco mais sobre a desenvolvedora do DateFinance'
                imagemBanner={mulher_computador2}
            />
            <section class="container sobre_autora">
                <h1 class="autora_titulo">Juliane Andrade</h1>
                <article class="sobre_autora_resumo">
                    <div class="sobre_autora_img_perfil">
                        <img class="perfil_autora" src={julianePerfil}/>
                    </div>
                    <div class="sobre_autora_texto">
                        <p> Olá, sou a Juliane Andrade, tenho 26 anos, pernambucana, graduada em Ciências Contábeis, pós-graduanda em Finanças e controladoria e estudante de desenvolvimento WEB front-end pela Reprograma.</p>
                        <p> Desenvolvedora da WEBSITE:    
                        <Link className="link_date_fincance" to="/">DateFinance</Link>
                        </p>
                        <p><a class="ancoras_resumo" href="https://www.instagram.com/julle_andrade/" target="_blank">Instagram</a> |
                        <a class="ancoras_resumo" href="https://github.com/julianesas" target="_blank">Github</a> |
                        <a class="ancoras_resumo" href="https://www.linkedin.com/in/juliane-andrade-837a05113/" target="_blank">Linkedn</a>
                        </p>
                </div>
            </article>
                <div class="separador">
                     <hr/>
                </div>
        </section>
        <section class=" container sobre_m">
            <h1>Sobre o DateFinance</h1>
            <article class="sobre_m_texto">
                <p>O projeto DateFinance foi um trabalho de conclusão do curso de Desenvolvimento Web Front-end promovido pela Reprograma. </p>
                <p>Desenvolvi este site no intuito de unir conhecimentos tecnologicos e financeiros para informatizar pessoas. Ele trás informações das Bolsas de Valores, Cotações das ações, taxas do mercado, cotações de moedas e de Bitcoin em tempo real.</p>
                <div className='sobre_m_img'>
                    <img src={julianeComputador} alt="foto de Juliane Andrade com Computador" />
                </div>
                <p>Para o desenvolvimento deste Site foram utilizadas as linguagens Javascript, HTML, CSS e a biblioteca REACT. </p>
                <p>Espero que as informações do DateFinance possam agregar conhecimento a todas as pessoas que acessarem.</p>
            </article>
            <h4>As informações economicas-financeiras são requisitadas da API <a href="https://hgbrasil.com/status/finance#personalizando-a-resposta" target="_blank"> HG Brasil</a></h4>
        </section>
        <Footer />
     
        </>

    )
}

export default SobreAutora