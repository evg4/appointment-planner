import { React, useState } from "react";
import ContactPicker from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  meeting,
  setMeeting,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const [selected, setSelected] = useState(false);
  function resetDropdown() {
    setSelected(true);
  }

  function onChange(e) {
    let contact = e.target.value;
    setContact(contact);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="meeting">Meeting</label>
        <input
          onChange={(e) => {
            let meeting = e.target.value;
            setMeeting(meeting);
          }}
          required
          name="meeting"
          type="text"
          id="meeting"
          value={meeting}
          placeholder="Name of meeting"
        ></input>
        <label htmlFor="date">Date of meeting</label>
        <input
          onChange={(e) => {
            let date = e.target.value;
            setDate(date);
          }}
          min={getTodayString()}
          required
          name="date"
          type="date"
          id="date"
          value={date}
        ></input>
        <label htmlFor="time">Time of meeting</label>
        <input
          onChange={(e) => {
            let time = e.target.value;
            setTime(time);
          }}
          required
          name="time"
          type="time"
          id="time"
          value={time}
        ></input>
        <label htmlFor="participant">Participant</label>
        <ContactPicker
          id="participant"
          value={contact}
          onChange={onChange}
          array={contacts}
        />
        <input value="Submit" type="submit"></input>
      </form>
    </>
  );
};
