import React, { useState } from 'react'
import ModalCard from './ModalCard'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const PlaceCard = (props) => {
  const [viewModal, setViewModal] = useState(false);
  const modalToggle = () => setViewModal(!viewModal)

  return (

    <section className='card-place'>
      <Card className='cards'>
        <Card.Header className='text-center card-header'><h6>{props.name}</h6></Card.Header>
        <img className='m-3 mx-auto' width="80%" height="160px" variant="top" src={props.image} />
        <Card.Body className='mx-auto' >
          <Button className='btn-card-place' onClick={modalToggle}>Más información</Button>
          <ModalCard show={viewModal} onHide={modalToggle} name1={props.name} cont2={props.cont} descriptionsP={props.description} image1={props.image} promotionsP={props.promotions} lat3={props.lat2} lng3={props.lng2} comments1={props.comments}/>
        </Card.Body>
      </Card>
    </section>

  )
}

export default PlaceCard;
