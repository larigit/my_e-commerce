import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Restaurants from '../pages/Restaurants';
import Acknowledgment from '../pages/Acknowledgment';
import Restaurant from '../pages/Restaurant';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/restaurants" component={Restaurants}/>
                <Route path="/acknowledgment" component={Acknowledgment}/>
                <Route exact path="/restaurants/:restaurant" component={Restaurant}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;