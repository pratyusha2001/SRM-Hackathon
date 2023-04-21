import Carousel from 'react-bootstrap/Carousel';
import covid from '../img/covid.jpg'
import slide2 from '../img/slide2.jpg'
import slide3 from '../img/slide3.jpg'
import Container from "react-bootstrap/esm/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./comp.css"

const News = () => {
    return (
        <div id="news">
            <Container>
            <p className='home-header' style={{ textAlign: "center" }}>Keeping you healthy and informed with the latest medical news</p>
            <br></br>
            <br></br>
            <Container style={{ marginTop: '10px', marginBottom: '10px', color: "white" }}>
                <Carousel variant="dark" nextLabel="" prevLabel="">
                    <Carousel.Item style={{ borderRadius: "15px" }}>
                        <img
                            className="d-block w-50 h-50 m-auto"
                            src={covid}
                            alt="First slide"
                            height="10%"
                            style={{ borderRadius: "15px" }}
                        />
                        <Carousel.Caption>
                            <p className='news-desc' style={{color: 'white'}}>Covid-19 could be entering endemic stage: Experts</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50 h-50 m-auto"
                            src={slide2}
                            alt="Second slide"
                            height="10%"
                            style={{ borderRadius: "15px" }}
                        />
                        <Carousel.Caption>
                            <p className='news-desc' style={{color: 'white'}}>From Apollo to Max, hospital chains poised <br></br>for growth as patient flow rises: Apollo Hospital</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50 h-50 m-auto"
                            src={slide3}
                            alt="Third slide"
                            style={{ borderRadius: "15px" }}
                        />
                        <Carousel.Caption>
                            <p className='news-desc'>A new PSMA-targeted approach for prostate cancer: Experts</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            </Container>
        </div>
    );
}

export default News;