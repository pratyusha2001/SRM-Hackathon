import Rightbar from "./RightBar";
import "./comp.css" 
import {Row, Col, Container} from 'react-bootstrap';
import Content from './Content';

const DashContent=()=>{
    return(
        <div>
                <Row>
                    <Col><Content/></Col>
                    <Col lg={2}><Rightbar/></Col>
                </Row>
        </div>
    );
}

export default DashContent;