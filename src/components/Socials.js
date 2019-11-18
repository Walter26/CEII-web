import React from 'react';
import fb from '../img/fb.png';
import insta from '../img/insta.png';
import slack from '../img/slack.png';

class Socials extends React.Component{
    render() {
        return (
            <div className="container footer">
                <h2><b><i>Nuestras redes</i></b></h2>
                <div className="socials">
                    <div className="fb">
                        <img src={fb} alt="Facebook"></img>
                        <h4>Facebook</h4>
                    </div>
                    <div className="insta">
                        <img src={insta} alt="Instagram"></img>
                        <h4>Instagram</h4>
                    </div>
                    <div className="slack">
                        <img src={slack} alt="Slack"></img>
                        <h4>Slack</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Socials;