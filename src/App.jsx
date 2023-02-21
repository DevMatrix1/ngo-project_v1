import "./App.css";

import React from "react";
// import Home from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import Maintenance from "./pages/Maintenance/Maintenance";

const App = () => {
  return (
    <>
      {/* <Home /> */}
      <Navbar />
      <Maintenance/>
    </>
  );
};

export default App;
