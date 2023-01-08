import React from "react";
import "./Equipo.css";

function Equipo(props) {
    return(
        <div className="Equipo">
            <img className="rear" src={props.image1} alt={props.imageAlt1} />
            <img className="profile" src={props.image2} alt={props.imageAlt2} />
            <p className="name">{props.text}</p>
            <p className="occupation">{props.occupation}</p>
            <p className="nacionalida">{props.nacionalidad}</p>
            <p className="member-describe">{props.describe}</p>
            <p className="Experiencia">{props.Experiencia}</p>
            <p className="Aficiones">{props.aficiones}</p>
            <p className="contacto">{props.contacto}</p>
            <a className="i">Quien soy:</a>
            <a className="experience">Experiencia:</a>
            <a className="hobbies">Aficiones:</a>
        </div>
    )
}

export { Equipo }