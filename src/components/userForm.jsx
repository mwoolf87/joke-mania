import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUserData } from "../actions/userData-actions";

const UserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendUserData = e => {
    e.preventDefault();
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber
    };
    saveUserData(dispatch, userData);
    navigate("/jokes");
  };

  return (
    <div>
      <form onSubmit={e => sendUserData(e)}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="John"
          name="firstName"
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="Smith"
          name="lastName"
          onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="johnsmith@gmail.com"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="name">Phone Number</label>
        <input
          type="text"
          placeholder="(000)-000-0000"
          name="phone"
          onChange={e => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Next Step</button>
      </form>
    </div>
  );
};

export default UserForm;
