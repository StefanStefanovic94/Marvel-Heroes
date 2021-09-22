import React from 'react'
import style from './Search.module.scss'



const Search = ({ searchedHeroes }) => {
    const getValue = (event) => {
        searchedHeroes(event.target.value)
    }

    return (
        <div className={style.search}>
            <input onChange={getValue} placeholder="search..."></input>
        </div>)
}
export default Search