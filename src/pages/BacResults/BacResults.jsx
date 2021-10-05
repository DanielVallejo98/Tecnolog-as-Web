import React from 'react'
import { Container } from 'react-bootstrap'
import './BacResults.scss'
import  BackButton  from "../../components/BackButton/BackButton.jsx";
import  Patient  from "../../components/Patient/Patient.jsx";


function BacResults() {

    return (
        <div className="location">
            <div style={{width:'100%', display:'flex',justifyContent:'space-between'}}>
                <BackButton route="/pacientes"></BackButton>
 
            </div>
            <div className="title">
                <h1 style={{fontWeight:'800',margin:'0'}} >Resultados</h1>
                <h6 style={{textAlign:'end',color:'#fff'}} className="mb-3 subtitle">Sistema LIS.</h6>
            </div>
            <Container>
                <div className="generic">
                    <div>
                        <p >Nombres </p>
                        <strong> Daniel Vallejo</strong>
                    </div>
                    <div>
                        <p >EPS </p>
                        <strong>  Sanitas</strong>
                    </div>
                    <div>
                        <p>Documento </p>
                        <strong> 12334</strong>
                    </div>

                </div>
  
                        <Patient></Patient>
                        <Patient></Patient>
                        <Patient></Patient>
                        <Patient></Patient>


                
            </Container>
        </div>
    )
}

export default BacResults
