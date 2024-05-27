import React from "react";
import { Link } from "react-router-dom";

const About = ({ visits }) => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About Page</p>
      <p>Home page visited {visits} times</p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default About;
