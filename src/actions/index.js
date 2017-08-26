import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
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

export function createPost(values){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

  return{
    type: CREATE_POST,
    payload: request
  }
}
