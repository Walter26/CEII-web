import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component{
    state = {
        user: {
            usrname: '',
            password: ''
        }
    }
    render() {
        return(
            <div className="container">
                <form className="box log" onSubmit={this.handleSubmit.bind(this)} onChange = {this.handleChange}>
                    <div className="pair">
                        <label htmlFor="usrname">Usuario</label>
                        <input type="text" name="usrname" id="usrname"/>
                    </div>
                    <div className="pair">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password"/>
                    </div>
                    <div className="credentials">
                        <p id="errorID" className="errorID">Usuario o contraseña incorrectos</p>
                        <button type="submit" name="submit" id="submit">Entrar</button>
                        <Link to="/">¿Olvidaste tu contraseña?</Link>
                    </div>
                </form>
            </div>
        );
    }
    handleChange = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value,
            }
        })
    }

    async handleSubmit(e){
        e.preventDefault();
        let data = this.state.user;
        let url = 'http://ceiiapi.herokuapp.com/user/' + data.usrname;
        let response = await fetch(url,{
            method: 'GET',  
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const getData = await response.json();
        
        var change = document.getElementById('errorID');

        if(getData.data.password !== data.password){
            change.style.opacity = 1;

            setTimeout(function(){ 
                change.style.opacity = 0;
            }, 4000);
        }
        else{
            const dataToParent = {
                userData: getData.data,
                isLoged: true
            }
            this.props.handleUpdate(dataToParent);
            this.props.history.push("/main");
        }
    }
}

export default Login;