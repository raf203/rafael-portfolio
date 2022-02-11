import React from "react";
import profilePhoto from "../../assets/rafael.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={profilePhoto} className="my-2" alt="photo" />
      <p className="text-center">
        
Ten years of experience as Project Manager, Product Manager and Content Producer in advertising, IT and banking. And now starting the web development boot camp at UC Berkeley.
      </p>
    </section>
  );
}

export default About;