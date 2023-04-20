import { Row, Col, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./comp.css"
import img from '../img/signin-img.png'
import gmail from '../img/Gmail.png'
import linkedin from '../img/Linkedin.png';
import fb from '../img/Facebook.png'


const SignIn = () => {
    return (
        <div id="signin">
            <Card className='signin-card'>
            <Card.Body>
            <Row>
                <Col lg='6' md={6} sm='6' style={{ backgroundColor: "white" }}>
                    <img className='signin-img' src={img} />
                </Col>

                <Col lg='6' md={6} sm='6' style={{ backgroundColor: "#F5F5F5" }}>
                    <p className='signin-header'>Sign in to Account</p>
                  {/*   <div className='signin-btn'>
                        <button className='acc-btns'><img className='signin-icon' src={gmail} /></button>
                        <button className='acc-btns'><img className='signin-icon' src={fb} /></button>
                        <button className='acc-btns'><img className='signin-icon' src={linkedin} /></button>
                    </div> */}
                  {/*   <div className='signin-line'>or use your email account</div> */}

                    <Form>
                        <Row className="signin-form">
                            <Col lg={8}>
                                <Form.Group className="mb-3 signin-inputs" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                            </Col>

                            <Col lg={8}>
                                <Form.Group className="mb-3 signin-inputs" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="signin-check">
                                <Form.Check type="checkbox" label="Remember me" />
                        </div>
                        <Row>
                            <Col>
                                <button className='signin-submit' style={{marginTop:"25px"}}>Sign In</button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            </Card.Body>
            </Card>
        </div>
    );
}

export default SignIn;