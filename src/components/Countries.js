import React from 'react';
import CountriesGrid from './CountriesGrid'
import Country from './Country'
import Game from './Game'

class Countries extends React.Component
{
    state = {allCountries: [],activeCountry: "", Isplaying: false}
// fetch data from API
    componentDidMount()
    {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(resp => resp.json())
        .then(data => this.setState(this.state.allCountries = data))
    }

//to show only one country
    handleClick = (country) => {
        this.setState(prevState => ({...prevState,activeCountry:country}))
    }

//back to list of all countries(home)
    clearState = () => {
        this.setState(prevState => ({...prevState,activeCountry:""}))
    }

//find its country
    findCountry = () => {

    }

//find its capital
    findCapital = () => {

    }

//start the game
    startGame = () => {
        this.setState(prevState => ({...prevState,Isplaying:!prevState.Isplaying}))
    }

//render function for the component
    render()
    {
        return(
            <div>
            <div className="heading">COUNTRIES LISTER</div>
            <div><center>
                <button onClick={this.startGame}>Start Playing!</button> 
            </center></div>
            <hr/>
            {this.state.activeCountry ? 
            <Country country={this.state.activeCountry} onclick={this.clearState}/>
            :
            this.state.Isplaying ?
            <Game allCountries={this.state.allCountries}/>
            :
            <CountriesGrid allCountries={this.state.allCountries} onclick={this.handleClick} />
            }
            </div>
        )
    }

}

export default Countries