import React from "react";
import UserForm from "./UserForm";
import Jokes from "./Jokes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="jokes" element={<Jokes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
