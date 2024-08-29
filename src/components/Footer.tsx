import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={4} className="footer-column">
            <h5>About Us</h5>
            <p>We are passionate dog trainers committed to helping you and your dog have the best possible relationship.</p>
          </Col>
          <Col md={4} className="footer-column">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-column">
            <h5>Contact Us</h5>
            <p>Email: info@dogtrainer.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col className="text-center">
            <p>&copy; 2024 Dog Trainer. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
