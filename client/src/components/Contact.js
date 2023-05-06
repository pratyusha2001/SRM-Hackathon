import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap"
import "./comp.css"

const Contact = () => {
    return (
        <div id="contact">
            <Container>
                <p className='home-header' style={{ textAlign: "center" }}>Contact Us</p>
                <Container>
                    <Row className="contact-row">
                        <Col className='home-desc contact-col'><a href="#home">Home</a></Col>
                        <Col className='home-desc contact-col'><a href="#upload">Upload</a></Col>
                        <Col className='home-desc contact-col'><a href="#news">News</a></Col>
                        <Col className='home-desc contact-col'><a href="#chat">Chat</a></Col>
                    </Row>
                    <Row>
                        <Col>
                            <form className="form-inline contact-form center">
                                <label for="email"></label>
                                <input type="email" id="email" placeholder="Enter your email" name="email" className="contact-mail" />
                                <button type="submit">Submit</button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Contact;
