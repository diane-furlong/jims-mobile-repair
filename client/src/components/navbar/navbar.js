import React, {useState, useRef, useEffect} from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css'

const Navb = () => {

    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return (
        <Navbar className='navBar' expand="sm" fixed="top" style={{ transition: '1s ease', backgroundColor: navBackground ? 'white' : 'black'}}>
            <Navbar.Brand href="/" style={{ transition: '1.5s ease', color: navBackground ? 'black' : 'white'}}>
                Jim's Mobile Repair
            </Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav>
                <Navbar.Collapse>
                    <Nav.Link href="/mywork" style={{ transition: '1.5s ease', color: navBackground ? 'black' : 'white'}}>My Work</Nav.Link>
                    <Nav.Link href="#" style={{ transition: '1.5s ease', color: navBackground ? 'black' : 'white'}}>Contact</Nav.Link>
                </Navbar.Collapse>
            </Nav>
        </Navbar>
    )
}

export default Navb


