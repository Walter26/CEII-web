import React from 'react';
import Welcome from './Welcome';

class Main extends React.Component{
    render(){
        return(
           <Welcome usr={this.props.usr.userData}/>
        );
    }
}

export default Main;