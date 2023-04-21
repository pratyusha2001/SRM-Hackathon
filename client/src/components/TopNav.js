import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.png'
import "./comp.css"

const TopNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='topnav' sticky="top">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} className='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:"transparent"}}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className='nav'>
                        <a className="nav-link" href="#home">Home</a>
                        <a className="nav-link" href="#upload">Upload</a>
                        <a className="nav-link" href="#news">Newsletter</a>
                        <a className="nav-link" href="#contact">Contact</a>
                        <a><button className="profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person" viewBox="0 0 18 25">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>
                        </button></a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;