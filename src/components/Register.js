import React from 'react';

class Register extends React.Component{
    state = {
        user: {
            email: '',
            usrname: '',
            phone: '',
            gender: '',
            fullname: '',
            password: ''
        },
        passState: 'Las contraseñas no coinciden'
    };
    
    render(){
        return(
            <div className="container register">
                <form className="box reg" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <div className="pair selection">
                        <div className="pair">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="text" name="email" id="email" placeholder="example@gmail.com"/>
                        </div>
                        <div className="pair">
                            <label htmlFor="usrname">Nombre de usuario</label>
                            <input type="text" name="usrname" id="usrname" placeholder="jperez"/>
                        </div>
                    </div>
                    <div className="pair">
                        <label htmlFor="fullname">Nombre Completo</label>
                        <input type="text" name="fullname" id="fullname" placeholder="Benito Juán Pérez Castro"/>
                    </div>
                    <div className="pair selection">
                        <div className="pair">
                            <label htmlFor="phone">Teléfono</label>
                            <input type="text" name="phone" id="phone" placeholder="22577777"/>
                        </div>
                        <div className="pair">
                            <label htmlFor="gender">Género</label>
                            <select name="gender" id="gender">
                                <option value="F">Femenino</option>
                                <option value="M">Másculino</option>
                            </select>
                        </div>
                    </div>
                    <div className="pair">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password"/> 
                        <p>Debe contener una mayúscula y un número, no puede exceder 15 caracteres</p>
                    </div>
                    <div className="pair">
                        <label htmlFor="cPassword">Confirmar contraseña</label>
                        <input type="password" name="cPassword" id="cPassword"/>
                        <p id="pass_error" className="pass_error">{this.state.passState}</p>
                    </div>
                    <button type="submit" name="submit" id="submit" className="reg button" disabled>Registrarse</button>
                </form>
            </div>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = this.state.user;

        if(!data.usrname || !data.email || !data.phone || !data.fullname || !data.pass)
            return alert('No pueden haber campos vacios');

        return fetch('http://localhost:3500/user', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            if(res.status === 200){
                let newUser = {
                    isLoged: true,
                    user: data
                }
                this.props.handleUpdate(newUser);
                this.props.history.push("/main");
            }
        }).catch(err => err);
    }

    handleChange = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value,
            }
        })
        let pass = document.getElementById("password");
        let passConfirm = document.getElementById("cPassword");
        let passError = document.getElementById("pass_error");
        let enableBtn = document.getElementById("submit");

        if(!pass.value)
            passError.style.opacity = 0;
        else if(pass.value !== passConfirm.value)
            passError.style.opacity = 1;
        else if(pass.value === passConfirm.value && pass.value !== ''){
            this.setState({
                passState: "Las contraseñas coinciden"
            })
            passError.style.color = "green";
            enableBtn.disabled = false;
        }
    }
}

export default Register;