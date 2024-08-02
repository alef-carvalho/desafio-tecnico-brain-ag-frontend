import React, {memo} from "react";
import {Col, Container, Row} from "react-bootstrap";
import FarmerList from "../../../components/Farmer/FarmerList";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({ }) => {
    return (
        <Container style={{ paddingTop: "5rem" }}>
            <Row>
                <Col xs={12} className="d-flex flex-column align-items-center justify-content-center mb-4">
                    <h4 className="mt-2">Gestão de Produtores</h4>
                </Col>
                <Col lg={12}>
                    <FarmerList/>
                </Col>
            </Row>
        </Container>
    );
};

export default memo(Home);
