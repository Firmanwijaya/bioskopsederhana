import { useEffect, useState } from "react";
import { Card, Image, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center" id="trending">
          TRENDING MOVIES
        </h1>
        <br />
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={4} className="movieWrapper" key={index}>
                <Card className="movieImage">
                  <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="test image" className="images" />
                  <div className="bg-dark">
                    <div className="text-white p-2 m-1">
                      <Card.Title className="text-center">{result.title}</Card.Title>
                      <Card.Text className="text-left">{result.overview}</Card.Text>
                      <Card.Text className="text-end">{result.release_date}</Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
