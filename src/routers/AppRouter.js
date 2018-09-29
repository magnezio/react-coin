import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CoinsDashboard from '../components/CoinsDashboard'
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={CoinsDashboard} exact={true} />
                <Route component={NotFoundPage} />
            </Switch> 
        </div>
    </BrowserRouter >
);

export default AppRouter;