import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

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
