import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

let state = {
  postsData: [
    { id: 1, message: "Hi, how  are you?", likesCount: 12 },
    { id: 2, message: "It's  my first post", likesCount: 76 },
    { id: 3, message: "Hello Nastya how  are you?", likesCount: 22 },
  ],
  profile: null,
  status: "",
};

it("length of posts should be incremented", () => {
  let action = addPostActionCreator("I like learn React with IT-Kamasutra!");
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(4);
});

it("message of new post should be should be 'I like learn React with IT-Kamasutra!'", () => {
  let action = addPostActionCreator("I like learn React with IT-Kamasutra!");
  let newState = profileReducer(state, action);
  expect(newState.postsData[3].message).toBe(
    "I like learn React with IT-Kamasutra!"
  );
});

it("after deleting length should be decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(2);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(3);
});