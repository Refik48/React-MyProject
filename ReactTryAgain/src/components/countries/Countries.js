import React, { useState, useEffect } from "react";
import { Container, Table, Image, Spinner } from "react-bootstrap";

function Countries() {
  const [countries, setCountries] = useState([]);
const [loading, setLoading] = useState(false);
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
       console.log(err)});

     
  }, []);

  return (
    <Container className="mt-5">
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
            <th>Country</th>
            <th>Capital</th>
            <th>Popilation</th>
            <th>Area</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <td>{index}</td>
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
