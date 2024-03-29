import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Birthday from "./components/birthday/Birthday";
import BSClassic from "./components/boostrap-classic/BSClassic";
import BSReact from "./components/boostrap-react/BSReact";
import Clock1 from "./components/clock1/Clock1";
import Clock2 from "./components/clock2/Clock2";
import Clock3 from "./components/clock3/Clock3";
import Counter from "./components/counter/Counter";
import Countries from "./components/countries/Countries";
import Form1 from "./components/forms/Form1";
import Form2 from "./components/forms/Form2";
import Form3 from "./components/forms/Form3";
import Form4 from "./components/forms/Form4";
import Hello from "./components/hello/Hello";
import Image from "./components/image/Image";
import Jsx from "./components/jsx/Jsx";
import Posts from "./components/posts/Posts";
import Profile from "./components/profile/Profile";
import Props from "./components/props/Props";
import RandomImages from "./components/randomImages/RandomImages";
import Header from "./components/shared/Header";
import Shop from "./components/shop/Shop";
import State from "./components/state/State";
import ExternalStyle from "./components/style/ExternalStyle";
import InlineStyle from "./components/style/InlineStyle";
import InternalStyle from "./components/style/InternalStyle";
import Test from "./components/test/Test";
import ChangeTitle from "./components/useEffect/ChangeTitle";
import UserCards from "./components/usercards/UserCards";
import Menu from "./components/shared/Menu";
import HomePage from "./pages/HomePage";
import BirthdayPage from "./pages/BirthdayPage";
import BoostrapClassicPage from "./pages/BoostrapClassicPage";

function App() {
  const avatarUrl =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  return (
    <div>
      {/* Merhaba Dunya (App)
      <Hello />
      <Test />
      <Jsx />
      <InlineStyle />
      <InternalStyle />
      <ExternalStyle /> */}
      {/* <Clock1 /> */}
      {/* <Props ad="Refik" soyad="Gulak" />
      <Props ad="Faik" soyad="Gulak" />
      <Props ad="Sefik" soyad="Gulak" />
      <Props ad="Azra" soyad="Gulak" />
      <Props ad="Selma" soyad="Gulak" /> */}
      {/* <Clock2 yaziRengi="yellow" zeminRengi="navy" />
      <Clock2 yaziRengi="red" zeminRengi="yellow" />
      <Clock2 yaziRengi="white" zeminRengi="black" />
      <Clock2 yaziRengi="rgba(81,207,226)" zeminRengi="#304031" /> */}
      {/* <Profile
        avatar={avatarUrl}
        name="Ali Gel"
        location="Turkiye, Istanbul"
        shot="4"
        followers="25"
        following="45"
      /> */}
      {/* <Image /> */}
      {/* <BSClassic /> */}
      {/* <BSReact/> */}
      {/* <Shop /> */}
      {/* <State/> */}
      {/* <Counter /> */}

      {/* <Birthday/> */}
      {/* <Clock3 /> */}
      {/* <ChangeTitle /> */}
      {/* <UserCards/> */}
      {/* <Countries /> */}
      {/* <Posts /> */}
      {/* <RandomImages/> */}
      {/* <Form1/> */}
      {/* <Form2/> */}
      {/* <Form3 /> */}
      {/* <Form4/> */}

      <Router>
        <Header />
        <Container>
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Switch>
                <Route path="/bs-classic">
                  <BoostrapClassicPage />
                </Route>
                <Route path="/birthday">
                  <BirthdayPage />
                </Route>
                <Route to="/">
                  <HomePage />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
