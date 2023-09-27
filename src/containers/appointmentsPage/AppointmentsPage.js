import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appts, contacts, addAppt }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [meeting, setMeeting] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppt(meeting, contact, date, time);
    setMeeting("");
    setDate("");
    setTime("");
    setContact("");
    document.getElementById("participant").value = "";
    /*
    Add contact info and clear data  
    */
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          meeting={meeting}
          contacts={contacts}
          date={date}
          time={time}
          setMeeting={setMeeting}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>

        <TileList array={appts} />
      </section>
    </div>
  );
};
