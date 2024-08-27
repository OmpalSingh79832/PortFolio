import React, { useState, useEffect } from "react";


const Map = () => {
  const Marker = () => (
    <>
      <div className="pin"></div>
      <div className="pulse"></div>
    </>
  );

  return (
    <div className="md my-5" >
      <div className="responsive-map">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.675460787455!2d77.37625864099797!3d28.62470064588044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff135b3084b%3A0x19ccb4e95c69306d!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1724661902901!5m2!1sen!2sin" width="600" height="450"  allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Map;
