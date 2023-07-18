import React from "react";
import "./dialogs.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className="dialog active">
      <NavLink to={"/dialogs/1" + props.id}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className="message">{props.message}</div>
  )
}


const Dialogs = ({ dialogsData, messagesData}) => {

  let messagesElements = messagesData.map(message => <Message message={message.message} />)
  let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

  return (
    <div className="dialogs">
      <div className="dialogs-item">
        {dialogsElements}
      </div>
      <div className="messages">
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;
