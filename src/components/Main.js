import React from 'react';
import Welcome from './Welcome';

class Main extends React.Component{
    render(){
        return(
           <Welcome gender={this.props.genderRender} name={this.props.usrname}/>
        );
    }
}

export default Main;