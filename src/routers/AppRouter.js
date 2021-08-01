import React from 'react';
import {
    BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import PrivateWeb from './PrivateWeb';
import BackofficeLayout from 'components/backoffice/Backoffice';
import PublicWeb from './PublicWeb';
import {Layout as PublicWebLayout} from 'components//public/Layout/Layout'


export const AppRouter = () => {
   
    return (
        <Router>     
            <Switch>
                <Route path='/backoffice'>
                        <BackofficeLayout>
                            <PrivateWeb/> 
                        </BackofficeLayout>
                </Route>   
                <Route  path='/'>
                    <PublicWebLayout>                              
                        <PublicWeb />                        
                    </PublicWebLayout>
                </Route>
            </Switch>                         
        </Router>
    )
}


