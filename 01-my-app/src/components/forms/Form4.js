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

const Form4 = () => {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    tel: "",
  });

  const [mesaj, setMesaj] = useState("");
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //* default davranisini engelle, yani butona basitignda sunucuya gonderme diyoruz. Bizim kontrolumuzde olsun diye

    const form = e.target;
    const kontrol = form.checkValidity(); //! Gelen veri kriterlerime uygun mu degil mi kontrol ediyor
    setValidated(true);

    if (!kontrol) return;

    setLoading(true);
    setMesaj("");
    //!Burası fake API: (Normalde burada fetch ya da axios gibi bir kütüphane ile API'ya baglanılmasi gerekir)
    setTimeout(() => {
      setMesaj("Bilgileriniz başarılı bir şekilde gönderildi.");
      setLoading(false);
    }, 3000);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          {mesaj && <Alert variant="info">{mesaj}</Alert>}
          <Form noValidate onSubmit={handleSubmit} validated={validated}>
            {/*//! Yukaridaki noValidate ile html5'in default formHandler'ını (HTML5 validasyonunu) devre
            //!dışı bırakıyoruz */}
            <Form.Group className="mb-3" controlId="ad">
              <Form.Label>Adinizi</Form.Label>
              <Form.Control
                required //*!required koyarsak bu alanı boş geçemez kullanıcı */
                minLength="3" //! min-maxLength ile de karakter sınırlaması yapabiliriz*/
                name="ad"
                type="text"
                placeholder="Adinizi giriniz"
                value={formData.ad}
                onChange={handleForm}
              />
              <Form.Control.Feedback type="invalid">
                Adinizi giriniz
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="soyad">
              <Form.Label>Soyadiniz</Form.Label>
              <Form.Control
                required
                name="soyad"
                type="text"
                placeholder="Soyadinizi giriniz"
                value={formData.soyad}
                onChange={handleForm}
              />
              <Form.Control.Feedback type="invalid">
                Soyadinizi giriniz
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>E-posta adresiniz</Form.Label>
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="E-postanizi giriniz"
                value={formData.email}
                onChange={handleForm}
              />
              <Form.Control.Feedback type="invalid">
                Geçerli bir eposta giriniz
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tel">
              <Form.Label>Telefon numaraniz</Form.Label>
              <Form.Control
                name="tel"
                type="text"
                placeholder="Telefon numaranizigiriniz"
                value={formData.tel}
                onChange={handleForm}
              />
            </Form.Group>
            <Button variant="success" type="submit" disabled={loading}>
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

export default Form4;
