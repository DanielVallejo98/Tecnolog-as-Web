import React from 'react'
import './Appointment.scss'
import {Form,Button,Row,Col } from "react-bootstrap";
import  BackButton  from "../../components/BackButton/BackButton.jsx";
import { useHistory } from "react-router-dom";
function Appointment() {
    const history=useHistory()
    return (
        <div className="location">
            <div style={{width:'100%', display:'flex',justifyContent:'space-between'}}>
                <BackButton route="/pacientes"></BackButton>
 

  
            </div>
            <div className="title">
                <h1 style={{fontWeight:'800',margin:'0'}} >Agregar resultados de cita nueva</h1>
                <h6 style={{textAlign:'end',color:'#fff'}} className="mb-3 subtitle">Sistema LIS.</h6>
            </div>
        <div>
            <Form onSubmit={()=>{history.push("/pacientes")}}>
            <div style={{display:'flex'}}>
            <Col>
            <h6 style={{textAlign:'center',color:'#000'}} className="mb-3 subtitle">Paciente: <span>Daniel Vallejo</span></h6>
            <h6 style={{textAlign:'center',color:'#000'}} className="mb-3 subtitle">Documento: <span>12345</span></h6>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="COLESTEROLTOTAL1">
                    <Form.Label>Colesterol Total</Form.Label>
                    <Form.Control type="text" placeholder="Colesterol" />

                    </Form.Group>

                    <Form.Group as={Col} controlId="TRIGLICÉRIDOS1">
                    <Form.Label>Triglicéridos</Form.Label>
                    <Form.Control type="text" placeholder="Triglicéridos" />
 
                    </Form.Group>
                </Row>

     

                <Row className="mb-3">
                <Form.Group as={Col} controlId="HDL1">
                    <Form.Label>HDL</Form.Label>
                    <Form.Control type="text" placeholder="HDL" />

                    </Form.Group>

                    <Form.Group as={Col} controlId="LDL1">
                    <Form.Label>LDL</Form.Label>
                    <Form.Control type="text" placeholder="LDL" />

                    </Form.Group>
                </Row>
                </Col>

                </div>
  

                <Button type="submit" className="mt-3" style={{display:'block',textAlign:'center',width:'100%'}}>Guardar</Button>
            </Form>
        </div>
        </div>
    )
}

export default Appointment
