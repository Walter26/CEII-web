import React from "react";
import about from "../img/about.jpg"


class Home extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="about">
                    <img src={about} alt="about" width="500px" className="home-img"/>
                    <div className="home-details">
                        <h2>¿Quiénes somos?</h2>
                        <p>La Comunidad Estudiantil de Ingeniería Informática es un conglomerado de estudiantes, que buscamos promover el desarrollo y apreciación al aprendizaje y la información en todos sus ámbitos, a través de actividades y eventos en un entorno de inclusión y sana convivencia.</p>
                    </div>
                </div>
                <div className="mision">
                    <img src="" alt="" className="home-img"/>
                    <div className="home-details">
                        <h2>Nuestra misión</h2>
                        <p>Ser un medio facilitador del conocimiento, y líderes capaces de emprender actividades, eventos y proyectos orientados a lograr un desarrollo integral de todos los participantes.</p>
                    </div>
                </div>
                <div className="vision">
                    <img src="" alt="" className="home-img"/>
                    <div className="home-details">
                        <h2>Nuestra visión</h2>
                        <p>Forjar una actitud profesional y entregada a la sociedad, con principios sólidos y fehacientes en cada miembro de la comunidad, y todos sus allegados.</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;