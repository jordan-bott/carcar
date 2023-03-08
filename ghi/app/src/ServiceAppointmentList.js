import React, { useEffect, useState } from "react";


function ListServiceAppointments() {

    const [services, setAppointments] = useState([]);
    const [status, setStatus] = useState(0);

    const fetchAppointmentList = async () => {

        const listUrl = "http://localhost:8080/api/services/upcoming/"
        const fetchList = await fetch(listUrl)

        if (fetchList.ok) {
            const appointmentData = await fetchList.json()
            setAppointments(appointmentData.services)
        }
    }

    useEffect(() => {
        fetchAppointmentList();
    }, [status]);

    const handleAppointmentCancel = async (appointment, event) => {


        const cancelUrl = `http://localhost:8080/api/services/${appointment}/cancel/`


        const response = await fetch(cancelUrl, { method: "PUT"})


        if (response.ok) {
            setStatus(status+1)
            console.log(status)

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
                    {services.map(appointment => {
                    return (
                        <tr key={appointment.id}>
                            { appointment.vip_treatment ? <td>{image}</td> : <td></td>}
                            <td>{ appointment.vin }</td>
                            <td>{ appointment.auto_owner }</td>
                            <td>{ appointment.appointment_date }</td>
                            <td>{ appointment.appointment_time }</td>
                            <td>{ appointment.technician.name }</td>
                            <td>{ appointment.service_reason }</td>
                            <td><button onClick={() => handleAppointmentCancel(appointment.id)}>CANCEL</button></td>
                            <td></td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        );
}
export default ListServiceAppointments;
