import React from 'react';

import NavBar from './NavBar';
import Footer from './Footer';

var Layout = (props) => {
    return(
        <React.Fragment>
            <NavBar isLoged={false}/>
            {props.children}
            <Footer/>            
        </React.Fragment>
    )
}

export default Layout;