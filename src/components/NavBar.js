import React from 'react';

class NavBar extends React.Component{
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><a>Inicio</a></li>
                        <li><a>¿Quiénes somos?</a></li>
                        <li><a>Nuestra misión</a></li>
                        <li><a>Nuestra visión</a></li>
                        <li><a>Contáctanos</a></li>
                    </ul>
                    <a>Inicia sesión</a>
                    <a>Regístrate</a>
                </nav>
            </div>
        );
    }
}

export default NavBar;