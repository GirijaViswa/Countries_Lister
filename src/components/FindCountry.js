import React from 'react';
var activeCountry;
const guessCountry = (event) => {
    var msg;
    event.preventDefault();
    var guessedCountryName = event.target.firstElementChild.value

    if (guessedCountryName == activeCountry.name)
    {
        msg = "You guessed Right!";
    }
    else
    {
        msg = "Better Luck next time!";
    }
    event.target.firstElementChild.value = ""
    alert(msg);
}

const FindCountry = (props) => {
    activeCountry = props.activeCountry;
    return (
        <div><center>
        <img src={props.activeCountry.flag} alt={props.activeCountry.name}/><br/>
        it's {props.activeCountry.name}<br/>
        <form onSubmit={guessCountry}>
            <input type="text" placeholder="Guess this country" name="guessedCountryName"/><br/>
            <input type="submit" />
        </form>
        </center></div>
    )
}



export default FindCountry