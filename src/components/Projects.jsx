import './projects.css'
import booking from "../assets/img/booking2.jpg"
import weather from "../assets/img/weather1.jpg"
import portfolio from "../assets/img/portfolio.jpg"
import { Col, Container, Row, Tab } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import ProjectCard from './ProjectCard'
import colorSharp2 from "../assets/img/color-sharp2.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';



const Projects = () => {
    const projects = [
        {
            title: "booking app",
            description: "mini booking app using Mern-stuck stracture",
            imgUrl: booking,
        },
        {
            title: "weather app",
            description: "wheather app using API",
            imgUrl: weather,
        },
        {
            title: "portfolio",
            description: "my portfolio",
            imgUrl: portfolio,
        }
    ]
    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) =>
                        <div className={ isVisible ? "animate__animated animate__slideInUp":""}>
                        <h2>Projects</h2>
                        <p>hello this is my projects 0.0</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id='projects-tabs' defaultActiveKey="first">
                        <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center ' id='pills-tab'>
                            <Nav.Item>
                                <Nav.Link eventKey="first">Web-Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Desktop-Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >
                                    Others
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row className='row-img'>
                                    {
                                        projects.map((project,index)=>{
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )

                                        })
                                    }
                                </Row>

                            </Tab.Pane>
                            <Tab.Pane eventKey="second">eran cohen</Tab.Pane>
                            <Tab.Pane eventKey="third">cohen eran</Tab.Pane>

                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2}/>

        </section>
    )
}

export default Projects
