import React, { Component } from "react";
import PostCard from "./PostCard";
import "./PostList.css";
import { connect } from "react-redux";
import { getPostsFromAPI } from "./actionCreators";

class PostList extends Component {

  componentDidMount() {
    this.props.getPostsFromAPI();
  }

  render() {
    const { posts } = this.props;
    const arrayofPost = posts.map(post => (
      <PostCard key={post.id} post={post} />
    ));
    return (
      <div className="container-fluid">
        <div className="post-list">{arrayofPost}</div>
      </div>
    );
  }
}

export default PostList;