import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/faye-foundations-logo.svg";
import linkedInImage from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/github-mark-white.svg";
import itchIcon from "../assets/img/itchio-logo-textless-white.svg";

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
                            <a href="https://www.linkedin.com/in/alec-tl-dev/">
                                <img src={ linkedInImage } alt="LinkedIn Icon" />
                            </a>
                            <a href="https://github.com/AlecFaye">
                                <img src={ githubIcon } alt="GitHub" />
                            </a>
                            <a href="https://alecfaye.itch.io">
                                <img src={ itchIcon } alt="GitHub" />
                            </a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
