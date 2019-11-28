import React from 'react';

class Activity extends React.Component{
    state = {
        data: []
    }
    render(){
        this.renderActivities();
        return(
            <table className="table-act">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Descripcion</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {
                        this.state.data.map((item, i) => {
                            return (
                                <tr>
                                    <td>{item.actname}</td>
                                    <td>{item.acttype}</td>
                                    <td>{item.actdesc}</td>
                                    <td>{item.actdate}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
    async renderActivities(){
        let url = 'https://ceiiapi.herokuapp.com/activity';
        let response = await fetch(url,{
            method: 'GET',  
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const getData = await response.json();
        this.setState({
            data: getData.data
        })
    }
}

export default Activity;