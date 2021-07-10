import { useState, useEffect } from "react";
import axios from "axios";

const Restaurant = () => {
    const [restaurant, setRestaurant] = useState([]);

    useEffect(() =>{
        const data = async() => {
            try{
                const {data} = await axios.get('https://my-json-server.typicode.com/larigit/larigit-fakeapi/restaurantes');
                setRestaurant(data);
            }catch(e){
                console.log(e, "erro");
            }
        }
        data();
    },[]);
    console.log(restaurant&&restaurant[0])
    
    return(
        <div>
            {restaurant&&restaurant.map(item=>(
                <p>{item.pratos.map((item)=>(
                    <div>
                        <img src={item.image} alt={item.name}/>
                        <p>{item.name}</p>
                        <p>`R${item.price}`</p>
                    </div>
                ))}</p>
            ))}
        </div>
    )
}

export default Restaurant;