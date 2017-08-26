import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {

  componentDidMount(){
    // Provided directly to us by react router
    const postId = this.props.match.params.id;
    console.log(postId);

    this.props.fetchPost(postId);
  }

  render(){
    // this would work but not reusable and ideal
    // THIS component only cares about one post not ALL
    // const postId = this.props.match.params.id;
    // posts[postId];

    // this.props = ownProps;

    return (
      <div>Show</div>
    );
  }
}

// Only cares about posts (no need to pass entire state)
// Second argument is the props object that is going to the component above (when its rendered)
function mapStateToProps({ posts }, ownProps){
  // for option 1
  // return { posts };
  return { post: posts[ownProps.match.params.id] };
}

export default connect(null, { fetchPost })(PostsShow);
