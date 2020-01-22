import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/resume/contactpic2.jpg"

export default function() {
  return (
      <div className= "content-page-wrapper">
      <div className= "left-column"
      style={{
        background: "url(" + contactPagePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      />
      <div className="right-column">
      <div className="contact"> This is my contact INFO!!!!  < FontAwesomeIcon icon="id-card" /></div>
      <div className="phone"> 785-477-0984 < FontAwesomeIcon icon="mobile-alt" /></div> 
      <h2>address goes here </h2>
      <h2> github here </h2>
      <h2>email goes here</h2> 

      </div>
      </div>
      
  )
}


//https://nspirelabs.devcamp.com/full-stack-development-javascript-python/guide/2499