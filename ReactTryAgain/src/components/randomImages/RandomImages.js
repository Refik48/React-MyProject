import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

const RandomImages = () => {
  const [sayi, setSayi] = useState(0);

  const sayiUret = () => {
    const randomNumber = Math.floor(Math.random() * 10 + 1); // restgele sayi uretmek istersek Math kutuphanesinde random sonrada floor kullanabiliriz.
    setSayi(randomNumber);
  };
  return (
    <Container className="mt-5">
      <Card>
        {sayi >= 1 && sayi < 3 ? (
          <Card.Img variant="top" src="assets/images/manzara-01.jpg" />
        ) : sayi > 3 && sayi <= 7 ? (
          <Card.Img variant="top" src="assets/images/manzara-02.jpg" />
        ) : (
          <Card.Img variant="top" src="assets/images/manzara-03.jpg" />
        )}

        <Card.Body>
          <Button variant="primary" onClick={sayiUret}>
            Change {sayi}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RandomImages;
