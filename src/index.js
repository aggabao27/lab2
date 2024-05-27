import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [visits, setVisits] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home visits={visits} setVisits={setVisits} />} />
        <Route path="/about" element={<About visits={visits} />} />
        <Route path="/contact" element={<Contact visits={visits} />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
