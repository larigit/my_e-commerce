import { useState, useEffect } from "react";
import axios from "axios";


import Header from "../../components/Header";

const Restaurants = () => {

    const [food, setFood] = useState([]);

    useEffect(() =>{
        const data = async() => {
            try{
                const options = {
                    method: 'GET',
                    url: 'https://tasty.p.rapidapi.com/recipes/list',
                    params: {from: '0', size: '20', tags: 'under_30_minutes'},
                    headers: {
                        'x-rapidapi-key': 'b813ef501bmsh810b03545575f35p1b5115jsn53f4951326dc',
                        'x-rapidapi-host': 'tasty.p.rapidapi.com'
                    }
                }; 
                const {data} = await axios.request(options);
                setFood(data);
            }catch(e){
                console.log(e, "erro");
            }
        }
        data();
    },[]);
    console.log(food);
    // console.log(food.results.map(item=>{
    //     return (item.thumbnail_url)
    // }));
    // if(food.results !== undefined){
    //     console.log(food.results.map(item=>{
    //         return (item.thumbnail_url)
    //     }));
    // }

    // useEffect(()=>{
    //     console.log(food.results.map(item=>{
    //         return (item.thumbnail_url)
    //     }))
    // },[food])

    return(
        <>
            <Header />
            {/* <div>
                {fotos.map(item=>(
                    item.thumbnail_url
                ))}
            </div> */}
        </>
    )
}

export default Restaurants;