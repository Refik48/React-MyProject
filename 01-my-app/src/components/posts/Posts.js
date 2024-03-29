import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Post from "./Post";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const ekle = () => {
    const yeniYazi = {
      title: "Merhaba Dunya",
      body: "Ne garipsin dUNYA.... ",
      userId: 1,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", yeniYazi)
      .then((resp) => {
       setPosts([yeniYazi,...posts]);
      });
  };

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((resp) =>
      setPosts(resp.data)
    );
  }, []);

  return (
    <Container className="mt-5">
      <Button variant="info" className="mb-4" onClick={ekle}>
        Yeni Ekle
      </Button>
      {posts.map((post) => (
        <Post baslik={post.title} mesaj={post.body} key={post.id} />
      ))}
    </Container>
  );
};

export default Posts;
