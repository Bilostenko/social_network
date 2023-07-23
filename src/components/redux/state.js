
let state = {
  profilePage: {

    postsData: [
      { id: 1, post: "Hi, how are you?", like: 10 },
      { id: 2, post: "It's my first message", like: 15 },
    ]
  },
  messagesPage: {

    dialogsData: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Lena" },
      { id: 3, name: "Nelson" },
      { id: 4, name: "Chester" },
    ],
    messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Yo" },
      { id: 3, message: "How are you?" },
      { id: 4, message: "Call me!" },
    ]
  },
  friends: {
    friendsData: [
      { id: 1, name: "Віра" },
      { id: 2, name: "Надія" },
      { id: 3, name: "Ігнат" },
    ],
    friendsPhoto: [
      { id: 1, photo: "https://i.redd.it/id910ovp3rm71.jpg" },
      { id: 2, photo: "https://i.pinimg.com/280x280_RS/fa/aa/0e/faaa0ebf979da5e7d5cf038a5bcb7853.jpg" },
      { id: 3, photo: "https://i0.wp.com/manforhimself.com/wp-content/uploads/2021/05/Ross-geller-swept-back-hair-1200-GettyImages-908307.jpg?fit=1200%2C1200&ssl=1" },

    ]
  }

}

export let addPost = (postMessage) => {
  let newPost = {
    id: state.profilePage.postsData.length + 1,
    post: postMessage,
    like: 0
  }
  state.profilePage.postsData.push(newPost);
}
// export const updateMessages = (newMessagesData) => { 
//   state.messagesPage.messagesData = newMessagesData;
// };
// позволяет обновлять данные внутри объекта state, когда она вызывается.


export default state