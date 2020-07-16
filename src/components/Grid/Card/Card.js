import React from 'react'
import './Card.module.scss'
import style from './Card.module.scss'
import { Link } from 'react-router-dom'
import { Row, Col } from "react-bootstrap"

class Card extends React.Component {

    clickHero = (e) => {
        const valueId = e.target.getAttribute('data-id')
        this.props.myTeamAdd(valueId);

    }
    render() {
        return (
            
                <div className={style.card}>

                    <div className={style.image}>
                        <img className={style.imageNested} src={`${this.props.path}.${this.props.extension}`} />
                    </div>
                    <div className={style.name}>
                        <p>{this.props.name}</p>
                    </div>
                    <div className={style.buttons}>
                        <Link to={`/hero-info/${this.props.id}`}>
                            <button>info</button>
                        </Link>
                        <button onClick={this.clickHero} data-id={this.props.id}>add</button>
                        {console.log(this.props.id)}
                    </div>

                </div>
            
        )
    }

}


export default Card