import React from 'react';
import Footer from './Footer';

import NavBar from './NavBar';

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