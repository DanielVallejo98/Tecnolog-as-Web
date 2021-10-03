import { Row, Container,Navbar,Nav,NavDropdown,Form,FormControl,Button } from "react-bootstrap";
import './Main.css'
import { useState } from "react";
import  MyCard  from "../../components/Card/MyCard.jsx";
//import  Header  from "../../components/Header/Header.jsx";

function Main() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const toggleMenuLateral = () => {
        setMenuAbierto(!menuAbierto);
      };
    return (
        <div className='main-page-container'>
        {/* <Header menuClickedFunction={toggleMenuLateral}></Header> */}
        
        {/* <Header></Header> */}
        
        <Container  className="vertical-center">  

            <Row className="justify-content-center ">
            
                   <MyCard
                        header="Ingreso" 
                        link="/img/datos_paciente.jpg" 
                        title="Ingresar nuevo paciente"
                        text="Ingresa los datos personales de un paciente y su perfíl lipídico"
                        msgBtn="Nuevo"
                        >
                    </MyCard>
                   <MyCard
                        header="Listado" 
                        link="/img/pacientes.jpg" 
                        title="Listdo de pacientes"
                        text="Consulta la información de todos los pacientes registrados en el sistema"
                        msgBtn="Consultar"
                        >
                    </MyCard>
                   <MyCard
                        header="CC" 
                        link="/img/cc1.jpg" 
                        title="Control de calidad 1 Y 2"
                        text="Realiza un control de calidad de nivel 1 y 2 del dispositivo"
                        msgBtn="Realizar"
                        >
                    </MyCard>
                   <MyCard
                        header="Estadísticas" 
                        link="/img/cc2.jpg" 
                        title="Estadísticas del control de calidad"
                        text="Revisa medidas estadísticas como media, varianza, etc."
                        msgBtn="Realizar"
                        >
                    </MyCard>

            </Row>
        </Container>
        </div>
        );
}

export default Main;