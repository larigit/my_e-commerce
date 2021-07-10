import Footer from "../../components/Footer";
import Card from "../../components/Card";


import Header from "../../components/Header";

const Restaurants = ({restaurants}) => {

    return(
        <>
            <Header />
            
            <div>
                {restaurants&&restaurants.map(item=>(
                    <>
                        <Card imagem={item.pratos[0].image} nome={item.name} categoria={item.categoria} alt={`imagem de ${item.categoria}`}/>
                    </>
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default Restaurants;