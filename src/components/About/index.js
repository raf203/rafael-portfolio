import React from "react";
import profilePhoto from "../../assets/rafael.jpg";

function About() {
  return (
    <section className="general">
      <h1 id="about" className="about">About me</h1>
      <div className = "container-about">
      <img src={profilePhoto} className="my-2" alt="photo" />
      <p className="bio">
        
Ten years of experience as Project Manager, Product Manager and Content Producer in advertising, IT and banking. And now starting the web development boot camp at UC Berkeley.
      </p>
      </div>
    </section>
  );
}

export default About;