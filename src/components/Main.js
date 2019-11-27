import React from 'react';
import Welcome from './Welcome';

class Main extends React.Component{
    render(){
        return(
           <Welcome gender="M" usrname="Walter"/>
        );
    }
}

export default Main;