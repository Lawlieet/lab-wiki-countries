import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Detail from '../components/Detail'



function Router() {
    return (
      <BrowserRouter>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/:id" component={Detail} />
          {/* |<Route exact path="/characters" component={Characters} /> */}
          {/* |<Route exact path="/" component={Home} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
  
  export default Router