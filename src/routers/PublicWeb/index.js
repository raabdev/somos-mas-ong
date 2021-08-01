import React from 'react'
import {publicWebArray} from './publicWebArray'
import { Route, Switch } from 'react-router-dom';
const PublicWeb = () => {

  //this function is the same of publicweb because it will be
  //replaced in the future with a new function that validates if the user is logged in
  const mapRoutes= routes =>{
    return routes.map(route =>{
      return <Route key={route.id} exact path={route.path}>
              <div className='global_transitions'>            
                {route.component}
              </div>           
            </Route>
        
    })
  }

  return <Switch>{mapRoutes(publicWebArray)}</Switch>
}

export default PublicWeb