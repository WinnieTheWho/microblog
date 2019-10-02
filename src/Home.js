import React, { Component } from "react";
import PostList from "./PostList";

class Home extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="container">
        <PostList posts={posts}/>
      </div>
    );
  }
}

export default Home;
