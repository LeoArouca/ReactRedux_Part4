import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=TEST123';

export function fetchPosts(){
  // makes request
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  // put the payload in, because it has been assiged to payload property. The redux promise middleware
  // will auto resolve whenever it sees it
  return{
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback){
  // then uses promise to send it back only after complete
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => callback());

  return{
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id){

  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return{
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id){
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return{
    type: DELETE_POST,
    payload: request
  }
}
