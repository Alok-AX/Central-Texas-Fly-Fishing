import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Featured = () => {
  return (
    <section className="featured">
      <div className="container">
        <h2 style={{ fontSize: '48px' }}>Featured Options</h2>

        {/* Mobile View */}
        <div className="d-lg-none d-md-block d-sm-block d-block">
          <div className="accordion-body-content" style={{ backgroundImage: "url('/assets/images/f-1.png')" }}>
            <h4>Explore Fly Fishing</h4>
            <p>Pron nibh nisi condimentum id venenatis a condimentum vitae sapien.</p>
            <a href="#"> Learn more</a>
          </div>
          <div className="accordion-body-content" style={{ backgroundImage: "url('/assets/images/f-3.png')" }}>
            <h4>Fly Fishing Experiences</h4>
            <p>Elit pellentesque habitant morbi tristique senectus et netus et.</p>
            <a href="#"> Learn more</a>
          </div>
          <div className="accordion-body-content" style={{ backgroundImage: "url('/assets/images/f-3.png')" }}>
            <h4>Gear Up and Catch More</h4>
            <p>In metus vulputate eu scelerisque felis imperdiet.</p>
            <a href="#"> Learn more</a>
          </div>
        </div>

        {/* Desktop View */}
        <div className="d-lg-block d-md-none d-none">
          <div className="accordion" id="featuredAccordion">
            <div className="accordion-item bg-transparent border-0 mb-2">
              <h2 className="accordion-header mb-0">
                <button className="accordion-button border-0 bg-transparent px-0 pt-0 pb-2" 
                  type="button" data-bs-toggle="collapse" 
                  data-bs-target="#optionOne" aria-expanded="true" 
                  aria-controls="optionOne">
                  Explore Fly Fishing
                </button>
              </h2>
              <div id="optionOne" className="accordion-collapse collapse show" data-bs-parent="#featuredAccordion">
                <div className="accordion-body d-flex p-0">
                  <img src="/assets/images/feture-1.png" alt="Fishing" className="img-fluid" />
                  <div className="accordion-body-content">
                    <h4>Explore Fly Fishing</h4>
                    <p>Pron nibh nisi condimentum id venenatis a condimentum vitae sapien.</p>
                    <a href="#"> Learn more</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item bg-transparent border-0 mb-2">
              <h2 className="accordion-header mb-0">
                <button className="accordion-button collapsed border-0 bg-transparent px-0 pt-0 pb-2" 
                  type="button" data-bs-toggle="collapse" 
                  data-bs-target="#optionTwo" aria-expanded="false" 
                  aria-controls="optionTwo">
                  Fly Fishing Experiences
                </button>
              </h2>
              <div id="optionTwo" className="accordion-collapse collapse" data-bs-parent="#featuredAccordion">
                <div className="accordion-body d-flex p-0">
                  <img src="/assets/images/feture-1.png" alt="Fishing" className="img-fluid" />
                  <div className="accordion-body-content">
                    <h4>Fly Fishing Experiences</h4>
                    <p>Pron nibh nisi condimentum id venenatis a condimentum vitae sapien.</p>
                    <a href="#"> Learn more</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item bg-transparent border-0">
              <h2 className="accordion-header mb-0">
                <button className="accordion-button collapsed border-0 bg-transparent px-0 pt-0 pb-2" 
                  type="button" data-bs-toggle="collapse" 
                  data-bs-target="#optionThree" aria-expanded="false" 
                  aria-controls="optionThree">
                  Gear Up and Catch More
                </button>
              </h2>
              <div id="optionThree" className="accordion-collapse collapse" data-bs-parent="#featuredAccordion">
                <div className="accordion-body d-flex p-0">
                  <img src="/assets/images/feture-1.png" alt="Fishing" className="img-fluid" />
                  <div className="accordion-body-content">
                    <h4>Gear Up and Catch More</h4>
                    <p>Pron nibh nisi condimentum id venenatis a condimentum vitae sapien.</p>
                    <a href="#"> Learn more</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Featured;
