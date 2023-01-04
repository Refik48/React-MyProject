import React, { useState, useEffect } from "react";
import { Container, Table, Image, Spinner } from "react-bootstrap";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shortType, setShortType] = useState(false);

  const sirala = (key) => {
    countries.sort((a, b) => {
      let valueA = a[key] ? a[key] : ""; // degersiz ifadeleri kontrol ederek siralamanin duzgu olmasini sagladik.
      let valueB = b[key] ? b[key] : "";

      var result = 0;

      if (valueA < valueB) {
        result = 1;
      } else if (valueA > valueB) {
        result = -1;
      }
      if (shortType) result *= -1;
      setShortType(!shortType); // Burada ! ile tersini aliyoruz
      return result;
    });
    setCountries([...countries]); // spreed operatoru kullandik. referans type ve value type karsilastirmasini ogren
    //*spread operatoru, dizileri dizi olmaktan cikarir, bastaki (...) diziyi dagitir. Bizim koydugumuz [] de yeniden dizi haline getirmis oldu. (Shallow Copy=> [...countries])
    //! [...countries] bu isleme shallow copy denir.   mevcut bir diziyi alıp yeni dizi haline getirme: shallow copy
  };
  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v2/all")
      .then((resp) => resp.json())

      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center">ÜLKELER</h1>
      <Table striped bordered hover>
        <Spinner
          animation="border"
          variant="primary"
          className={loading ? "d-block" : "d-none"}
        />
        <thead>
          <tr>
            <th>#</th>
            <th>Flag</th>
            {/* burada arrow functiun kullanmamizin sebebi tiklandiginda
            //calismasi yoksa sirala() seklinde yazarsak onclick'i beklemeden
            //calisir */}
            <th>
              <span onClick={() => sirala("name")}>Country</span>
            </th>
            <th>
              <span onClick={() => sirala("capital")}>Capital</span>
            </th>
            <th>
              <span onClick={() => sirala("population")}>population</span>
            </th>
            <th>
              <span onClick={() => sirala("area")}>area</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <Image
                  src={country.flag}
                  roundedCircle
                  width="100"
                  height="100"
                />
              </td>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.population}</td>
              <td>
                {country.area}km<sup>2</sup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Countries;
