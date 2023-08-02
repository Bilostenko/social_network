const messageReducer = (state, action) => {
  if (action.type === "ADD-MESSAGE") {
    let newMessage = {
      id: state.messagesData.length + 1,
      message: action.message
    };
    state.messagesData.push(newMessage);
  } 

  return state
}

export default messageReducer 