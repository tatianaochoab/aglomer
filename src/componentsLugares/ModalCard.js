import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import RegCalendar from './RegCalendarTime'
import MapLaces from '../ComponentsMap/Maps'
import ModalForoP from '../componentsForo/ModalForo'
import axios from 'axios'

const ModalCard = (props) => {
    const [go, setGo] = useState(false);
    const [maybe, setMaybe] = useState(false);
    const [contGo, setContGo] = useState(0);
    const [contMaybe, setContMaybe] = useState(0);
    const [selectType, setSelectType]= useState("");
    const [onOff, setOnOff]= useState(false);	
 	
useEffect(() => {
        axios.get(`https://us-central1-aglomer-9c6d9.cloudfunctions.net/place/${props.name1}`)
            .then(res => {
                const dataPlace = res.data

                setContGo(dataPlace.go.cont);
                setContMaybe(dataPlace.maybe.cont);

            })
    }, []);
    const toggleGo = () => {
        setGo(!go);
	setSelectType('go.cont');
    }
    const toggleMaybe = () =>{
	setMaybe(!maybe);
	setSelectType('maybe.cont');
	}
    const toggleForo=()=>{
	setOnOff(!onOff)
	}	
	
	const style={
	marginLeft:"20px",
	paddingLeft: "20px"		
}


    const handleClickCont = () => {
        alert("La cantidad de personas en este sitio es de: " + props.cont2)
    }
    return (
        <Modal show={props.show} onHide={props.onHide} size="xl" aria-labelledby="contained-modal-title-vcenter" centered animation={false}>
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body>
                <Container>

                    <Row xs={1} md={6} lg={12}>
                        <Col className='d-flex flex-column' xs={12} md={12} lg={6}>
                            <img className='align-self-center m-3' width="80%" height="270px" variant="top" src={props.image1} />
                            <h1 className='align-self-center m-3'>{props.name1}</h1>
                            <p className='text-justify  m-3'>{props.descriptionsP}</p>
                            <Col xs={12} md={12} lg={12} className='d-flex flex-column align-items-center'>
                                <Button className='align-self-center m-1 btn-card-place' onClick={handleClickCont}>Cuantas personas estan aquí!</Button>
                                <Button className='align-self-center m-1 btn-card-place' onClick={toggleForo}>Ver comentarios</Button>
                                <ModalForoP show={onOff} onHide={toggleForo} image={props.image1} comments={props.comments1} />
                                <Col xs={12} md={12} lg={12} className='text-center m-1'>
                                    <Button className='m-1 btn-card-place' onClick={toggleGo}>Asistire</Button>
                                    <RegCalendar show={go} onHide={toggleGo} name2={props.name1} type={contGo} selT={selectType} number='1' />
                                    <Button className='m-1 btn-card-place' onClick={toggleMaybe}>Tal vez</Button>
                                    <RegCalendar show={maybe} onHide={toggleMaybe} name2={props.name1} type={contMaybe} selT={selectType} number='2'/>
                                </Col>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-column' xs={12} md={12} lg={6}>
                            <Col>
                                <MapLaces bool={false} lat={props.lat3} lng={props.lng3} zn={15} typeClass="map-target" />
                            </Col>
                            <Col>
                                {props.promotionsP.map(((arr, ind) => {
                                    return (
                                        <ul key={ind}>
                                            <li><strong>{arr.namepromotions1} {arr.descriptionsPromotion}</strong>
                                                <br /> <br />
                                                <p><strong>Tarifas:</strong></p>
                                                <p>Antes: {arr.value_before}</p>
                                                <p>Ahora: {arr.value_after}</p>
                                            </li>
                                        </ul>
                                    )
                                }))
                                }
                            </Col>

                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <strong>Sitios recomendados</strong>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalCard;
