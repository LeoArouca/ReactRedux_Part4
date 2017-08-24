import React, { Component } from 'react';
// Connect the action creator in here
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component{
  render(){
    return(
      <div> Posts Index</div>
    );
  }
}

// Passes action creator in, instead of the mapDispatch, it is identical
// Simpler
// export default connect(null, { fetchPosts: fetchPosts} )(PostsIndex);

// ES6
export default connect(null, { fetchPosts } )(PostsIndex);
