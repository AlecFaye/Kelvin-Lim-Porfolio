import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/faye-foundations-logo.svg";
import linkedInIcon from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/github-mark-white.svg";
import itchIcon from "../assets/img/itchio-logo-textless-white.svg";

const NavigationBar = ({ isHomePage }) => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="md" className={ scrolled ? "scrolled" : "" }>
            <Container>
                <Navbar.Brand href="/">
                    <img src={ logo } alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link 
                            href="#home" 
                            className={ activeLink === "home" ? "active navbar-link" : "navbar-link" } 
                            onClick={ () => {
                                    isHomePage 
                                        ? onUpdateActiveLink("home") 
                                        : navigate("/")
                                } 
                            }>
                                Home
                        </Nav.Link>

                        <Nav.Link 
                            href="#projects" 
                            className={ activeLink === "projects" ? "active navbar-link" : "navbar-link" } 
                            onClick={ () => {
                                    isHomePage 
                                        ? onUpdateActiveLink("projects") 
                                        : navigate("/")
                                }
                            }>
                                Projects
                        </Nav.Link>

                        <Nav.Link 
                            className={ activeLink === "resume" ? "active navbar-link" : "navbar-link" } 
                            onClick={ () => {
                                onUpdateActiveLink("resume");
                                navigate("/resume");
                            }}>
                                Resume
                        </Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/alec-tl-dev/">
                                <img src={ linkedInIcon } alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/AlecFaye">
                                <img src={ githubIcon } alt="GitHub" />
                            </a>
                            <a href="https://alecfaye.itch.io">
                                <img src={ itchIcon } alt="GitHub" />
                            </a>
                        </div>
                        {
                            isHomePage && 
                            <button 
                                className="vvd"
                                onClick={ (event) => {
                                    window.location.href="#connect";
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }><span>Let's Connect</span></button>
                        }
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
