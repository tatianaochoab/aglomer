import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Calendar from 'react-calendar'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import 'react-calendar/dist/Calendar.css'

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const RegCalendarTime = ({ show, onHide, name2, user, type, selT, number }) => {
    const [cont, setCont] = useState(type);
    const [date, setDate] = useState(new Date());
    const [hora, setHora] = useState('')

    useEffect(() => {
        const contJson = {
            selT: cont
        }

        axios.put(`https://us-central1-aglomer-9c6d9.cloudfunctions.net/place/${name2}`, contJson)


    });


    const changeDate = (dateP) => {
        // let fecha1 = [
        //     dateP.getMonth(),
        //     dateP.getFullYear(),
        //     dateP.getDate()
        // ]
        setDate(dateP)
    }


    const contMore = () => {
        setCont(cont + 1);
        let d = new Date();
        let dFecha = [d.getDate(), d.getMonth(), d.getFullYear()];
        let timeTotal = [d.getHours(), d.getMinutes(), d.getSeconds()];

        //setFecha(dFecha.join('/'));
        //setTime(timeTotal.join(':'));
        const userJson = {
            'user_name': user.displayName,
            'date': dFecha.join('/'),
            'time': timeTotal.join(':')
        }
        const agendaJson = {
            'horaPlan': hora,
            'fechaPlan': date.toString().substring(4,15),
            'lugar': name2
        }

        axios.post(`https://us-central1-aglomer-9c6d9.cloudfunctions.net/user/${user.displayName}/${number}`, agendaJson)

        axios.post(`https://us-central1-aglomer-9c6d9.cloudfunctions.net/place/${name2}/${number}`, userJson)

        //setContJ(contJson);
        //setUserJ(userJson);
        alert("Tu asistencia quedó registrada")
    }

    const onHandleHora = (e) => { setHora(e.target.value) }

    // console.log(date.toString().substring(0,15));
    return (
        <Modal show={show} onHide={onHide} animation={false}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className='d-flex flex-column align-items-center'>
                <Calendar onChange={changeDate} value={date} />
                <form className='align-self-center m-3 d-flex flex-column'>
                    <label><p>Ingresa la hora a la que asistirás</p></label>
                    <input type='time' onChange={onHandleHora} value={hora}></input>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button className='btn-card-place' onClick={contMore}>Confirmar</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default connect(mapStateToProps)(RegCalendarTime);
