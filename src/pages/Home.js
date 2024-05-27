import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ visits, setVisits }) => {
  useEffect(() => {
    setVisits(visits + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>B00868994</p>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Home;
