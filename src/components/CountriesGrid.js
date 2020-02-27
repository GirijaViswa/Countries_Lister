import React from "react";
import CountryList from './CountryList'

const CountriesGrid = (props) => {
    return(
        <div className='card-container'>
        {props.allCountries.map(country => <CountryList country={country} key={Math.random()} onclick={props.onclick} />)}
        </div>
    )
}

export default CountriesGrid