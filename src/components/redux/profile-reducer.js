const profileReducer = (state, action) =>{
  if (action.type === "ADD-POST") {
    let newPost = {
      id: state.profilePage.postsData.length + 1,
      post: postMessage,
      like: 0
    };
    state.profilePage.postsData.push(newPost);
    this.rerenderEntireTree(state);
  }

  return state

}

export default profileReducer