import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import logo_black from '../images/logo_black.png';
import { FaRegSmileBeam } from "react-icons/fa";
import { FaRegSurprise } from "react-icons/fa";
import { GiGlassCelebration } from "react-icons/gi";



const CardsGrid = (image) => {
    return (
            <div className="wrapper">
                <div className="item item1">
                    <Card.Body>
                        <Card.Title className='title-cards-grid'>Aglomer</Card.Title>
                        <Card.Text>
                            ¿Quieres disfrutar de espacios y tiempo de calidad? ¡Aquí puedes encontrarlo!
                        </Card.Text>
                        <Card.Link href="#" ><strong>¡Si quiero!<GiGlassCelebration /></strong></Card.Link>
                    </Card.Body>
                </div>
                <div className="item item2">
                    <Card.Body>
                        <Card.Img className='m-3' src={logo_black} />
                        <Card.Text>
                            Quieres espacios y tiempo de calidad, fuera de exceso de personas. ¡Ingresa ya!
                        </Card.Text>
                        <Button className='btn-card-place'>Ingresar</Button><br /><br /><br />
                    </Card.Body>
                </div>
                <div className="item item3">
                    <Card.Body >
                        <Card.Title className='title-cards-grid'>Aglomer Foro</Card.Title>
                        <Card.Text>
                            Que dice la gente?
                        </Card.Text>
                        <Card.Subtitle className="mb-2 subtitle-card-grid">Ayudanos de hacer de tu espacio y tiempo, uno mejor para todos</Card.Subtitle>
                        <Card.Link href="#"><strong>¿En serio?<FaRegSurprise /></strong></Card.Link>
                        <Card.Link href="#"><strong>¡Opinar!<FaRegSmileBeam /></strong></Card.Link>
                    </Card.Body>
                </div>
                <div className="item item4">
                    <Card.Body>
                        <Card.Title className='title-cards-grid'>Aglomer Lugares</Card.Title>
                        <Card.Text>
                            ¡Enterate de todo! con la gran oferta de lugares que manejamos no te vas a perder las mejores promociones y eventos de la ciudad
                        </Card.Text>
                        <Button className='btn-card-place'>Ve a algún lugar</Button>
                    </Card.Body>
                </div>
            </div>
    )
}
export default CardsGrid;
