import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      <div className="container contactUs">
        <div className="row">
          <div className="col-lg-5">
            <h2>Contact Us </h2>
            <div className="mb-4">
              <h3>Dhaka Restaurant</h3>
              <h4>32-40 Welingto Street,</h4>
              <h4>Central,Dhaka</h4>
            </div>
            <div className="mb-4">
              <h3>Opening Hours</h3>
              <h4>11:00am - 11:30pm</h4>
            </div>
            <div>
              <h3>Takeaway Hotline</h3>
              <h4>(852) 2523 - 3652</h4>
            </div>
          </div>
          <div className="col-lg-7">
            <form>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  placeholder="Name"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                  placeholder="Write your massage..."
                ></textarea>
              </div>

              <button type="submit" class="btn btnprimary w-100 fs-5">
                Send!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
