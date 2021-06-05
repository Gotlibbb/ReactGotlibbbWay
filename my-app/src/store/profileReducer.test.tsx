import {createAddPostAction, deletePostAC, profileReducer} from "./reducers/profileReducer";
import {ProfilePageType} from "./stateType";

let initialState: ProfilePageType = {
  newPost: "",
  postData: [
    {idPost: "1", post: "It`s my first post"},
    {idPost: "2", post: "I don`t have coronavirus"},
    {idPost: "3", post: "Hey, don`t go to the forbidden forest!!!"},
  ],
  profile: null,
  profileStatus: "",


}



test('added one post', () => {

  let action = createAddPostAction("it`s the first post")

  let newState = profileReducer(initialState, action)

  expect(newState.postData.length).toBe(4)
});


test('The first post text is `it`s the first post`', () => {

  let action = createAddPostAction("it`s the first post")

  let newState = profileReducer(initialState, action)

  expect(newState.postData[0].post).toBe("it`s the first post")
});

test('delete post 1', () => {

  let action = deletePostAC("1")

  let newState = profileReducer(initialState, action)

  expect(newState.postData.length).toBe(2)
});

