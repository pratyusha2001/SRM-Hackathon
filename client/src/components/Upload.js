import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from "react-bootstrap/esm/Container";
import MRI from '../img/MRI.png'
import CT from '../img/CT.png'
import XRAY from '../img/XRAY.png'
import React, { useState } from 'react';
import UploadWave from './UploadWave';

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        console.log("Submitted");
    };
    return (
        <div id="upload">
            <Container >
                <p className='home-header' style={{ textAlign: "center", marginTop: "0px" }}>
                    Securely upload and access your files anytime, anywhere
                </p>
                <br></br>
                <br></br>
                <CardGroup>
                    <Card className='upload-card' style={{ backgroundColor: " #F1F2F4" }}>
                        <Container>
                            <Card.Img variant="top" src={MRI} style={{ marginTop: "12px" }} />
                        </Container>
                        <Card.Body>
                            <form action="/ml/processing" method="POST" enctype="multipart/form-data">
                                <input type="file" name="image" />
                                <button className='upload-btn' type="submit">Upload</button>
                            </form>
                            {/* <button className='upload-btn' onClick={handleSubmission}>Upload</button> */}
                        </Card.Body>
                    </Card>

                    <Card className='upload-card' style={{ backgroundColor: " #F1F2F4" }}>
                        <Container>
                            <Card.Img variant="top" src={XRAY} style={{ marginTop: "12px" }} />
                        </Container>
                        <Card.Body>
                            <button className='upload-btn'>Upload</button>
                        </Card.Body>
                    </Card>

                    <Card className='upload-card' style={{ backgroundColor: " #F1F2F4" }}>
                        <Container>
                            <Card.Img variant="top" src={CT} style={{ marginTop: "12px" }} />
                        </Container>
                        <Card.Body>
                            <button className='upload-btn'>Upload</button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            <UploadWave />
        </div>
    );
}

export default Upload;
