import React from 'react';
import style from './MyTeamHeroCard.module.scss'

const MyTeamHeroCard = ({ name, path, extension, id, removeHero }) => {
    return (
        <div className={style.miniCard}>
            <div className={style.image}>
                <img src={`${path}/standard_small.${extension}`} />
            </div>
            <div className={style.name}>
                <h2>{name}</h2>
            </div>
            <div className={style.btn}>
                <button  onClick={() => removeHero(id)}>x</button>
            </div>
        </div>
    )
}

export default MyTeamHeroCard 