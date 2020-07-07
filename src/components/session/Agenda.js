import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

const mapProps = (state) => {
    return {
        user1: state.user
    }
}



const Agenda = ({ user1 }) => {
    const [asistir, setAsistir] = useState([]);
    const [talvez, setTalvez] = useState([])
    useEffect(() => {
        axios.get(`https://us-central1-aglomer-9c6d9.cloudfunctions.net/user/AD GC`)
            .then(res => {
                const dataUser = res.data
                setAsistir(dataUser.agendaAsistir);
                setTalvez(dataUser.agendaTalvez);
                console.log(dataUser)
            })
    }, []);
    console.log(asistir)
    console.log(user1)
    return (
        <div className='container-agenda'>
            <div className='agenda'>
                <div><h1 className='text-center m-3'>Mi Agenda</h1></div>
                <div>
                    <h3>Asistiré</h3>
                    {
                        asistir.map((arr, index) => {
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
                <div>
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

export default connect(mapProps)(Agenda)