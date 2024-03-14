import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

import tictactoeImage from "../assets/img/tic-tac-toe.png";
import cliToDoListImage from "../assets/img/cli-to-do-list.png";
import kBanImage from "../assets/img/k-ban.png";
import pokerHandEvaluatorImage from "../assets/img/poker-hand-evaluator.png";
import minigameWebsiteImage from "../assets/img/minigame-website.png";

import chessOfTheElementsImage from "../assets/img/chess-of-the-elements.png";
import cucqImage from "../assets/img/cucq.png";
import escapeSimulatorImage from "../assets/img/escape-simulator.png";
import mysticMaelstromVRImage from "../assets/img/mystic-maelstrom-vr.png";
import tragicImage from "../assets/img/tragic.png";

import bloodstoneChroniclesImage from "../assets/img/bloodstone-chronicles.png";
import wordleImage from "../assets/img/wordle.png";

const Projects = () => {
    const softwareProjects = [
        {
            title: "Tic-Tac-Toe Multiplayer",
            description: "ReactJS - NodeJS - ExpressJS",
            imageURL: tictactoeImage
        },
        {
            title: "CLI To-Do List",
            description: "Python",
            imageURL: cliToDoListImage
        },
        {
            title: "K-Ban",
            description: "HTML/CSS - JavaScript",
            imageURL: kBanImage
        },
        {
            title: "Poker Hand Evaluator",
            description: "Smalltalk - Elixir - Haskell - Rust",
            imageURL: pokerHandEvaluatorImage
        },
        {
            title: "Minigame Website",
            description: "HTML/CSS - JavaScript",
            imageURL: minigameWebsiteImage
        },
    ]

    const gameProjects = [
        {
            title: "Corrupted Universe Cries Quietly",
            description: "Unity - C#",
            imageURL: cucqImage
        },
        {
            title: "Chess of the Elements",
            description: "Unity - C#",
            imageURL: chessOfTheElementsImage
        },
        {
            title: "Escape Simulator",
            description: "Unreal Engine 5 - C++",
            imageURL: escapeSimulatorImage
        },
        {
            title: "Mystic Maelstrom VR",
            description: "Unity VR - C#",
            imageURL: mysticMaelstromVRImage
        },
        {
            title: "Tragic",
            description: "Godot Engine - GDScript",
            imageURL: tragicImage
        },
    ];

    const workInProgressProjects = [
        {
            title: "Bloodstone Chronicles",
            description: "Game Development (Unity - C#)",
            imageURL: bloodstoneChroniclesImage
        },
        {
            title: "Wordle React",
            description: "Software Development (ReactJS)",
            imageURL: wordleImage
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Featuring a diverse range of projects, each endeavor showcases my passion for problem-solving and creativity.  Explore my work and discover how I can contribute to your next project.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Software Development</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Game Development</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Work In Progress</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            softwareProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={ index }
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            gameProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={ index }
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            workInProgressProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={ index }
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Projects Background"/>
        </section>
    );
};

export default Projects;
