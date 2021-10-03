import React from 'react'
import MaterialTable from '@material-table/core';
import  BackButton  from "../../components/BackButton/BackButton.jsx";
import './Table.scss'

const columnas=[
    {
        title:'ID',
        field:'id',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'Nombre',
        field:'nombre',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'Documento',
        field:'documento',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }


    },
    {
        title:'EPS',
        field:'eps',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
        }

    },
]
const datos=[
    {id:1,nombre:'Daniel1 Vallejo Ortega',documento:12456715, eps:'Sanitas'},
    {id:2,nombre:'Daniel2 Vallejo Ortega',documento:12456714, eps:'Sanitas'},
    {id:3,nombre:'Daniel3 Vallejo Ortega',documento:12456713, eps:'Sanitas'},
    {id:4,nombre:'Daniel4 Vallejo Ortega',documento:12456712, eps:'Sanitas'},
    {id:5,nombre:'Daniel5 Vallejo Ortega',documento:12456711, eps:'Sanitas'},
    {id:6,nombre:'Daniel6 Vallejo Ortega',documento:12456710, eps:'Sanitas'},
    {id:7,nombre:'Daniel7 Vallejo Ortega',documento:1245679, eps:'Sanitas'},
    {id:8,nombre:'Daniel8 Vallejo Ortega',documento:1245678, eps:'Sanitas'},
    {id:9,nombre:'Daniel9 Vallejo Ortega',documento:1245677, eps:'Sanitas'},
    {id:10,nombre:'Daniel10 Vallejo Ortega',documento:1245676, eps:'Sanitas'},
    {id:11,nombre:'Daniel11 Vallejo Ortega',documento:1245675, eps:'Sanitas'},
    {id:12,nombre:'Daniel12 Vallejo Ortega',documento:1245674, eps:'Sanitas'},
    {id:13,nombre:'Daniel13 Vallejo Ortega',documento:1245673, eps:'Sanitas'},
    {id:14,nombre:'Daniel14 Vallejo Ortega',documento:1245672, eps:'Sanitas'},
    {id:15,nombre:'Daniel15 Vallejo Ortega',documento:1245671, eps:'Sanitas'},
]
function Table() {
    return (
        <div className="table-container">
            <div className="top-table pb-3" >
                <BackButton></BackButton>
                <div style={{width:'80%',textAlign:'center',display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
                <h2 style={{color:'rgb(50 48 48 / 87%)',fontWeight:'700'}}>Sistema LIS</h2>
                </div>
                <div style={{width:'100%',textAlign:'right',position:'relative'}}>
                    <h6 style={{position:'absolute',bottom:'-1rem',right:'0',color:'green',fontWeight:'400'}}>Consulta información de los pacientes.</h6>
                </div>
            </div>
            <MaterialTable
                columns={columnas}
                data={datos}
                title="Listado de pacientes"
                
                actions={
                    [
                        {
                            icon: 'add',
                            tooltip:'Agrega una cita el paciente',
                            onClick:(event,rowData)=>alert("has presionado el paciente con ombre: "+rowData.nombre)
                        },
                        {
                            icon: 'edit',
                            tooltip:'edita los datos del paciente',
                            onClick:(event,rowData)=>alert("editar: "+rowData.nombre)
                        },
                        {
                            icon: 'search',
                            tooltip:'Ver más información del paciente',
                            onClick:(event,rowData)=>alert("ver historial paciente citas")
                        },
                        {
                            icon: 'delete',
                            tooltip:'Elimnar paciente del sistema',
                            onClick:(event,rowData)=>window.confirm("elimnar paciente del sistema")
                        },
                    ]
                }
                options={{
                    actionsColumnIndex:-1,
                    rowStyle: {
                    backgroundColor: '#EEE',
                    overflowWrap: 'break-word'
                    }
                }}
                localization={
                    {
                        header:{
                            actions:'Acciones'
                        }
                    }
                }
            />
        </div>
    )
}

export default Table
