import React from 'react'
import style from './Header.module.scss'
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div className={style.header}>
            <h2 className={style.h2}>HERO TEAM</h2>
            <Link to="/">
                <h2 className={style.text}>HOMEPAGE</h2>
            </Link>
        </div>
    )
}

export default Header