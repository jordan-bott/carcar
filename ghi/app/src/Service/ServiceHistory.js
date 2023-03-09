import React, { useEffect, useState } from "react";


function ListServiceHistory() {

    const [appointments, setAppointments] = useState([])
    const [vin, setVin] = useState('')

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const fetchAppointmentList = async () => {


        const listUrl = `http://localhost:8080/api/services/${vin}/`
        console.log(listUrl)
        const fetchList = await fetch(listUrl)

        if (fetchList.ok) {
            const appointmentData = await fetchList.json()
            console.log(appointmentData)
            setAppointments(appointmentData.services)

        }
    }
    console.log(appointments)




    return (
        <>
            <input type="text" id="vininput" name="vininput" maxLength="17" onChange={handleVinChange} value={vin}></input><button onClick={fetchAppointmentList}>Search VIN</button>
            <table className="table align-middle">
                <thead>
                    <tr>
                        <th scope="col">VIN</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Technician</th>
                        <th scope="col">Service Reason</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {appointments && appointments.map(appointment => {
                        return (
                            <tr className={appointment.status === "CANCELED" ? "bg-danger-subtle" : appointment.status === "FINISHED" ? "bg-success-subtle" : null} key={appointment.id}>
                                <td>{appointment.vin}</td>
                                <td>{appointment.auto_owner}</td>
                                <td>{appointment.appointment_date}</td>
                                <td>{appointment.appointment_time}</td>
                                <td>{appointment.technician.name}</td>
                                <td>{appointment.service_reason}</td>
                                <td>{appointment.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
export default ListServiceHistory;
