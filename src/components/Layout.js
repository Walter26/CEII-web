import React from 'react';
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import Committee from './Committee';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import Main from './Main';

let sendProps = {
    comName: ["Académico Social", "Marketing", "Regulador", "Relaciones públicas", "Técnico"],
    comDesc: [
        "Se encargan de la organización de todos los eventos a realizar",
        "Dirigen las redes sociales, manejan todos los asuntos promocionales y publicitarios",
        "Coordinan y rigen las relaciones entre comités en la comunidad, velan por un ambiente de sana convivencia",
        "Buscan relaciones con empresas, patrocinios y charlas de ámbito profesional",
        "Manejan todos los recursos informatizados de la comunidad, además de dar soporte especializado"
    ]
}

class Layout extends React.Component {
    state = {
        userData: {
            isLoged: false,
            user: {}
        }
    }
    constructor(props) {
        super(props);
    }
    handleUpdate = (newUser) => {
        this.setState({
            userData: newUser
        })
    }
    render() {
        return(
            <React.Fragment>
                <NavBar isLoged={this.state.userData.isLoged}/>
                    <Switch>
                        <Route exact path="/committee" 
                            render = {(props) =>
                            <Committee {...props} comName={sendProps.comName} comDesc={sendProps.comDesc}/>
                        }>
                        </Route>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/login" 
                            render = {(props) => 
                            <Login {...props} handleUpdate={this.handleUpdate}/>}
                        />
                        <Route exact path="/register" 
                            render = {(props) => 
                            <Register {...props} handleUpdate={this.handleUpdate}/>}
                        />
                        <Route exact path="/contact" component={Contact}/>
                        <Route exat path="/main"
                            render = {(props) =>
                            <Main {...props} usr={this.state.userData}/>} 
                        />
                    </Switch>
                <Footer/>            
            </React.Fragment>
        )
    }
}

export default Layout;