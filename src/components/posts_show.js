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

    const { post } = this.props;

    if(!post){
      return <div>Loading ...</div>;
    }

    console.log('---------------');
    console.log(post);

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// Only cares about posts (no need to pass entire state)
// Second argument is the props object that is going to the component above (when its rendered)
function mapStateToProps({ posts }, ownProps){
  // for option 1
  // return { posts };
  console.log(posts);
  return { post: posts[ownProps.match.params.id] };
}

// IF DOES NOT SHOW, MISSED REPLACING NULL HERE
// export default connect(null, { fetchPost })(PostsShow);
export default connect(mapStateToProps, { fetchPost })(PostsShow);
