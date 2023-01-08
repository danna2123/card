import React from "react";

import { Equipo } from "../Equipo/index";
import dannaPerfil from "../assets/images/dannaPerfil.png";
import dannarear from "../assets/images/images1.png";
import "./menbers.css";

function Members() {
    return (
        <section className="Member">
            <div>
                <Equipo
                    image1={dannarear}
                    imageAlt1='foto de portada'
                    image2={dannaPerfil}
                    imageAlt2 ='Foto de Miembro perfil'
                    text = "Danna Lozano"
                    occupation = "developer from"
                    nacionalidad = "Colombia"
                    describe = "Breve descripcion de mi persona"
                    Experiencia = "Proyectos que a realizado con Mapax"
                    aficiones = "Sus hobbes"
                    contacto = "redes sociales"
                />
            </div>
            <div className="line"></div>
            <div className="barra"></div>
            <div className="Mapax">
                <h1>MAPAX</h1>
            </div>
        </section>
    )
}

export default Members;