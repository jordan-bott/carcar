import React from 'react'

export default function VehicleModelList(props) {
    return (
        <div className="mt-4">
            <h1>Vehicle Models</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {props.vehicleModels.map((model) => {
                        return (
                            <tr key={model.href}>
                                <td>{model.name}</td>
                                <td>{model.manufacturer.name}</td>
                                <td>
                                    <img src={model.picture_url} style={{ width: "150px" }} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
