import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/ceii.png'

class NavBar extends React.Component{
    logedIn(){
        if(this.props.isLoged)
            return(
                <Link to="/main">Tu perfil</Link>
            );
        else
            return(
                <React.Fragment>
                    <Link to="/login">Inicia sesión</Link>
                    <Link to="/register">Regístrate</Link>
                </React.Fragment>
            );
    }
    render() {
        return(
            <nav className="navBar">
                <div className="logo-container">
                    <img src={logo} alt="Logo"></img>
                    <div className="typo">
                        <h1>CEII</h1>
                        <hr/>
                        <h2>Comunidad Estudiantil de <br/> Ingeniería Informática</h2>
                    </div>
                </div>
                <Link to="/">Inicio</Link>
                <Link to="/committee">Comités</Link>
                <Link to="/contact">Contáctanos</Link>
                {this.logedIn()}
            </nav>
        );
    }
}

export default NavBar;