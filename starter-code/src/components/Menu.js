import React from 'react'
import { Link } from 'react-router-dom'
import countries from '../countries.json'
import styled from 'styled-components'

const MenuNav = styled.nav` 
    width: 400px;
    padding: 20px;
`

const Menu = () => {
    return(
        <MenuNav>
            {

              countries.map((country,index) => {
                  return(
                      <Link key={index} to={`/country/${country.cca3}`} style={{textDecoration: 'none'}}>
                        <p>
                            {country.flag}
                            {country.name.common}
                        </p>
                      </Link>
                  )
              })  


            }

        </MenuNav>
    )
}

export default Menu