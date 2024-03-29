import React, { useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";

const Form3 = () => {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    telefon: "",
  });

  const [mesaj, setMesaj] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    const {name,value}=e.target;


    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMesaj("");
    // burada kaydet'e tekrar basinca ustteki yazinin kaybolmasi icin setMesaj'i burada bos yapiyoruz.
    setLoading(true);
    setTimeout(() => {
      setMesaj("Bilgileriniz basarili bir sekilde gonderildi");
      setLoading(false);
    }, 3000);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          {mesaj && <Alert variant="info">{mesaj}</Alert>}

          {/* // guzel bir yol...&& kullanimi..icinde mesaj varsa calisir. */}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="ad">
              <Form.Label>Adiniz</Form.Label>
              <Form.Control
                name="ad"
                type="text"
                placeholder="Adinizi giriniz"
                value={formData.ad}
                onChange={handleForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="soyad">
              <Form.Label>Soyadiniz</Form.Label>
              <Form.Control
                name="soyad"
                type="text"
                placeholder="Soyadinizi giriniz"
                value={formData.soyad}
                onChange={handleForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Eposta Adresiniz</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Epostanizi giriniz"
                value={formData.email}
                onChange={handleForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefon">
              <Form.Label>Telefonunuz</Form.Label>
              <Form.Control
                name="telefon"
                type="text"
                placeholder="Telefonunuzu giriniz"
                value={formData.telefon}
                onChange={handleForm}
              />
            </Form.Group>
            <Button variant="info" type="submit" disabled={loading}>
              {loading && (
                <Spinner animation="border" variant="light" size="sm" />
              )}
              KAYDET
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Form3;
