import React from 'react'
import Card from './Card/Card'
import style from './Grid.module.scss'
import {Col} from "react-bootstrap"

const Grid = (props) => {


    
    return (
        <div className={style.grid}>
            {props.charachters.map((char) => {

                return <Card
                    myTeamAdd={props.myTeamAdd}
                    name={char.name}
                    extension={char.thumbnail.extension}
                    path={char.thumbnail.path}
                    id={char.id}
                />
            })}
        </div>
    )

}

export default Grid