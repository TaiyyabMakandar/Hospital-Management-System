import React from "react";
import Hero from "../components/Hero.js";
import AppointmentForm from "../components/AppointmentForm.js";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | ZeeCare Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
