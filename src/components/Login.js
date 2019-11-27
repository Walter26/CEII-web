import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component{
    render() {
        return(
            <div className="container">
                <div className="box log">
                    <div className="pair">
                    <label htmlFor="usrname">Usuario:</label>
                    <input type="text" name="usrname" id="usrname"/>
                    </div>
                    <div className="pair">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" id="password"/>
                    </div>
                    <div className="credentials">
                        <Link>Entrar</Link> <br></br>
                        <Link>¿Olvidaste tu contraseña?</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;