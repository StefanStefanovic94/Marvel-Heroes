import React from "react"
import style from "./FullImage.module.scss"

class FullImage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div className={style.image}>
                    <img src={`${this.props.info.thumbnail.path}.${this.props.info.thumbnail.extension}`}/>
                    <button className={style.button} onClick={this.props.closeImage}>x</button>
                </div>
            </div>
        )
    }

}

export default FullImage