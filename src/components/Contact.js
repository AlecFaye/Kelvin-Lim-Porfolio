import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImage from "../assets/img/contact-img.svg";

const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });

        let result = await response.json();

        setButtonText("Send");
        setFormDetails(formInitialDetails);

        if (result.code === 200) {
            setStatus({ success: true, message: "Message send successfully" });
        } else {
            setStatus({ success: false, message: "Something went wrong, please try again later." });
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={ 6 }>
                        <img src={ contactImage } alt="Contact Us" />
                    </Col>
                    <Col md={ 6 }>
                        <h2>Get In Touch</h2>
                        <form onSubmit={ handleSubmit }>
                            <Row>
                                <Col sm={ 6 } className="px-1">
                                    <input 
                                        type="text" 
                                        value={ formDetails.firstName } 
                                        placeholder="First Name"
                                        onChange={ (event) => onFormUpdate("firstName", event.target.value) } 
                                    />
                                </Col>
                                <Col sm={ 6 } className="px-1">
                                    <input 
                                        type="text" 
                                        value={ formDetails.lastName } 
                                        placeholder="Last Name"
                                        onChange={ (event) => onFormUpdate("lastName", event.target.value) } 
                                    />
                                </Col>
                                <Col sm={ 6 } className="px-1">
                                    <input 
                                        type="email" 
                                        value={ formDetails.email } 
                                        placeholder="Email"
                                        onChange={ (event) => onFormUpdate("email", event.target.value) } 
                                    />
                                </Col>
                                <Col sm={ 6 } className="px-1">
                                    <input 
                                        type="tel" 
                                        value={ formDetails.phone } 
                                        placeholder="Phone No."
                                        onChange={ (event) => onFormUpdate("phone", event.target.value) } 
                                    />
                                </Col>
                                <Col className="px-1">
                                    <textarea 
                                        row="6" 
                                        value={ formDetails.message } 
                                        placeholder="Message"
                                        onChange={ (event) => onFormUpdate("message", event.target.value) }></textarea>
                                    <button type="submit"><span>{ buttonText }</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={ status.success === false ? "danger" : "success" }>{ status.message }</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
