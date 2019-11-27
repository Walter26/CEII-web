import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Committee from './Committee';
import Layout from './Layout';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';

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

var App = () => {
    var state = {
        logedIn: false,
        user: {
            email: '',
            usrname: '',
            phone: '',
            gender: '',
            fullname: '',
            password: ''
        }
    }
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/committee" 
                        render = {(props) =>
                        <Committee {...props} comName={sendProps.comName} comDesc={sendProps.comDesc}/>
                    }>
                    </Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/login" 
                        render = {(props) => 
                        <Login {...props}/>}
                    />
                    <Route exact path="/register" component={Register}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;