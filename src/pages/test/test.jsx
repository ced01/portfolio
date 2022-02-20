import React from "react";
import { Row, Col, Container, Carousel, Image } from 'react-bootstrap';

import dataDrivenLogo from "../../assets/pictures/exp/af-klm.png";
import airFranceKlmLogo from "../../assets/pictures/exp/dataDriven.png";
import beepeersLogo from "../../assets/pictures/exp/beepeers.png";
import qenviLogo from "../../assets/pictures/exp/qenvi_robotics_logo.png";

import "./test.css"

const Test = () => {
    let square = <Container className="square"> 
                    <Row className="square-content"> 
                        <Col>
                            <Image 
                                className="d-block w-100 cust-size animation-1" 
                                src={dataDrivenLogo} 
                                alt="dataDrivenLogo" 
                                rounded 
                            />
                        </Col> 
                        <Col>
                        <Image 
                            className="d-block w-100 size animation-2" 
                            src={airFranceKlmLogo}
                            alt="airFranceKlmLogo"
                            rounded 
                        />
                        </Col> 
                    </Row>
                    <Row className="square-content"> 
                        <Col>
                            <Image 
                                className="d-block w-100 size animation-3" 
                                src={beepeersLogo}
                                alt="airFranceKlmLogo"
                                rounded 
                            />
                        </Col> 
                        <Col>
                            <Image 
                                className="d-block w-100 size animation-4" 
                                src={qenviLogo}
                                alt="airFranceKlmLogo"
                                rounded 
                            />
                        </Col>
                    </Row>
                </Container>;
    return square;
}

export default Test;