import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

import Home from '../pages/Home';
import Restaurants from '../pages/Restaurants';
import Acknowledgment from '../pages/Acknowledgment';
import Restaurant from '../pages/Restaurant';


const Routes = () => {

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
    // console.log(restaurants[0]&&restaurants[0].name)
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                {/* <Route exact path="/restaurants" component={Restaurants}/> */}
                <Route exact path="/restaurants" render={(props) => <Restaurants restaurants={restaurants}/>}/>

                <Route path="/acknowledgment" component={Acknowledgment}/>
                {/* <Route exact path="/restaurants/:restaurant" render={(props) => <div>Por favor, selecione o artigo</div>} component={Restaurant}/> */}
                <Route exact path="/restaurants/:restaurant" render={(props) => <Restaurant dado={restaurants}/>} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;