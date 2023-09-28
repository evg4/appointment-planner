import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) => {
            let name = e.target.value;
            setName(name);
          }}
          required
          name="name"
          type="text"
          id="name"
          value={name}
          placeholder="Full name"
        ></input>
        <label htmlFor="phone">Phone:</label>
        <input
          onChange={(e) => {
            let phone = e.target.value;
            setPhone(phone);
          }}
          required
          name="phone"
          type="text"
          id="phone"
          value={phone}
          pattern="[0-9]{11}"
          placeholder="Must be 11 digits"
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          onChange={(e) => {
            let email = e.target.value;
            setEmail(email);
          }}
          required
          name="email"
          type="email"
          id="email"
          value={email}
          placeholder="example@email.com"
        ></input>
        <input value="Submit" type="submit"></input>
      </form>
    </>
  );
};
