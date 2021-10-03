import React from 'react'
import './LoginBac.scss'
import {Form,Button, Container,Row } from "react-bootstrap";

function LoginBac({patient}) {
    const date = new Date().getFullYear();
    return (
        
        <div className={patient ?'login-pac-container':'login-bac-container'}>
            <Container className="vertical-center">
                {patient?(
                    <div id="container-gif">
                        <img src ="https://i.pinimg.com/originals/f9/04/87/f90487220428324b36560cfe22e0b06a.gif" style={{borderRadius:'25rem'}}></img>
                    </div>
                        ):(
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
                            </div>)
                            }
            
                
  
                    <div className="container-info">
                        <i className="fas fa-vial fa-10x i-class" style={{position:'relative',bottom:'5rem'}}></i>
                        <h2 style={{fontWeight:'600',position:'relative',bottom:'5rem',marginBottom:'2rem',textAlign:'center'}} >
                            {patient?'Consulta tus resultados!':'Ingresa al sistema!'}
                        </h2>
                        <Form style={{position:'relative',bottom:'5rem'}}>
                        {patient?(
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Ingresa tu documento de identificación.</Form.Label>
                                <Form.Control type="password" placeholder="D.I" />
                            </Form.Group>
                        ):( <>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu correo" />
                                <Form.Text className="text-muted">
                                No compartiremos tu cuenta con nadie.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>
                            </>
                            )
                            }
                            

                            

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
