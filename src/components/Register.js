import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component{
    render(){
        return(
            <div className="container register">
                <div className="box reg">
                    <div className="pair">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="text" name="email" id="email"/>
                    </div>
                    <div className="pair">
                        <label htmlFor="usrname">Nombre de usuario:</label>
                        <input type="text" name="usrname" id="usrname"/>
                    </div>
                    <div className="pair">
                        <label htmlFor="fullname">Nombre Completo:</label>
                        <input type="text" name="fullname" id="fullname"/>
                    </div>
                    <div className="pair">
                        <label htmlFor="phone">Teléfono:</label>
                        <input type="text" name="phone" id="phone"/>
                    </div>
                    <div className="pair">
                        <label htmlFor="gender">Género:</label>
                        <select name="gender" id="gender">
                            <option value="F">Femenino</option>
                            <option value="M">Másculino</option>
                        </select>
                    </div>
                    <div className="pair">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" name="password" id="password"/> 
                        <p>Debe contener una mayúscula y un número, no puede exceder 15 caracteres</p>
                    </div>
                    <div className="pair">
                        <label htmlFor="cPassword">Confirmar contraseña:</label>
                        <input type="password" name="cPassword" id="cPassword"/>
                    </div>
                    <div className="pair">
                        <button type="submit" name="submit" id="submit">Registrarse</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;