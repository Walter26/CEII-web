import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component{
    render() {
        return(
            <div className="container">
                <form className="box log" onSubmit={this.handleSubmit}>
                    <div className="pair">
                        <label htmlFor="usrname">Usuario</label>
                        <input type="text" name="usrname" id="usrname"/>
                    </div>
                    <div className="pair">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password"/>
                    </div>
                    <div className="credentials">
                        <button type="submit" name="submit" id="submit">Entrar</button>
                        <Link to="/">¿Olvidaste tu contraseña?</Link>
                    </div>
                </form>
            </div>
        );
    }
    handleSubmit(e){
        
    }
}

export default Login;