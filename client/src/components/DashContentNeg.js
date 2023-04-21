import ContentNeg from "./ContentNeg";
import Rightbar from "./RightBar";
import "./comp.css" 
import {Row, Col, Container} from 'react-bootstrap';


const DashContentNeg=()=>{
    return(
        <div>
                <Row>
                    <Col><ContentNeg/></Col>
                    <Col lg={2}><Rightbar/></Col>
                </Row>
        </div>
    );
}

export default DashContentNeg;