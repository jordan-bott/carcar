import React from 'react';
import useFetch from './useFetch';

export default function VehicleModelList() {
    const { data, isLoading, error } = useFetch('http://localhost:8100/api/models/');
    const vehicleModels = data.models

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
                    {isLoading && <tr><td>Loading...</td></tr>}
                    {error && <tr><td>{error}</td></tr>}
                    {vehicleModels && vehicleModels.map((model) => {
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
