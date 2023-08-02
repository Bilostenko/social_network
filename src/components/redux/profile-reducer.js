
const profileReducer = (state, action) =>{
  if (action.type === "ADD-POST") {
    let newPost = {
      id: state.postsData.length + 1,
      post: action.message,
      like: 0
    };
    state.postsData.push(newPost);
  }

  return state

}

export default profileReducer