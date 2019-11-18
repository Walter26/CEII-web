import React from "react";

class BigHero extends React.Component {
  render() {
    return (
      <section>
        <article className="general-info">
          <h2>¿Quiénes somos?</h2>
          <p>
            La Comunidad Estudiantil de Ingeniería Informática es un
            conglomerado de estudiantes, que buscamos promover el desarrollo y
            apreciación al aprendizaje y la información en todos sus ámbitos, a
            través de actividades y eventos en un entorno de inclusión y sana
            convivencia.
          </p>
          <img src="" alt="About us"></img>
        </article>
        <article className="mision">
          <h2>Nuestra misión</h2>
          <p>
            Ser un medio facilitador del conocimiento, y líderes capaces de
            emprender actividades, eventos y proyectos orientados a lograr un
            desarrollo integral de todos los participantes.
          </p>
          <img src="" alt="Mision"></img>
        </article>
        <article className="vision">
          <h2>Nuestra visión</h2>
          <p>
            Forjar una actitud profesional y entregada a la sociedad, con
            principios sólidos y fehacientes en cada miembro de la comunidad, y
            todos sus allegados.
          </p>
          <img src="" alt="Vision"></img>
        </article>
      </section>
    );
  }
}

export default BigHero;