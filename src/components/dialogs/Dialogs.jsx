import React, { useRef } from "react";
import "./dialogs.css";
import { NavLink } from "react-router-dom";
// import { updateMessages } from '../redux/state';

const DialogItem = ({ id, name }) => {
  return (
    <div className="dialog">
      <NavLink to={"/dialogs/" + id} activeClassName="active">
        {name}
      </NavLink>
    </div>
  );
};

const Message = ({ message }) => {
  return <div className="message">{message}</div>;
};

const Dialogs = ({ dialogsData, messagesData, dispatch }) => {
 
  const dialogsElements = dialogsData.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));

  const messagesElements = messagesData.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  let newMessageElement = React.createRef()
  let handleMessage = () => {
    let message = newMessageElement.current.value
    let action = {type: "ADD-MESSAGE", message : message}
    dispatch(action)
    newMessageElement.current.value = ''
  }

  return (
    <div className="dialogs">
      <div className="dialogs-item">{dialogsElements}</div>
      <div className="messages">
        {messagesElements}
        <div className="add-message">
          <textarea ref={newMessageElement}></textarea>
          <button onClick={handleMessage}>Add post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
