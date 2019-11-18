import React from 'react';
import logo from '../img/Logo_flat.png';
import css_navbar from '../styles/css_navbar.css';

class Header extends React.Component{
    render() {
        return (
            <div className="container header">
                <nav className="navbar navbar-expand">
                    <div className="banner">                    
                        <img className="banner img" src={logo} alt="Logo CEII"></img>
                        <h1>Comunidad Estudiantil de <br/> Ingeniería Informática</h1>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-primary">Inicio</button>
                        <button className="btn btn-primary">Acerca de</button>
                        <button className="btn btn-primary">Noticias</button>
                        <button className="btn btn-primary">Contáctanos</button>
                        <button className="btn btn-primary">Inicia sesión</button>
                        <button className="btn btn-primary">Regístrate</button>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;