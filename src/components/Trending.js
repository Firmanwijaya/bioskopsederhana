import { Card, Image, Container, Row, Col } from "react-bootstrap";
import captainAmericaImage from "../assets/images/trending/captainamerica.jpg";
import hulkImage from "../assets/images/trending/hulk.jpg";
import lokiImage from "../assets/images/trending/loki.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";
import thorImage from "../assets/images/trending/thor.jpg";
import venomImage from "../assets/images/trending/venom.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center" id="trending">
          TRENDING MOVIES
        </h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={captainAmericaImage} alt="Captain America image" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Captain America</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={hulkImage} alt="Hulk image" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Hulk</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={lokiImage} alt="Loki image" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Loki</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={morbiusImage} alt="Morbius image" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Morbius</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={thorImage} alt="Thor image" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Thor</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={venomImage} alt="Venom image" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Venom</Card.Title>
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

export default Trending;
