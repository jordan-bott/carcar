import React, { useEffect, useState } from "react";

function AddAutoForm() {

    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [model_id, setModelId] = useState('')
    const [models, setModels] = useState([]);

    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleModelIdChange = (event) => {
        const value = event.target.value;
        setModelId(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {}

        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = model_id;

        const autoUrl = "http://localhost:8100/api/automobiles/";

        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const response = await fetch(autoUrl, fetchConfig);

        if (response.ok) {
            const addAuto = await response.json();

            setColor('');
            setYear('');
            setVin('');
            setModelId('');
        }
    }

    const fetchData = async () => {

        const modelUrl = "http://localhost:8100/api/models/"

        const response = await fetch(modelUrl);

        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
        }

    }


    useEffect(() => {
        fetchData();
    }, []);

    return (
    <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add an Automobile to the Database</h1>
                <form onSubmit={handleSubmit} id="add-auto-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleColorChange} value={color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                        <label htmlFor="color">Color</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleYearChange} value={year} placeholder="Year" required type="text" name="year" id="year" className="form-control" />
                        <label htmlFor="year">Year</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleVinChange} value={vin} placeholder="VIN" type="vin" name="vin" id="vin" className="form-control" />
                        <label htmlFor="vin">VIN</label>
                    </div>
                    <div className="mb-3">
                        <select onChange={handleModelIdChange} value={model_id} required name="model_id" id="model_id" className="form-select">
                            <option value="">Choose a Make and Model</option>
                            {models.map(model => {
                                return (
                                    <option key={model.id} value={model.id}>
                                        {model.manufacturer.name} {model.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <button className="btn btn-primary">Add Automobile</button>
                </form>
            </div>
        </div>
    </div>
)

}
export default AddAutoForm;
