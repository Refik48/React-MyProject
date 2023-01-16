import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

const Form2 = () => {
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          <Form>
            <Form.Group className="mb-3" controlId="ad">
              <Form.Label>Adiniz</Form.Label>
              <Form.Control type="text" placeholder="Adinizi giriniz" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="soyad">
              <Form.Label>Soyadiniz</Form.Label>
              <Form.Control type="text" placeholder="Soyadinizi giriniz" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Eposta Adresiniz</Form.Label>
              <Form.Control type="email" placeholder="Epostanizi giriniz" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefon">
              <Form.Label>Telefonunuz</Form.Label>
              <Form.Control type="text" placeholder="Telefonunuzu giriniz" />
            </Form.Group>
            <Button variant="info">KAYDET</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Form2;
