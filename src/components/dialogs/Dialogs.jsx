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

let dialogsData = [
  {id: 1, name: "Dima"},
  {id: 2, name: "Lena"},
  {id: 3, name: "Nelson"},
  {id: 4, name: "Chester"},
]

let messagesData = [
  {id: 1, message: "Hi"},
  {id: 2, message: "Yo"},
  {id: 3, message: "How are you?"},
  {id: 4, message: "Call me!"},
]

let dialogsElements = dialogsData.map(dialog=> <DialogItem name= {dialog.name} id={dialog.id} />)
let messagesElements = messagesData.map(message => <Message message={message.message} />)

const Dialogs = (props) => {
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
