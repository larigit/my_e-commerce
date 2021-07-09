import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Restaurants from '../pages/Restaurants';
import Acknowledgment from '../pages/Acknowledgment';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/restaurants" component={Restaurants}/>
                <Route path="/acknowledgment" component={Acknowledgment}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;