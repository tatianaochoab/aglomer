import React, { useState, useEffect } from 'react';
import ForoCard from './ForoCard'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import axios from 'axios'


const Foro = () => {
    const [viewForo, setForo] = useState([]);
    useEffect(() => {
        axios.get('https://us-central1-aglomer-9c6d9.cloudfunctions.net/place')
            .then(res => {
                const foroInit = res.data;
                setForo(foroInit);
            })
    }, [])


    return (
        <Container className='container-foro' fluid='md sm'>
            <div className='title-foro'><h2>¿Qué opina la gente?</h2></div>
            <CardDeck>
                {
                    viewForo.map((arr, indx) => {
                        return (
                            <ForoCard key={indx} image={arr.picture} name={arr.name} comments={arr.comments} />
                        )
                    })
                }
            </CardDeck>
        </Container>
    )
}
export default Foro;