import React from 'react';
import { Link }from 'react-router-dom';

import man from '../img/man.png';
import woman from '../img/woman.png';

class Welcome extends React.Component{
    render(){
        console.log(this.props.usrSend)
        return(
            <div className="container main">
                <div className="welcome">
                    <img src={this.genderRendering()} alt="Avatar"/>
                    <h1>{this.nameRendering()}</h1>
                </div>
                <div className="side-bar">
                    <Link>Ver actividades</Link>
                    <Link>Inscripciones</Link>
                    <Link>Modificar inscripción</Link>
                    <Link>Administrar miembros</Link>
                    <Link>Salir</Link>
                </div>
            </div>
        );
    }
    genderRendering(){
        if(this.props.usrSend.userData.gender === 'F')
            return woman;
        else
            return man;
    }
    nameRendering(){
        if(this.props.usrSend.userData.gender === 'F')
            return "Bienvenida " + this.props.usrSend.userData.usrname;
        else
            return "Bienvenido " + this.props.usrSend.userData.usrname;
    }
}

export default Welcome;