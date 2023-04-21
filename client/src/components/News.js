import Upload from "./Upload";
import UploadWave from './UploadWave';
import Carousel from 'react-bootstrap/Carousel';
import MRI from '../img/MRI.png'
import CT from '../img/CT.png'
import XRAY from '../img/XRAY.png'
import Container from "react-bootstrap/esm/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./comp.css"

const News = () => {
    return (
        <div id="news">
            <p className='home-header' style={{ textAlign: "center" }}>News</p>
            <br></br>
            <br></br>
            <Container style={{ marginTop: '10px', marginBottom: '10px', color: "white" }}>
                <Carousel variant="dark" nextLabel="" prevLabel="">
                    <Carousel.Item style={{ borderRadius: "15px" }}>
                        <img
                            className="d-block w-75 h-75 m-auto"
                            src="https://desertinsurancesolutions.com/wp-content/uploads/2019/08/Tesla-in-CA-800x400.png?text=First slide&bg=f5f5f5"
                            alt="First slide"
                            style={{ borderRadius: "15px" }}
                        />
                        <Carousel.Caption>
                            <h3>Tesla</h3>
                            <p>Current bid: $ 5550</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-75 h-75 m-auto"
                            src="https://www.tu-auto.com/files/2019/09/Small-33927-Mercedes-BenzVisionEQS-800x400.jpg?text=First slide&bg=f5f5f5"
                            alt="First slide"
                            style={{ borderRadius: "15px" }}
                        />
                        <Carousel.Caption>
                            <h3>Mercedes</h3>
                            <p>Current bid: $ 6750</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-75 h-75 m-auto"
                            src="https://cdn.autoportal.com/img/news/14751/main/496eb8e1d9cb76031644e1369f79903d/thumbnail_cropped.jpg?text=First slide&bg=f5f5f5"
                            alt="First slide"
                            style={{ borderRadius: "15px" }}
                        />
                        <Carousel.Caption>
                            <h3>BMW</h3>
                            <p>Current bid: $ 4550</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

export default News;