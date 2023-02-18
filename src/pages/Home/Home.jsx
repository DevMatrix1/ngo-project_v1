import React from "react";
import { Gallery } from "../../components/Gallery/Gallery";
import MailForm from "../../components/MailForm/MailForm";
import { Navbar } from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Gallery/>
      <MailForm />
    </div>
  );
};

export default Home;
