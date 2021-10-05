import React from 'react'
import './LoginBac.scss'
import {Form,Button, Container } from "react-bootstrap";
import { useContext, useState } from "react";
import { BacContext } from "../../contexts/BacContext.jsx";
import { useHistory } from "react-router-dom";

async function loginBac(contraseña) {
    return {
      ID:1,  
      NOMBRE: "Antonio Morales",
      TOKEN:"12345"
    };
  }

function LoginBac() {
    const date = new Date().getFullYear();
    const history = useHistory();
    
    const { setBacLog } = useContext(BacContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


  

 
  const handleSubmitBac = async (e) => {
    e.preventDefault();

    const bacInfo = await loginBac({
      username,
      password
    });
    bacInfo.isLoggedIn = true;

    console.log(bacInfo);
    setBacLog(bacInfo);
    localStorage.setItem("bac", JSON.stringify(bacInfo));
    history.push(`/main`);
  };
    return (
        
        <div className="login-bac-container">
            <Container className="vertical-center">

                            <div id="container-beaker">
                                <div id="beaker">
                                    <div id="liquid">
                                        <div className="bubble"></div>
                                        <div className="bubble"></div>
                                        <div className="bubble"></div>
                                        <div className="bubble"></div>
                                        <div className="bubble"></div>
                                        <div className="bubble"></div>
                                        <div className="bubble"></div>
                                    </div>
                                </div>
                                <div id="tube">
                                    <div id="liquid-tube">
                                        <div className="bubble2"></div>
                                        <div className="bubble2"></div>
                                        <div className="bubble2"></div>
                                    </div>
                                </div>
                            </div>
            
                
  
                    <div className="container-info">
                        <i className="fas fa-vial fa-10x i-class" style={{position:'relative',bottom:'5rem'}}></i>
                        <h2 style={{fontWeight:'600',position:'relative',bottom:'5rem',marginBottom:'2rem',textAlign:'center'}} >
                            Ingresa al sistema!
                        </h2>

                        <Form style={{position:'relative',bottom:'5rem'}} onSubmit={handleSubmitBac}>

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu correo" onChange={(e) => setUsername(e.target.value)}/>
                                <Form.Text className="text-muted">
                                No compartiremos tu cuenta con nadie.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
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

export default LoginBac
