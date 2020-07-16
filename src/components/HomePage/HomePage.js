import React from 'react'
import fetchCharacters from "../../services/fetchAll"
import Grid from '../Grid/Grid'
import Search from '../Search/Search'
import MyTeam from '../MyTeam/MyTeam'
import style from "./HomePage.module.scss"
import { Container, Col, Row } from 'react-bootstrap'

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            charachters: [],
            filteredCharachters: [],
            myTeam: []
        }
    }


    componentDidMount() {
        // const storedTeam = localStorage.getItem("myTeam")
        fetchCharacters().then((data) => {
            this.setState({
                charachters: data,
                filteredCharachters: data,
                // myTeam: storedTeam ? JSON.parse(storedTeam) : []
            })
        })
    }

    searchedHeroes = (textInput) => {
        const newHeroes = this.state.charachters.filter((hero) => {
            return hero.name.toLowerCase().includes(textInput.toLowerCase())
        })
        this.setState({
            filteredCharachters: newHeroes
        })
    }

    myTeamAdd = (id) => {
        const heroTeam = this.state.myTeam.find((hero) => hero.id === Number(id));
        if (heroTeam) {
            return;
        }
        console.log(this.state.filteredCharachters, id);
        const heroT = this.state.filteredCharachters.find((hero) => hero.id === Number(id));
        const myTeam = [...this.state.myTeam, heroT];
        this.setState({ myTeam });
        // localStorage.setItem("myTeam", JSON.stringify(myTeam))
    };
    removeHero = (id) => {
        let arr = this.state.myTeam.filter((team) => team.id !== id)
        this.setState({ myTeam: arr });
    }


    render() {
        return (
            <div>
                {console.log(this.state.charachters)}
                <Search searchedHeroes={this.searchedHeroes} />
                <div className={style.section}>
                    <Grid charachters={this.state.filteredCharachters} myTeamAdd={this.myTeamAdd} />
                    <MyTeam team={this.state.myTeam} removeHero={this.removeHero} />
                </div>

            </div>
        )
    }

}
export default HomePage

