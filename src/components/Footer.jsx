import { Container, Row ,Col} from "react-bootstrap"
import "./footer.css"
import eclogo from "../assets/img/eclogo2.jpg";


import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/th.jpg'
const Footer = () => {
  return (
    <footer className="footer">
    <Container>
        <Row className="align-item-center">
            <Col  size={12} sm={6}>
            <img src={eclogo} alt="Logo" />
            </Col>
                <Col size={12} sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                    <a target={"_blank"} href='https://il.linkedin.com/in/eran-cohen-91123b182'><img src={navIcon1} alt="Icon"></img></a>
                    <a target={"_blank"} href='https://he-il.facebook.com/eran.cohen.37017'><img src={navIcon2} alt="Icon"></img></a>
                    <a target={"_blank"} href='https://github.com/Einchem?tab=repositories'><img src={navIcon3} alt="Icon"></img></a>
                </div>
                <p>copyRight 2022. All Right Reserved</p>
                
            </Col>

        </Row>
    </Container>
    </footer>
  )
}

export default Footer
