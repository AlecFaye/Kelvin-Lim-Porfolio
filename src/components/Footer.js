import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/faye-foundations-logo.svg";
import linkedInImage from "../assets/img/nav-icon1.svg";

const Footer = () => {
    return (
        <footer className="footer pt-3">
            <Container>
                <Row className="align-items-center">
                    <Col size={ 12 } sm={ 6 }>
                        <img src={ logo } alt="Logo" />
                    </Col>
                    <Col size={ 12 } sm={ 6 } className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/alec-tl-dev/"><img src={ linkedInImage } alt="LinkedIn Icon" /></a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
