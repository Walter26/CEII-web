import React from 'react';

class Contact extends React.Component{
    render() {
        return (
            <form className="contact-us">
                <h2>Contáctanos</h2>
                <div className="container">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="ctc-name" placeholder="Juan Pérez"></input>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="ctc-email" placeholder="example@gmail.com"></input>
                    <label htmlFor="mssge">Déjanos tu mensaje</label>
                    <textarea></textarea>
                </div>
            </form>
        );
    }
}

export default Contact;