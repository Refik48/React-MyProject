import React, { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
const Form2 = () => {
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [mesaj, setMesaj] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAd = (e) => {
    setAd(e.target.value);
  };
  const handleSoyad = (e) => {
    setSoyad(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleTelefon = (e) => {
    setTelefon(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // defoult olan davrasini engelle demek (butona bastigin zaman sunucuya gonderme davranisini)  js'de
    setLoading(true);
    setMesaj("");

    // Fake bir API YAPTIK
    setTimeout(() => {
      setMesaj("Bilgileriniz basarili bir sekilde gonderildi.");
      setLoading(false);
    }, 3000);
  };
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          {mesaj && <Alert variant="info">{mesaj}</Alert>} // bu cok guzel bir
          ozellik..short..
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="ad">
              <Form.Label>Adiniz</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adinizi giriniz"
                value={ad}
                onChange={handleAd}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="soyad">
              <Form.Label>Soyadiniz</Form.Label>
              <Form.Control
                type="text"
                placeholder="Soydinizi giriniz"
                value={soyad}
                onChange={handleSoyad}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Eposta Adresiniz</Form.Label>
              <Form.Control
                type="email"
                placeholder="Epostanizi giriniz"
                value={email}
                onChange={handleEmail}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefon">
              <Form.Label>Telefonunuz</Form.Label>
              <Form.Control
                type="text"
                placeholder="Telefonunuzu giriniz"
                value={telefon}
                onChange={handleTelefon}
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

export default Form2;
