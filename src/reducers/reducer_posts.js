// can convert array into objects
// data and then property to be used from key
// _.mapKeys(array, 'id');
import _ from 'lodash';

import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action){
  switch (action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      // At this stage you might have a few posts inside this reducer already
      // in order to not throw away stuff

      // ES5
      // const post = action.payload.data;
      // const newState = { ...state,  }
      // newState[post.id] = post;
      // return newState;

      // ES6
      // these square brackets are NOT!!! for array
      return { ...state, [action.payload.data.id]: action.payload.data }

    default:
      return state;
  }
}
