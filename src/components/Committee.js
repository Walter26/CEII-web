import React from 'react';
import marketing from '../img/mar.png';
import technician from '../img/tec.png';
import academic from '../img/as.png';
import regulator from '../img/reg.png';
import relations from '../img/rp.png';


class Committee extends React.Component{
    render() {
        return(
            <div className="container committee">
                <div className="box b1">
                    <div className="content">
                        <img src={academic} alt="" className="committee-icon"/>
                        <h3>{this.props.comName[0]}</h3>
                        <p>{this.props.comDesc[0]}</p>
                    </div>
                </div>
                <div className="box b2">
                    <div className="content">
                        <img src={marketing} alt="" className="committee-icon"/>
                        <h3>{this.props.comName[1]}</h3>
                        <p>{this.props.comDesc[1]}</p>
                    </div>
                </div>
                <div className="box b3">
                    <div className="content">
                        <img src={regulator} alt="" className="committee-icon"/>
                        <h3>{this.props.comName[2]}</h3>
                        <p>{this.props.comDesc[2]}</p>
                    </div>
                </div>
                <div className="box b4">
                    <div className="content">
                        <img src={relations} alt="" className="committee-icon"/>
                        <h3>{this.props.comName[3]}</h3>
                        <p>{this.props.comDesc[3]}</p>
                    </div>
                </div>
                <div className="box b5">
                    <div className="content">
                        <img src={technician} alt="" className="committee-icon"/>
                        <h3>{this.props.comName[4]}</h3>
                        <p>{this.props.comDesc[4]}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Committee;