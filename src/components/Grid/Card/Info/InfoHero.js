import React from "react"
import style from "./Info.module.scss"
import FullImage from "./FullImage/FullImage"
import { Col, Row, Container } from 'react-bootstrap'

class InfoHero extends React.Component {
    constructor() {
        super()
        this.state = {
            info: null,
            fullImage: false
        }
    }

    fetchInfo = () => {
        return fetch(`https://gateway.marvel.com:443/v1/public/characters/${this.props.match.params.id}?apikey=aa3d20826840bd8571b0a17580337f2c`)
            .then(resolve => resolve.json())
            .then(data =>
                this.setState({ info: data.data.results[0] }))
    }

    componentDidMount() {
        this.fetchInfo()
    }

    openImage = () => {
        this.setState({
            fullImage: true
        })
    }

    closeImage = () => {
        this.setState({
            fullImage: false
        })
    }

    renderHero = () => {
        return (
            <div>
                            {this.state.fullImage && <FullImage info={this.state.info} closeImage={this.closeImage} />}
                            <div className={style.wrap}>
                                {console.log(this.state.info)}
                                <div className={style.image} onClick={this.openImage}>
                                    <img src={`${this.state.info.thumbnail.path}/standard_fantastic.${this.state.info.thumbnail.extension}`} />
                                </div>
                                <div className={style.text}>
                                    <h3>{this.state.info.name}</h3>
                                    <p>{this.state.info.description}</p>
                                </div>

                            </div>
            </div>
        )
    }



    render() {
        return (
            this.state.info ? this.renderHero() : null
        )
    }
}

export default InfoHero