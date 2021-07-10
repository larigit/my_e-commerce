import Header from "../../components/Header";
import Footer from "../../components/Footer";

import './home.css'

const Home = () => {
    return(
        <>
            <Header />
            <p className="home">Desde o começo da pandemia, o comércio é um dos setores que mais
sofrem. <br/><br/>Sabemos que é inevitável ter aglomerações em áreas comerciais e
devido a isso o comércio teve que ser fechado em alguns momentos
durante a pandemia.<br/><br/> Quem tinha familiaridade com tecnologia, redes
sociais não se prejudicou tanto, porém aqueles comerciantes que não
tinham conhecimento para manter suas vendas online sofreram bastante.
<br/><br/>Além disso, o consumidor também sofreu. O medo de se contaminar com
o vírus, enquanto o comércio estava aberto, impediu alguns consumidores
de irem até as lojas comprar o que necessitavam. E, durante o período do
comércio fechado ficou ainda mais difícil para o consumidor pois ele não
tinha acesso às lojas ou produtos. Mesmo aquelas lojas que estavam
atendendo online, o consumidor podia sentir que sua experiência de
compra havia diminuído bastante.<br/><br/> Alguns consumidores optavam por
comprar algo que necessitavam apenas quando as lojas abrissem
novamente, mas isso era ruim para as lojas pois estas necessitam de
vendas constantes para se manter.<br/><br/>
Isso tudo acarretou em fechamento definitivo de alguns comércios e um
impacto grande na economia de nosso país.
Tendo isto em vista, o site food commerce visa reunir todos os
restaurantes de uma cidade em um único lugar! <br/><br/>
O food commerce funciona como um protótipo para que, conforme a ideia se prove boa, mais estabelecimentos entrem na plataforma, chegando a ter todo o comercio de uma cidade em um só lugar!<br/><br/>
Assim, o cliente evita de se arriscar, sem precisar sair de casa e o comerciante
não sofre com o fechamento do comércio ou com a falta de clientes
devido ao temor do vírus.<br/><br/>
Este projeto tem o objetivo de construir o front-end desse e-commerce. </p>
            <Footer />
        </>
    )
}

export default Home;