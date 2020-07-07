import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalForo from './ModalForo';


const ForoCard = (props) => {
    const [viewForo, setViewForo] = useState(false)
    const modalToggle = () => setViewForo(!viewForo)

    console.log(props.comments)
    return (
        <section d-flex="true" flex-wrap="true">
            <Card className='foro-cards'>
                <Card.Header className='text-center card-header'><h6>{props.name}</h6></Card.Header>
                <Card.Body>
                        <Row xs={1} md={6} lg={12}>
                            <Col xs={12} md={6} lg={6} className='d-flex flex-row justify-content-center'><img className='align-self-center' width="80%" height="80%" variant="top" src={props.image} /></Col>
                            <Col xs={12} md={6} lg={6}>
                                <Col xs={12} md={12} lg={12}><p className='text-justify  m-3' style={{ width: "30fr" }} placeholder="Comentario">{props.comments[0].comment}</p></Col>
                                <Col xs={12} md={12} lg={12}><p className='text-justify  m-3' style={{ width: "30fr" }} placeholder="Comentario">{props.comments[1].comment}</p></Col>
                                <Col xs={12} md={12} lg={12}><Button className='btn-card-place text-jsutify m-3' onClick={modalToggle}>Mas información</Button></Col>
                                <ModalForo show={viewForo} onHide={modalToggle} name={props.name} image={props.image} comments={props.comments} />
                            </Col>
                        </Row>
                </Card.Body>
            </Card>
        </section>
    );
}
export default ForoCard;