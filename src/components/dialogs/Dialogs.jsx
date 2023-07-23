import React from "react";
import "./dialogs.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className="dialog">
      <NavLink to={"/dialogs/" + props.id} activeClassName="active">
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className="message">{props.message}</div>;
};

const Dialogs = ({ dialogsData, messagesData }) => {
  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messagesData.map((message) => (
    <Message key={message.id} message={message.message} />
  ));


let newMessageElement = React.createRef();
let addMessage = () => {
  alert(newMessageElement.current.value)

}

  return (
    <div className="dialogs">
      <div className="dialogs-item">{dialogsElements}</div>
      <div className="messages">
        {messagesElements}
        <div className="add-message">
          <textarea ref={newMessageElement}></textarea>
          <button onClick={addMessage}>Add post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
