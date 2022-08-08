import React, { useState, useEffect } from "react";
import { Posts } from "../../components/Posts/Posts";
import axios from "axios";

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data);
    };

    getPosts();
  }, []);

  return (
    <section className="blog">
      <h1
        style={{
          textAlign: "center",
        }}
      >
        My Blog
      </h1>

      <div className="container">
        <Posts posts={posts} />
      </div>
    </section>
  );
};
