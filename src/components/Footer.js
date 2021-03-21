import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer(){
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    {/* <Col className="p-0" md={3} sm={12}>
                        Deepshikha
                    </Col> */}
                    <Col className="p-0 d-flex justify-content-center" md={12}>
                        This site is made by Deepshikha
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;
