import React from "react";
import Equipo from "./Equipo.css";

function Equipo(props) {
    return(
        <div className="Equipo">
            <img src={props.image} alt={props.imageAlt} />
            <p>{props.text}</p>
            <p className="occupation">{props.occupation}</p>
            <p className="nacionalida">{props.nacionalidad}</p>
            <p className="member-describe">{props.describe}</p>
            <p className="Experiencia">{props.Experiencia}</p>
            <p className="Aficiones">{props.aficiones}</p>
            <p className="contacto">{props.contacto}</p>
        </div>
    )
}

export { Equipo }