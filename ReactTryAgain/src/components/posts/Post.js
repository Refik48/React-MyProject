import React from 'react'
import Card from "react-bootstrap/Card";
const Post = (props) => {
 const {baslik, mesaj} = props;
  return (
   
    <Card className="mb-3">
      <Card.Body><h2>{baslik}</h2> 
      <p>{mesaj}</p>
      </Card.Body>
    </Card>
  );
}

export default Post
