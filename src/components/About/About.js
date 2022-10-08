import React from 'react';
import './about.css';
const About = () => {
  const onExplore = (e) => {
    e.preventDefault();
    const scrollDiv = document.querySelector(`#store`).offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <section className="about" id="about">
        <div className="">
          <h1 className="about-title">
            about <strong className="banner-title">us</strong>
          </h1>
          <p className="about-desc">
          In October 1959 Don Pepe and Don Emilio, two Spanish friends,
together with a team of Peruvian master craftsmen
opened the doors of the Santos Pastry.

          </p>
          <a href="/" onClick={onExplore} className="btn  btn-black">
            explore
          </a>
        </div>
        <div className="align-self-center">
          <div className="about-img__container">
            <img
              src="img/sweets-1.jpeg"
              loading="lazy"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
