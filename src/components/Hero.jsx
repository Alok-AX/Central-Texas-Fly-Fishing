import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-md-start">
            <h1>Central Texas <br /> Fly Fishing</h1>
            <p>At lacus vitae nulla sagittis scelerisque nisl. Pellentesque quis dui cursus vestibulum, facilisi ac, sed faucibus.</p>
            <button className="btn btn-dark">Get Started</button>
          </div>
          <div className="col-lg-5">
            <div className="hero_img">
              <img src="/assets/images/hero.png" alt="Fishing Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
