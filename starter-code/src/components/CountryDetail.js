//https://medium.com/@dvenegas/empezando-con-react-router-v4-2b8c31c7eb11
import React, {Component} from 'react'
import countries from '../countries.json'
//import {Link} from 'react-router-dom'
//Habia puiesto mal la clase
import styled from 'styled-components'
const StyledC = styled.div`
    padding: 50px;
    h2, p {
        font-size: 3rem;
        line-height: 3rem;
    }
`
export default class CountryDetail extends Component {
    //Se crea el estado el cual lo guarda como un objeto vacio
    state = {
        country: {}
    }
    //https://es.reactjs.org/docs/react-component.html
    //Se crea el compontDidupdate
//componentDidUpdate() se invoca inmediatamente después de que la actualización ocurra. Este método no es llamado para el renderizador inicial.
//https://stackoverflow.com/questions/54114416/how-to-access-this-props-match-params-along-with-other-props
    componentDidUpdate(prevProps){
        if(this.props.location !== prevProps.location){
            const country = countries.find(country =>  country.cca3 === this.props.match.params.cca3)
            this.setState( { country })
        }        
    }


    render(){
        return(
            <StyledC>
                <h2>Country</h2>
                {/* <p>name {this.state.country.name.common}</p> */}
                <p>Capital:{this.state.country.capital}</p>
                <p>Area: {this.state.country.area}</p>
                <p>Flag: {this.state.country.flag}</p>
                <p>Border: {this.state.country.borders}</p>
            </StyledC>
        )
    }
}
