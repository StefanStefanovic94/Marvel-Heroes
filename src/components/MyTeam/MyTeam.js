import React from 'react';
import MyTeamHeroCard from './MyTeamHeroCard';
import style from "./MyTeam.module.scss"
import {Col} from 'react-bootstrap'

const MyTeam = ({ team, removeHero }) => {

    return (

        <div className={style.myTeam}>
            {team.map(hero => (
                <MyTeamHeroCard
                    removeHero={removeHero}
                    id={hero.id}
                    key={hero.id}
                    name={hero.name}
                    path={hero.thumbnail.path}
                    extension={hero.thumbnail.extension}
                />
            ))}
            {console.log(team)}
        </div>
    )
}

export default MyTeam