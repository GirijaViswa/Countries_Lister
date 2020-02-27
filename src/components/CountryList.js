import React from 'react';

const CountryList = (props) => {
    return(
        <div className='card' onClick={()=>props.onclick(props.country)}>
        <h4>{props.country.name}</h4>
        </div>
    )
}

export default CountryList