import React,{useState} from 'react';

var activeCountry; // to access the props

const guessCountry = (event) => {
    
    var msg;
    event.preventDefault();
    var guessedCountryName = event.target.firstElementChild.value
    // for (var count=0;count < 5;count ++)
    // {
        if (guessedCountryName === activeCountry.activeCountry.name)
        {
            msg = "You guessed Right!";
        }
        else
        {
            msg = "Better Luck next time!";
            // msg = "Better Luck next time! You still have "+4-count+" to win the game.";
        }
        event.target.firstElementChild.value = ""
        alert(msg);
        activeCountry.clearState()
    // }
}

const FindCountry = (props) => {
    const [count, setCount] = useState(5);
    activeCountry = props;
    return (
        <div><center>
        <img src={props.activeCountry.flag} alt={props.activeCountry.name}/><br/>
        it's {props.activeCountry.name}<br/>
        {
            <form onSubmit={guessCountry}>
            <input type="text" placeholder="Guess this country" name="guessedCountryName"/><br/>
            <input type="submit" />
            </form>
        }
        </center></div>
    )
}

export default FindCountry