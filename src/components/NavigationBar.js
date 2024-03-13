import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";

const NavigationBar = () => {

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link 
                        href="#home" 
                        className={activeLink === "home" ? "active navbar-link" : "navbar-link"} 
                        onClick={() => onUpdateActiveLink("home")}>
                            Home
                    </Nav.Link>
                    <Nav.Link 
                        href="#projects" 
                        className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} 
                        onClick={() => onUpdateActiveLink("projects")}>
                            Projects
                    </Nav.Link>
                    <Nav.Link 
                        href="#resume" 
                        className={activeLink === "resume" ? "active navbar-link" : "navbar-link"} 
                        onClick={() => onUpdateActiveLink("resume")}>
                            Resume
                    </Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/alec-tl-dev/" target="_blank">
                            <img src={navIcon1} alt="LinkedIn" />
                        </a>
                        {/* <a href="#"><img src={navIcon2} alt="" /></a>
                        <a href="#"><img src={navIcon3} alt="" /></a> */}
                    </div>
                    <button className="vvd"><span>Let's Connect</span></button>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
};

export default NavigationBar;
