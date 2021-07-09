import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import Card from "../../components/Card";


import Header from "../../components/Header";

const Restaurants = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() =>{
        const data = async() => {
            try{
                const {data} = await axios.get('https://my-json-server.typicode.com/larigit/larigit-fakeapi/restaurantes');
                setRestaurants(data);
            }catch(e){
                console.log(e, "erro");
            }
        }
        data();
    },[]);
    console.log(restaurants)
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