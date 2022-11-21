import './skills.css'
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import react from "../assets/img/react.png"
import js from "../assets/img/js.png"
import cSharp from "../assets/img/csharp.png"
import mongo from '../assets/img/mongodb.png'
import angular from '../assets/img/angular-removebg-preview.png'
import sql from '../assets/img/SQL-removebg-preview.png'
import git from '../assets/img/index-removebg-preview.png'
import node from "../assets/img/nodejs-removebg-preview.png"
import ts from "../assets/img/typescprit-removebg-preview.png"




const Skills = () => {
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                skills
              </h2>
              <div responsive={responsive} className="container">
                <div className='flex-container'>
                  <div className='item'>
                    <img src={cSharp} alt='Image' />
                    <h5>C#</h5>
                  </div>
                  <div className='item'>
                    <img src={node} alt='Image' />
                    <h5>Node.js</h5>
                  </div>
                  <div className='item'>
                    <img src={js} alt='Image' />
                    <h5>JavaScript</h5>
                  </div>
                  <div className='item'>
                    <img src={react} alt='Image' />
                    <h5>React</h5>
                  </div>
                  <div className='item'>
                    <img src={angular} alt='Image' />
                    <h5>Angular</h5>
                  </div>
                  <div className='item'>
                    <img src={mongo} alt='Image' />
                    <h5>MongoDB</h5>
                  </div>
                  <div className='item'>
                    <img src={sql} alt='Image' />
                    <h5>SQL</h5>
                  </div>
                  <div className='item'>
                    <img src={git} alt='Image' />
                    <h5>Git</h5>
                  </div>
                  <div className='item'>
                    <img src={ts} alt='Image' />
                    <h5>TypeScript</h5>
                  </div>
                </div>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  )
}
export default Skills

