import React from "react";
import {
  Jumbotron,
  Container,
  Card,
  /*Button,*/ Col,
  Row,
} from "react-bootstrap";
import descImg from "../assets/HmDesc.jpg";
// import poster from "./dia-logo.png";
const HomeComponent = () => {
  return (
    <div className="home">
      <Jumbotron fluid>
        <Container className="jumbotron">
          <h5 className="jumbodesc1">
            Decentralized Recycling Waste Management System Revolutionizing
            Blockchain
          </h5>
        </Container>
      </Jumbotron>

      <Container fluid="xs">
        <Card className="council-pic-info">
          <Row>
            <Col lg={5}>
              <Card.Img src={descImg} />
            </Col>
            <Col lg={5}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  WHAT IS CLEANCOIN? Cleancoin Foundation is a non profit
                  organization whose primary objective is to work extensively to
                  overhaul the waste management sector by bring autonomicity to
                  the process of waste collection and management as well as
                  connect the waste collectors and suppliers to recycling
                  industries and organisations who demand the collection of
                  waste for various reasons. It will contribute to conserving
                  the ecosystem and environment while creating better
                  communication and connection between the various industries
                  which work towards the same goal. <p />Cleancoin will make the
                  existing waste management industries as efficient and capable
                  as possible so that they become technologically and otherwise
                  able to tackle the imminent waste management crisis the world
                  faces at this very moment. Apart from working with industries,
                  Swachhcoin will develop an ecosystem where individuals on a
                  mass level are made aware of the possibilities of waste around
                  them so that they understand their roles and responsibility
                  and act accordingly.
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>

      <Row className="counter">
        <Col lg={4} sm={4} xs={4} className="counter-item">
          <div>45000+</div>
          <h3>tons recycled wastes</h3>
        </Col>
        <Col lg={4} sm={4} xs={4} className="counter-item">
          <div>40+</div>
          <h3>affiliated Citites</h3>
        </Col>
        <Col lg={4} sm={4} xs={4} className="counter-item">
          <div>30+</div>
          <h3>Industries</h3>
        </Col>
      </Row>

      {/* <Row className="registrations">
          <Col lg={5}>
            <Card.Img className="poster" src={poster}/>
          </Col>
          <Col lg={5}>
            <Card.Body>
              <Button className="registration-buttons " variant="info" size="lg">Membership Form</Button>
              <Button className="registration-buttons " variant="info" size="lg">Register for workshop/events </Button>
            </Card.Body>
          </Col>
        </Row> */}
    </div>
  );
};

export default HomeComponent;
