import React from 'react';
import Welcome from './Welcome';

class Main extends React.Component{
    render(){
        return(
           <Welcome usrSend={this.props.usr}/>
        );
    }
}

export default Main;