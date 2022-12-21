import React from "react";

import { Equipo } from "../Equipo/index";
import danna from "../assets/images/Danna.jpg";

function Members() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
            }
    }
    return (
        <section className="Menber">
            <h2>Miembros</h2>
            <div>
                <Equipo
                    image={danna}
                    imageAlt='Foto de Miembro'
                    text = "Danna Lozano"
                    descrip = "Breve descripcion de mi persona"
                    Experiencia = "Proyectos que a realizado con Mapax"
                    aficiones = "Sus hobbes"
                    contacto = "redes sociales"
                />
            </div>
        </section>
    )
}

export default Members;