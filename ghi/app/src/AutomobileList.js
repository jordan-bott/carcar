import React from "react";

function AutomobileList(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">Year</th>
                    <th scope="col">Color</th>
                    <th scope="col">Make</th>
                    <th scope="col">Model</th>
                    <th scope="col">VIN</th>
                </tr>
            </thead>
            <tbody>
                {props.automobiles.map(auto => {
                    return (
                        <tr key={auto.href}>
                            <td className="w-25"><img src={auto.model.picture_url} className="img-thumbnail img"></img></td>
                            <td>{auto.year}</td>
                            <td>{auto.color}</td>
                            <td>{auto.model.manufacturer.name}</td>
                            <td>{auto.model.name}</td>
                            <td>{auto.vin}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default AutomobileList;
