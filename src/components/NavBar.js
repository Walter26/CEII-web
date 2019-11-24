import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/ceii.png'

class NavBar extends React.Component{
    isLoged(){
        if(this.props.isLoged)
            return(
                <Link>Tu perfil</Link>
            );
        else
            return(
                <React.Fragment>
                    <Link>Inicia sesión</Link>
                    <Link>Regístrate</Link>
                </React.Fragment>
            );
    }
    render() {
        return(
            <nav className="navBar">
                <div className="logo-container">
                    <img src={logo}></img>
                    <div className="typo">
                        <h1>CEII</h1>
                        <hr/>
                        <h2>Comunidad Estudiantil de <br/> Ingeniería Informática</h2>
                    </div>
                </div>
                <Link to="/">Inicio</Link>
                <Link to="/committee">Comités</Link>
                <Link to="/news">Noticias</Link>
                <Link to="/contact">Contáctanos</Link>
                {this.isLoged()}
            </nav>
        );
    }
}

export default NavBar;