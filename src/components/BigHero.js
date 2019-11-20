import React from "react";
import everyone from '../../img/Everyone.jpg';
import preu from '../../img/Preu.JPG';
import vision from '../../img/Vision.jpg';
import css_bighero from '../../styles/css_bighero.css';

class BigHero extends React.Component {
  render() {
    return (
      <section>
        <article className="general-info">
          <div className="article-details">
            <h2>¿Quiénes somos?</h2>
            <p>
              La Comunidad Estudiantil de Ingeniería Informática es un
              conglomerado de estudiantes, que buscamos promover el desarrollo y
              apreciación al aprendizaje y la información en todos sus ámbitos, a
              través de actividades y eventos en un entorno de inclusión y sana
              convivencia.
            </p>
          </div>
          <img className="article-img" src={everyone} alt="About us"></img>
        </article>
        <hr/>
        <article className="mision">
        <div className="article-details">
          <h2>Nuestra misión</h2>
          <p>
            Ser un medio facilitador del conocimiento, y líderes capaces de
            emprender actividades, eventos y proyectos orientados a lograr un
            desarrollo integral de todos los participantes.
          </p>
        </div>
          <img className="article-img" src={preu} alt="Mision"></img>
        </article>
        <hr/>
        <article className="vision">
        <div className="article-details">
          <h2>Nuestra visión</h2>
          <p>
            Forjar una actitud profesional y entregada a la sociedad, con
            principios sólidos y fehacientes en cada miembro de la comunidad, y
            todos sus allegados.
          </p>
        </div>
          <img className="article-img" src={vision} alt="Vision"></img>
        </article>
          <hr/>
      </section>
    );
  }
}

export default BigHero;