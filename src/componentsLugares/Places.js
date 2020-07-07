import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PlacesCard from './PlaceCard'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'


const Places = () => {
    const [viewPlaces, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('https://us-central1-aglomer-9c6d9.cloudfunctions.net/place')
            .then(res => {
                const placesinit = res.data;
                setPlaces(placesinit);
            })
    }, [])

    console.log(viewPlaces);
    return (
        <Container className='container-cards'>
            <div className='title-places'><h2>Lugares de interés para tí!!</h2></div>
            <CardDeck className='justify-content-center'>
                {
                    viewPlaces.map((arr, indx) => {
                        return (
                            <PlacesCard key={indx} name={arr.name} cont={arr.number_people} image={arr.picture} description={arr.description} promotions={arr.promotions} lat2={arr.lat} lng2={arr.lng} comments={arr.comments} />
                        )
                    })
                }
            </CardDeck>
        </Container>
    )
}

export default Places;
