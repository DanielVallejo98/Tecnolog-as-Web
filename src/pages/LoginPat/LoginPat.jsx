import React from 'react'
import './LoginPat.scss'
import {Form,Button, Container} from "react-bootstrap";
import { useContext, useState } from "react";
import { PatientContext } from "../../contexts/PatientContext.jsx";

import { useHistory } from "react-router-dom";
async function loginPat(documento) {
    return {
      ID:1,  
      NOMBRE: "Daniel Vallejo",
      TOKEN:"12345"
    };
  }


function LoginPat() {
    const date = new Date().getFullYear();
    const history = useHistory();
    const { setPatientLog } = useContext(PatientContext);
    const [documento, setDocumento] = useState("");
    const handleSubmitPat = async (e) => {
        e.preventDefault();
    
        const patientInfo = await loginPat({
          documento
        });
        patientInfo.isLoggedIn = true;
    
        console.log(patientInfo);
        setPatientLog(patientInfo);
        localStorage.setItem("paciente", JSON.stringify(patientInfo));
        history.push(`/resultpatient/${patientInfo.ID}`);
      };



    
    return (
        
        <div className="login-pac-container">
            <Container className="vertical-center">

                    <div id="container-gif">
                        <img src ="https://i.pinimg.com/originals/f9/04/87/f90487220428324b36560cfe22e0b06a.gif" style={{borderRadius:'25rem'}} alt="gif"></img>
                    </div>
                       
            
                
  
                    <div className="container-info">
                        <i className="fas fa-vial fa-10x i-class" style={{position:'relative',bottom:'5rem'}}></i>
                        <h2 style={{fontWeight:'600',position:'relative',bottom:'5rem',marginBottom:'2rem',textAlign:'center'}} >
                            Consulta tus resultados!
                        </h2>

                        <Form style={{position:'relative',bottom:'5rem'}} onSubmit={handleSubmitPat}>

                            <Form.Group className="mb-3" controlId="formBasicPassword" >
                                <Form.Label>Ingresa tu documento de identificación.</Form.Label>
                                <Form.Control type="number" placeholder="D.I" onChange={(e) => setDocumento(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit" style={{display:'block',width:'100%'}}>
                                Ingresar
                            </Button>
                        </Form>
                        
                            

                            

                            
                        <div style={{position:'relative',bottom:'2rem',textAlign:'center'}}>
                            © {date}
                        </div>
                    </div>

            </Container>       
        </div>
    )
}

export default LoginPat
