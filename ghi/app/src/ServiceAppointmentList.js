import React, { useEffect, useState } from "react";


function ListServiceAppointments(props) {

    const [updatedAppointments, setAppointments] = useState(props.appointments)


    const handleAppointmentCancel = async (appointment, event) => {


        const cancelUrl = `http://localhost:8080/api/services/${appointment}/cancel/`


        const response = await fetch(cancelUrl, {method: "PUT"})

        if (response.ok) {
            const cancelAppointment = await response.json()


            console.log(updatedAppointments)
        }


        const fetchUpdatedAppointments = async () => {
            const newDataResponse = await fetch('http://localhost:8080/api/services/upcoming/')

            if (newDataResponse.ok) {
                const newData = await newDataResponse.json()
                setAppointments(newData.appointments)
            }
        }
    }




    const image = <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/35/null/external-vip-reputation-bearicons-outline-color-bearicons.png"/>


        return (
            <table className="table align-middle">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">VIN</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Technician</th>
                        <th scope="col">Service Reason</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {updatedAppointments.map(appointment => {
                    return (
                        <tr key={appointment.id}>
                            { appointment.vip_treatment ? <td>{image}</td> : <td></td>}
                            <td>{ appointment.vin }</td>
                            <td>{ appointment.auto_owner }</td>
                            <td>{ appointment.appointment_date }</td>
                            <td>{ appointment.appointment_time }</td>
                            <td>{ appointment.technician.name }</td>
                            <td>{ appointment.service_reason }</td>
                            <td><button on={() => handleAppointmentCancel(appointment.id)}>CANCEL</button></td>
                            <td></td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        );
}
export default ListServiceAppointments;
