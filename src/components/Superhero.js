import { Card, Image, Container, Row, Col } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import blackpantherImage from "../assets/images/superhero/blackpanther.jpg";
import blackwidowImage from "../assets/images/superhero/blackwidow.jpg";
import captainmarvelImage from "../assets/images/superhero/captainmarvel.jpg";
import ironmanImage from "../assets/images/superhero/ironman.jpg";
import spidermanImage from "../assets/images/superhero/spiderman.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center" id="superhero">
          SUPERHERO MOVIES
        </h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={antmanImage} alt="Ant-Man image" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Ant-Man</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={blackpantherImage} alt="Black Panther image" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Black Panther</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={blackwidowImage} alt="Black Widow image" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Black Widow</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={captainmarvelImage} alt="Captain Marvel image" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Captain Marvel</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={ironmanImage} alt="Iron Man image" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Iron-Man</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={spidermanImage} alt="Spiderman image" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Spider-Man</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
