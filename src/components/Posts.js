import React from "react";

const Posts = ({ userid, posts }) => {
  const userPosts = posts.map((post) => {
    return (
      <div className="card disable-transition mb-4 bg-info text-light border">
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
    <div className="h-100">
      <h1 className="logo text-center">Loading...</h1>
    </div>
  ) : (
    <div className="mt-5">
      <br />
      <h1 className="logo border-bottom pb-4">Posts</h1>
      <br />
      {userPosts}
    </div>
  );
};

export default Posts;
