import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";

import Post from "./Post";
import axios from "axios";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const ekle = () => {
    const yeniYazi = {
      title: "Merhaba Dunya123",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas debitis! Natus eos, aut labore non dolor odio amet nesciunt earum doloremque ea culpa eligendi necessitatibus pariatur ex. Autem, voluptatibus.",
      userId: 1,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", yeniYazi)
      .then((resp) => {setPosts([...posts,yeniYazi]);
      });
  };

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((resp) =>
      setPosts(resp.data)
    );
  }, []);

  return (
    <Container className="mt-5">
      <Button variant="info" className="mb-5" onClick={ekle}>
        New Add
      </Button>
      {posts.map((post) => (
        <Post baslik={post.title} mesaj={post.body} key={post.id} />
      ))}
    </Container>
  );
};

export default Posts;
