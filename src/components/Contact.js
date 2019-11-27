import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <div className="container">
                <form className="box contact">
                    <div className="pair">
                        <label htmlFor="name">Nombre</label>
                        <input type="text"/>
                    </div>
                    <div className="pair">
                        <label htmlFor="name">Empresa o institución</label>
                        <input type="text"/>
                    </div>
                    <div className="pair">
                        <label htmlFor="name">Mensaje</label>
                        <textarea name="message" id="message" cols="20" rows="5"></textarea>
                    </div>
                    <button type="submit" name="submit" id="submitContact">Enviar</button>
                </form>
            </div> 
        )
    }
}

export default Contact;