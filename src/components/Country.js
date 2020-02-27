import React from 'react';

const Country = (props) => {
    return(
        <div className='singleCountry' onClick={props.onclick}>
            <img src={props.country.flag} alt={props.country.name} className='singleCountryImg' />
            <ul>
            <li>Name of the Country : {props.country.name}</li> 
            <li>Capital of Country  : {props.country.capital}</li>
            <li>Currencies used are : {props.country.currencies[0].name} --> {props.country.currencies[0].code} --> {props.country.currencies[0].symbol}</li>
            <li>Native name         : {props.country.nativeName}</li>
            <li>Belongs to        : {props.country.region}</li>
            </ul>
        </div>
    )   
}

export default Country