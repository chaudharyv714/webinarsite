import '../App.css';
import React, { useState } from 'react';


function Navbar() {

  const [flag, updateflag] = useState("listcontainer off");

  var callupdateflag = () => {
    updateflag((prevflag) =>{ 
    if(prevflag=="listcontainer on")
      return "listcontainer off";
      return "listcontainer on";
    });
  };


  return (
    <div className="nav">
      <button onClick={callupdateflag} className="menu">
        <i className="fas fa-bars"></i><span>Chemical</span>
      </button>
      <div className={flag}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#topics">Topics</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#committee">Committee</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;