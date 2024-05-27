import React from "react";
import { Link } from "react-router-dom";

const Contact = ({ visits }) => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Welcome to the Contact Page</p>
      <p>Home page visited {visits} times</p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default Contact;
