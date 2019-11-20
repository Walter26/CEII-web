import React from 'react';
import logo from '../../img/Logo_flat.png';
import css_navbar from '../../styles/css_navbar.css';

class Header extends React.Component{
    render() {
        return (
            <div className="container header">
                <nav className="navbar navbar-expand">
                    <div className="banner">                    
                        <h1>Comunidad Estudiantil de <br/> Ingeniería Informática</h1>
                        <img className="banner img" src={logo} alt="Logo CEII"></img>
                    </div>
                    <div className="buttons">
                        <a href="" className="nav-anchor">Acerca de</a>
                        <a href="" className="nav-anchor">Noticias</a>
                        <a href="" className="nav-anchor">Contáctanos</a>
                        <a href="" className="nav-anchor">Inicia sesión</a>
                        <a href="" className="nav-anchor">Regístrate</a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;