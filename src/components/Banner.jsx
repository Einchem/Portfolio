import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import './banner.css'
import superman from '../assets/img/superman.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting,setIsDeleting]=useState(false)
    const toRotate = ["Full-Stack Developer"]
    const [text,setText]= useState('')
    const [delta,setDelta]= useState(300- Math.random()* 100)
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick()
        },delta)
        return()=>{clearInterval(ticker)}

    },[text])

    const tick = ()=>{
        let i = loopNum % toRotate.length
        let fullText= toRotate[i]
        let updateText= isDeleting ? fullText.substring(0,text.length-1): fullText.substring(0 , text.length+ 1)
        setText(updateText)

        if(isDeleting){
            setDelta(prevData => prevData / 2)
        }
        if(!isDeleting && updateText===fullText){
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updateText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className="align-items-center"
                >
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) =>
                        <div className={ isVisible ? "animate__animated animate__lightSpeedInLeft":""}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`hi im eran cohen and i am  a ` }<span className='wrap'>{text}</span></h1>
                        <p>My name is eran and i am a Full-Stack developer
                        </p>
                        <a className="cv-download" target={"_blank"} href='https://maroon-gilbertina-97.tiiny.site/' >Lets Connect<ArrowRightCircle size={25} /></a>

                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={superman} alt="Header Img" />

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
