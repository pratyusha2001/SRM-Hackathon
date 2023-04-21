import Rightbar from "./RightBar";
import "./comp.css"
import { Row, Col, Container, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import dr from '../img/dr.png'
import chart from '../img/chart.jpg'
import findings from '../img/finding.jpg'

const ContentNeg = () => {
    return (
        <div>
            <Card style={{ borderColor: "transparent" }}>
                <Card.Body><form className="center dash-content-form">
                    <input type="text" placeholder="Search here..." name="search" />
                </form></Card.Body>
            </Card>
            {/*  <Card className="cont-card-20" style={{marginTop:"15px", backgroundColor:"transparent" , borderColor: "transparent"}}>
                <Card.Body>
                <img src={findings} height="200px"/>
                </Card.Body>
            </Card> */}
            <p className="home-header" style={{ marginTop: "5px" }}>Report</p>
            <Row>
              {/* <h1 style={{color:"Red"}}>Covid 19 Positive</h1> */}
               <h1 style={{color:"Green"}}>Covid 19 Negative</h1>
            </Row>
            <p className="home-header" style={{ marginTop: "5px" }}>Precautions</p>
            <p>Increasing air filtration in your heating, ventilation, and air conditioning (HVAC)system such as by changing filters  <br></br> frequently and using filters that are properly fitted and provide higher filtration
                using  portable <br></br> high-efficiency particulate air (HEPA) cleaners.
                Turning on exhaust fans and using other fans to improve air flow. </p>
            <p className="home-header" style={{ marginTop: "5px" }}>Doctors you may visit</p>
            <Row>
                <Col>
                    <Card className="cont-card-2" style={{ backgroundColor: "transparent" }}>
                        <Card.Body>
                            <Row>
                                <Col lg={2}><button className="doct-img" style={{ textAlign: "right" }}><img src={dr} width="40" /></button><span></span></Col>
                                <Col><p style={{ textAlign: "left", marginTop: "8px" }}>Dr. Harish Kumar</p></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="cont-card-2" style={{ backgroundColor: "transparent" }}>
                        <Card.Body>
                            <Row>
                                <Col lg={2}><button className="doct-img" style={{ textAlign: "right" }}><img src={dr} width="40" /></button><span></span></Col>
                                <Col><p style={{ textAlign: "left", marginTop: "8px" }}>Dr.Samai Raina</p></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="cont-card-2" style={{ backgroundColor: "transparent" }}>
                        <Card.Body>
                            <Row>
                                <Col lg={2}><button className="doct-img" style={{ textAlign: "right" }}><img src={dr} width="40" /></button><span></span></Col>
                                <Col><p style={{ textAlign: "left", marginTop: "8px" }}>Dr.Trisha Sen</p></Col>
                            </Row>
                        </Card.Body>
                    </Card></Col>
            </Row>
        </div>
    );
}

export default ContentNeg;