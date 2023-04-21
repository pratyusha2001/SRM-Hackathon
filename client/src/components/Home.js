import { Container, Row, Col } from 'react-bootstrap';
import Wave from './Wave';
import "./comp.css"

const Home = () => {
    return (
        <div id="home">
            <Container>
                <Row>
                    <Col sm={2} md={6}>
                     <p className='home-header'>Quick and Easy Imaging Diagnosis 
                     <br></br>Lorem  ipsum dolor </p>
                     <p className='home-desc'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                     </p>
                     <br></br>
                     <h1 className='home-fig'>90%</h1>
                     <p className='home-fig-desc'>Detection Accuracy</p>
                    </Col>
                    <Col sm={2} md={6}></Col>
                </Row>
            </Container>
            <Wave/>
        </div>
    );
}

export default Home;