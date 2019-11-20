import React from 'react';
import fb from '../../img/fb.png';
import insta from '../../img/insta.png';
import slack from '../../img/slack.png';

class Socials extends React.Component{
    render() {
        return (
            <div className="container footer">
                <h2><b><i>Nuestras redes</i></b></h2>
                <div className="socials">
                    <div className="fb">
                        <img src={fb} alt="Facebook"></img>
                        <a href="https://www.facebook.com/CEII.UCA/"><i>Facebook</i></a>
                    </div>
                    <div className="insta">
                        <img src={insta} alt="Instagram"></img>
                        <a href="https://www.instagram.com/ceii.uca/?hl=es"><i>Instagram</i></a>
                    </div>
                    <div className="slack">
                        <img src={slack} alt="Slack"></img>
                        <a href="https://join.slack.com/t/ceiiuca/shared_invite/enQtODMxNzgwOTA4NDgxLWZjMWRiZWZhNTYzOTViNDQ2ZTM0ZWNlZDU2NDJlMTVjOTI1MjM2MGYzYzY4ODZhNjY0MjgyMWQ3NDdkNThiMmY"><i>Slack</i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Socials;