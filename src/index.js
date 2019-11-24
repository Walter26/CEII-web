import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import css from './styles/styles.css';
import Committee from './components/Committee';

let props = {
    comName: ["Académico Social", "Marketing", "Regulador", "Relaciones públicas", "Técnico"],
    comDesc: [
        "Se encargan de la organización de todos los eventos a realizar",
        "Dirigen las redes sociales, manejan todos los asuntos promocionales y publicitarios",
        "Coordinan y rigen las relaciones entre comités en la comunidad, velan por un ambiente de sana convivencia",
        "Buscan relaciones con empresas, patrocinios y charlas de ámbito profesional",
        "Manejan todos los recursos informatizados de la comunidad, además de dar soporte especializado"
    ]
}

ReactDOM.render(<Committee comName={props.comName} comDesc={props.comDesc}/>, document.getElementById('root'));