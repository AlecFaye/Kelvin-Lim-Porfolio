import { Container, Row, Col } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import manulifeLogo from "../assets/img/manulife-logo.png";

const Work = () => {
    return (
        <section className="work" id = "work">
            <Container>
                <Row>
                    <Col>
                        <h2>Work Experience</h2>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#E34234', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #E34234' }}
                                date="May 2022 - Aug 2022"
                                iconStyle={{ background: 'black', color: '#fff' }}
                                icon={ <img src={ manulifeLogo } alt="Manufe Logo" height={32} width={32} /> }
                            >
                                <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
                                <h5 className="vertical-timeline-element-subtitle">Manulife | Toronto, ON</h5>
                                <ul className="mx-4 mt-3">
                                    <li className="my-2">Spearheaded the front-end and back-end of an email subscription management system in <b>C#</b>, <b>.NET Core</b>, <b>MSSQL</b> and <b>HTML/CSS</b> allowing administrators to easily update their email preferences</li>
                                    <li className="my-2">Implemented critical updates to a legacy application by updating outdated <b>MSSQL</b> procedures to reflect the new input file saving the organization <b>1200 hours</b> of manual work per year</li>
                                    <li className="my-2">Led the modernization efforts of outdated web applications, incorporating user-friendly <b>Bootstrap 3</b> designs to enhance the overall user experience by centralizing a global <b>CSS</b> file for developers</li>
                                </ul>
                            </VerticalTimelineElement>
                            
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#E34234', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #E34234' }}
                                date="Sep 2021 - Dec 2021"
                                iconStyle={{ background: 'black', color: '#fff' }}
                                icon={ <img src={ manulifeLogo } alt="Manufe Logo" height={32} width={32} /> }
                            >
                                <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
                                <h5 className="vertical-timeline-element-subtitle">Manulife | Toronto, ON</h5>
                                <ul className="mx-4 mt-3">
                                    <li className="my-2">Devised a user-friendly portal, serving as a central hub for over 500 internal users using <b>C#</b>, <b>.NET Core</b>, <b>MSSQL</b> and <b>SSMS</b> using an <b>MVC</b> framework</li>
                                    <li className="my-2">Conceptualized and implemented a user-friendly platform enabling seamless submission of automation ideas, fostering a collaborative environment for users to contribute valuable insights</li>
                                    <li className="my-2">Designed and established a robust system for users to report issues with automation tools, streamlining the troubleshooting process and ensuring prompt resolution of technical challenges</li>
                                    <li className="my-2">Constructed a comprehensive progress tracking feature, empowering users to monitor the status of their automation requests in real-time, enhancing transparency and user satisfaction</li>
                                    <li className="my-2">Optimized <b>MSSQL</b> procedures by using temporary tables which reduced unnecessary joins that resulted in a reduced processing time by up to <b>15%</b></li>
                                </ul>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Work;
