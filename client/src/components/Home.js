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
                      </p>
                     <p className='home-desc'>
                     Discover a new level of understanding and control over your health with our medical imagery analysis app. With detailed and accurate imaging, you can confidently make informed decisions about your diagnosis, treatment, and overall well-being
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