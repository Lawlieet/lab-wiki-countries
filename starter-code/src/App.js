import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import countries from './countries.json'
import Detail from './components/Detail'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div >
        <h1 className="h1">Wiki-Countries</h1>
        <div>
            <div> 
            {/* le hacemos un mal al json el cual pasara a tener 2 parametros 1 donde se guardara y el index */}
            {/* Recordar diego menciono que se necesita poner el key al padre anterior al link algo asi */}
            {countries.map((country, index) => 
             
              <div key={index}>
                <Link  to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>
              </div>
            )}
        </div>
            <div>
            <Route exact path="/:id" component={Detail} />
            </div>  
          </div>
          
        </div>
      
    );
  }
}

export default App;