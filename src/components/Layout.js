import React from 'react';

import NavBar from './NavBar';

var Layout = (props) => {
    return(
        <React.Fragment>
            <NavBar isLoged={true}/>
            {props.children}
        </React.Fragment>
    )
}

export default Layout;