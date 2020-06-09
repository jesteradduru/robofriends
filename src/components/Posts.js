import React from "react";
import Scroll from "./Scroll";
const Posts = ({ userid, posts }) => {
  const userPosts = posts.map((post) => {
    return (
      <div className="card disable-transition mb-4 bg-info text-light border mx-auto">
        <div className="card-header">
          <h4>{post.title}</h4>
        </div>
        <div className="card-body">
          <p>{post.body}</p>
        </div>
      </div>
    );
  });
  return posts.length === 0 ? (
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="logo loading">Loading...</h1>
    </div>
  ) : (
    <div className="mt-5">
      <br />
      <h1 className="logo border-bottom pb-4 text-center">Posts</h1>
      <br />
      <Scroll viewHeight="60vh">{userPosts}</Scroll>
    </div>
  );
};

export default Posts;
