import './skills.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container ,Row,Col} from 'react-bootstrap';
import react from "../assets/img/react.png"
import js from "../assets/img/js.png"
import cSharp from "../assets/img/csharp.png"
import ColorSharp from '../assets/img/color-sharp.png'
import mongo from '../assets/img/mongodb.png'


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
                    <p>this is my skills</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={react} alt='Image'/>
                            <h5>Web development</h5>
                        </div>
                        <div className="item">
                            <img src={cSharp} alt='Image'/>
                            <h5>backhand devlopment</h5>
                        </div>
                        <div className="item">
                            <img src={mongo} alt='Image'/>
                            <h5>Data base</h5>
                        </div>
                        <div className="item">
                            <img src={js} alt='Image'/>
                            <h5>fronthand development</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left'  src={ColorSharp}/>
    </section>
  
  )
}
export default Skills

