import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img.svg";

const Banner = () => {
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(200 - Math.random() * 100);

    const toRotate = [ "Software Developer", "Game Developer" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { 
            clearInterval(ticker); 
        };
    }, [text]);

    const tick = () => {
        let index = loopNumber % toRotate.length;
        let fullText = toRotate[index];
        let updatedText = isDeleting 
            ? fullText.substring(0, text.length - 1) 
            : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting) {
            setDelta(previousDelta => previousDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNumber(index + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={ 12 } md={ 6 } xl={ 7 }>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi I'm Kelvin Lim "}<span className="wrap"> {text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at quam auctor, volutpat lorem at, aliquam ligula. Mauris vel consequat urna.</p>
                        <button onClick={ () => console.log("Connect") }>Let's Connect <ArrowRightCircle size={ 25 } /></button>
                    </Col>
                    <Col xs={ 12 } md={ 6 } xl={ 5 }>
                        <img src={ headerImage } alt="Header Image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
