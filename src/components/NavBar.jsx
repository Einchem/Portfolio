import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/th.jpg'
import './navBar.css'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)

      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  const updateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <h2 className='nav-title'>ERAN</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className='nav-bar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? "active navbar-link" : "navbar-link"}
              onClick={() => updateActiveLink('home')}>Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"}
              onClick={() => updateActiveLink('skills')}>Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"}
              onClick={() => updateActiveLink('projects')}>Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a target={"_blank"} href='https://il.linkedin.com/in/eran-cohen-91123b182'><img src={navIcon1} alt='' /></a>
              <a target={"_blank"} href='https://he-il.facebook.com/eran.cohen.37017'><img src={navIcon2} alt='' /></a>
              <a target={"_blank"} href='https://github.com/Einchem?tab=repositories'><img src={navIcon3} alt='' /></a>
            </div>
            <a className="vvd" target={"_blank"} href='https://maroon-gilbertina-97.tiiny.site/' download>Lets Connect</a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
