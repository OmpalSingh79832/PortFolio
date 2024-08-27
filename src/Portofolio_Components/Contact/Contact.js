import React from "react";
import './Contact.scss'
import Title from "../Title";
import Map from "../Map";
import ContactForm from "./ContactForm";

const Contactme = () => {

  return (
    <>
      <div className="contact-me my-5">
       <div data-aos="fade-right">
       <Title title="Contact Me" subTitle="Lets Keep In Touch !" />
       </div>

        <Map />
        {/* Social Icons */}
      <div className="icons-container my-5">
        <ul>
          <li>
            <a href="https://omgeniustech.com/" target="_blank">
              <i className="fa fa-codepen"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/ompalsingh79832" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/omyadav1234/" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/people/Om-Yadav/pfbid02oECFHBHQ6BJVWCXHyM6sb1pNUfFTcRqoFetAytpE77ZkUaf2qmgYXtX9JHomeWJbl/?mibextid=ZbWKwL" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/om__yadav__19" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>


        {/* Contact Details */}
        <div  className="contact-detail container gap-5">
          <div data-aos="fade-down" className="contact-type">Phone Number: <a style={{color:'#ff9119'}}  href="tel:+919627648487">+91 9627648487</a></div>
          <div data-aos="fade-up" className="contact-type">Address: <span>Basantpur Danda, Sambhal Uttar Pradesh, India</span></div>
          <div data-aos="fade-down" className="contact-type">Email: <a style={{color:'#ff9119'}} href="mailto:ompalsingh79832@gmail.com">ompalsingh79832@gmail.com</a></div>
        </div>
      </div>

      {/* Contact Form */}
        <ContactForm />
    </>
  );
};

export default Contactme;
