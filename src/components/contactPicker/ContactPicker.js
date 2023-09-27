import React from "react";

const ContactPicker = (props) => {
  return (
    <>
      <select
        onChange={props.onChange}
        id={props.id}
        required
        name={props.name}
        value={props.value}
      >
        <option value="">No contact selected</option>
        {props.array.map((contact) => {
          return (
            <option key={contact.name} value={contact.name}>
              {contact.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default ContactPicker;

//contacts is an array of objects

//props = array={contacts}
