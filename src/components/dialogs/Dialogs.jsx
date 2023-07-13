import React from "react";
import "./dialogs.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div className="dialogs">
      <div className="dialogs-item">
        <div className="dialog active"><NavLink to="/dialog/1">Dima</NavLink></div>
        <div className="dialog"><NavLink to="/dialog/2">Lena</NavLink></div>
        <div className="dialog"><NavLink to="/dialog/3">Nelson</NavLink></div>
        <div className="dialog"><NavLink to="/dialog/4">Chester</NavLink></div>
      </div>
      <div className="messages">
        <div className="message">Hi!</div>
        <div className="message">How are you?</div>
        <div className="message">Yo</div>
      </div>
    </div>
  );
}

export default Dialogs;
