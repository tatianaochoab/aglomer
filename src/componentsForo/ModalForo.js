import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
	return{
	user:state.user
	}
}

const ModalForo = (props) => {
  const [comment, setComment] = useState('')
  


    const handleChanges = (e) =>{
      setComment(e.target.value)
    }
    const handleClick = () =>{
      const fechaHComment = new Date()
      const arrfechaComment = [fechaHComment.getDate(), fechaHComment.getMonth(), fechaHComment.getDate()]
      const arrHoraComment = [fechaHComment.getHours(), fechaHComment.getMinutes(), fechaHComment.getSeconds()]  
      alert("¡Tu mensaje ha sido enviado!")
	
      const commentsJson={
        "user_comments": props.user.displayName,
        "date": arrfechaComment.join('/'),
        "time": arrHoraComment.join(':'),
        "comment": comment
      }
	
              axios.post(`https://us-central1-aglomer-9c6d9.cloudfunctions.net/place/${props.name}`,commentsJson)
    
	setComment(' ')
  }
  return (
    <Modal show={props.show} onHide={props.onHide} size="lg " aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <ModalBody>
        <Row xs={1} md={6} lg={12}>
          <Col xs={12} md={12} lg={6} className='d-flex flex-column'>
            <h2 className='align-self-center m-3'>{props.name}</h2>
            <img className='align-self-center m-3' width="100%" height="50%" variant="top" src={props.image} />
          </Col>
          <Col xs={12} md={12} lg={6}>
            {
              props.comments.map((arr, ind) => {
                return (
                  <Col key={ind}>
                    <p className='text-justify'><strong>Comentario</strong></p>
                    <p className='text-justify'>{arr.comment}</p>
                  </Col>
                )
              })
            }
          </Col>
          <Col className='m-1 d-flex flex-column align-items-center' xs={12} md={12} lg={12}>
            <textarea className='mx-auto m-3' style={{ width: "100%" }} placeholder="Deja tu comentario... " value={comment} onChange={handleChanges}></textarea>
            <Button className='btn-card-place m-3' onClick={handleClick}>Enviar</Button>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}


export default connect(mapStateToProps)(ModalForo);
