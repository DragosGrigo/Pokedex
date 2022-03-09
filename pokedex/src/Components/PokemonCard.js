import "./PokemonCard.css"
import React from "react"

const PokemonCard = ({id, name, image, typeOne, typeTwo}) => {
    const style = `poke-container ${typeOne}`;
    const styleType = `type ${typeTwo}`;
    return (
        <div className={style}>
            <div className="top-side">
                <p className="name">{name}</p>
                <span>{id}</span>
            </div>
            <div className="bottom-side">
                <div className="types">
                    <div className="type">{typeOne}</div>
                    <div className={styleType}>{typeTwo}</div>
                </div>
                <img src={image} alt={name}/>
            </div>
        </div>
    )
}

export default PokemonCard