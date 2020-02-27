import React from 'react';
import FindCapital from './FindCapital'
import FindCountry from './FindCountry'

class Game extends React.Component
{   
    state = {allCountries:this.props.allCountries, capital:false, country:false}

//find its capital
    findCapital = () => {
       this.setState(prevState => ({...prevState,capital:!prevState.capital}))
    }
//find its country
    findCountry = () => {
        this.setState(prevState => ({...prevState,country:!prevState.country}))
    }
//ClearState
    clearState = () => {
        this.setState(prevState => ({...prevState,country:!prevState.country}))
    }

    render()
    {
        return(
            <div>
            {(this.state.capital || this.state.country) ?
                this.state.country ?
                <FindCountry activeCountry={this.state.allCountries[parseInt(Math.random()*10)]} clearState={this.clearState}/>
                :
                <FindCapital />
            :
            <div><center>
            <button onClick={this.findCountry}>Help me find this Country</button>
            <button onClick={this.findCapital}>Help me find it's Capital</button> 
            </center></div>
             }
            </div>
        )
    }
}

export default Game;