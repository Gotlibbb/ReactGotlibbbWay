import {createAddPostAction, deletePost, profileReducer} from "./profileReducer";
import {ProfilePageType} from "./store";

let initialState: ProfilePageType = {
  newPost: "",
  postData: [
    {idPost: "1", post: "It`s my first post", likesCount: 5},
    {idPost: "2", post: "I don`t have coronavirus", likesCount: 1},
    {idPost: "3", post: "Hey, don`t go to the forbidden forest!!!", likesCount: 0},
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

  let action = deletePost("1")

  let newState = profileReducer(initialState, action)

  expect(newState.postData.length).toBe(2)
});

