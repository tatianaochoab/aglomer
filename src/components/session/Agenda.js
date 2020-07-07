import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Agenda = (props) => {
    const [asistir, setAsistir] = useState([]);
    const [talvez, setTalvez] = useState([]);

    if (props.user) {
        var name = props.user.displayName
    }

    useEffect(() => {
        if (props.user) {
            axios.get(`https://us-central1-aglomer-9c6d9.cloudfunctions.net/user/${props.user.displayName}`)
                .then(res => {
                    const dataUser = res.data
                    setAsistir(dataUser.agendaAsistir);
                    setTalvez(dataUser.agendaTalvez);
                    console.log(dataUser)
                })
        }
    }, []);
    console.log(asistir)


    console.log(name)
    return (
        <div className='container-agenda'>
            <div className='agenda'>
                <div><h1 className='text-center m-3'>Mi Agenda</h1></div>
                <div className='m-3'>
                    <h3>Asistiré</h3>
                    {
                        asistir.map((arr, index) => {
                            return (
                                <ul key={index}>
                                    <li><strong><p>Lugar:</p></strong>{arr.lugar}</li>
                                    <li><strong><p>Fecha:</p></strong>{arr.fechaPlan}</li>
                                    <li><strong><p>Hora:</p></strong>{arr.horaPlan}</li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div className='m-3'>
                    <h3>Tal vez asistiré</h3>
                    {
                        talvez.map((arr, index) => {
                            return (
                                <ul key={index}>
                                    <li>{arr.lugar}</li>
                                    <li>{arr.fechaPlan}</li>
                                    <li>{arr.horaPlan}</li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Agenda;