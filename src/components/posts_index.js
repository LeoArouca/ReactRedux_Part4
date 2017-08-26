import _ from 'lodash';
import React, { Component } from 'react';
// Connect the action creator in here
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component{

  componentDidMount(){
    // go fetch data
    this.props.fetchPosts();
  }

  renderPosts(){
    // Good method to return multiple items
    return _.map(this.props.posts, post => {
      return (
        <li className='list-group-item' key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render(){
    console.log(this.props.posts);
    return(
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/posts/new'>
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// Passes action creator in, instead of the mapDispatch, it is identical
// Simpler
// export default connect(null, { fetchPosts: fetchPosts} )(PostsIndex);

// ES6
// I missed mapStateToProps here (it was null), nothing would come back from the API request
export default connect(mapStateToProps, { fetchPosts } )(PostsIndex);
