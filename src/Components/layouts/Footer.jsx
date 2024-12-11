import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="section-p1">
        <div className="col">
          <img src="img/logo.png" alt="" />
          <h4>Contact</h4>
          <p>
            {" "}
            <strong>Address: </strong> 123 Wellington Road.00 San Andries Ropar
          </p>
          <p>
            {" "}
            <strong>Phone:</strong> +91487954875
          </p>
          <p>
            {" "}
            <strong>Hours:</strong> 12:00 - 19:00 Mon-Fri
          </p>
          <h4 className="follow">Follow Us</h4>
          <div className="icon">
            <a style={{ color: "black", paddingRight: 11 }} href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a style={{ color: "black", paddingRight: 11 }} href="#">
              <i className="fab fa-twitter" />
            </a>
            <a style={{ color: "black", paddingRight: 11 }} href="#">
              <i className="fab fa-instagram" />
            </a>
            <a style={{ color: "black", paddingRight: 11 }} href="#">
              <i className="fab fa-youtube" />
            </a>
            <a style={{ color: "black", paddingRight: 11 }} href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Informations</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Term &amp; Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">view Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store Or google Play</p>
          <div className="row">
            <img src="img/pay/app.jpg" alt="" />
            <img src="img/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payment gateways</p>
          <img src="img/pay/pay.png" alt="" />
        </div>
      </footer>
      <div className="copyright">
        <p>Copyright © 2024 Parm. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
