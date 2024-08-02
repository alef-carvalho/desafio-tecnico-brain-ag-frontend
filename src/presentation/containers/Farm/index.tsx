import React, {memo} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useFarmer} from "../../../contexts/FarmerContext";
import FarmList from "../../../components/Farm/FarmList";

interface FarmProps {}

const Farm: React.FC<FarmProps> = ({ }) => {

    const { farmer } = useFarmer();

    return (
        <Container style={{ paddingTop: "5rem" }}>
            <Row>
                <Col xs={12} className="d-flex flex-column align-items-center justify-content-center mb-4">
                    <h4 className="mt-2">Produtores {">"} {farmer?.name}</h4>
                </Col>
                <Col lg={12}>
                    <FarmList/>
                </Col>
            </Row>
        </Container>
    );
};

export default memo(Farm);
