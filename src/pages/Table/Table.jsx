import React from 'react'
import MaterialTable from '@material-table/core';
import  BackButton  from "../../components/BackButton/BackButton.jsx";
import { useHistory } from "react-router-dom";
import './Table.scss'

const columnasPacientes=[
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
const datosPacientes=[
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
const columnasControl=[
    {
        title:'Fecha',
        field:'fecha',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'Bacteriólogo',
        field:'bac',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'Colesterol total nivel 1',
        field:'coles1',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'Triglicéridos nivel 1',
        field:'tri1',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'HDL nivel 1',
        field:'hdl1',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'LDL nivel 1',
        field:'ldl1',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'Colesterol total nivel 2',
        field:'coles2',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'Triglicéridos nivel 2',
        field:'tri2',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'HDL nivel 2',
        field:'hdl2',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    {
        title:'LDL nivel 2',
        field:'ldl2',
        type:'numeric',
        cellStyle: {
            textAlign: "center"
        },
        headerStyle:{
            textAlign: "center"
            
        }

    },
    
]
const datosControl=[
    {fecha:'3/10/21',bac:'bacteriologo1',coles1:1.1, tri1:2.1, hdl1:2.1, ldl1:1.1,coles2:1.1, tri2:0.5, hdl2:0.5, ldl2:0.5},
    {fecha:'2/10/21',bac:'bacteriologo1',coles1:1.2, tri1:2.1, hdl1:2.1, ldl1:2.1,coles2:2.1, tri2:2.1, hdl2:0.5, ldl2:0.5},
    {fecha:'1/10/21',bac:'bacteriologo2',coles1:1.2, tri1:2.1, hdl1:2.1, ldl1:0.5,coles2:0.5, tri2:0.5, hdl2:0.5, ldl2:0.5},
    {fecha:'30/9/21',bac:'bacteriologo2',coles1:1.2, tri1:13.1, hdl1:2.1, ldl1:1.1,coles2:1.1, tri2:1.1, hdl2:1.1, ldl2:1.1},
    {fecha:'29/9/21',bac:'bacteriologo2',coles1:1.2, tri1:4.1, hdl1:0.1, ldl1:1.1,coles2:1.1, tri2:1.1, hdl2:1.1, ldl2:1.1},
    {fecha:'28/9/21',bac:'bacteriologo3',coles1:1.2, tri1:4.1, hdl1:0.1, ldl1:0.1,coles2:0.1, tri2:0.1, hdl2:0.1, ldl2:0.1},
    {fecha:'28/9/21',bac:'bacteriologo3',coles1:1.2, tri1:4.1, hdl1:0.1, ldl1:0.1,coles2:0.1, tri2:0.1, hdl2:0.1, ldl2:0.1},
    {fecha:'28/9/21',bac:'bacteriologo1',coles1:1.12, tri1:1.1, hdl1:1.2, ldl1:1.1,coles2:1.1, tri2:1.1, hdl2:1.1, ldl2:1.1},
    {fecha:'28/9/21',bac:'bacteriologo3',coles1:1.21, tri1:1.1, hdl1:1.1, ldl1:1.1,coles2:1.1, tri2:1.1, hdl2:1.1, ldl2:1.1},
    {fecha:'27/9/21',bac:'bacteriologo3',coles1:1.1, tri1:1.1, hdl1:1.1, ldl1:1.1,coles2:1.1, tri2:1.1, hdl2:1.1, ldl2:1.1},
    {fecha:'27/9/21',bac:'bacteriologo2',coles1:1.123, tri1:1.1, hdl1:1.1, ldl1:1.1,coles2:1.1, tri2:1.1, hdl2:1.1, ldl2:1.1},
    {fecha:'26/9/21',bac:'bacteriologo2',coles1:3.1, tri1:1.1, hdl1:1.1, ldl1:1.1,coles2:1.1, tri2:1.1, hdl2:1.1, ldl2:1.1},
    
]
function Table({control}) {
    const history = useHistory()
    return (
        <div className="table-container">
            <div className="top-table pb-3" >
                <BackButton route="/main"></BackButton>
                <div style={{width:'80%',textAlign:'center',display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
                <h2 style={{color:'rgb(50 48 48 / 87%)',fontWeight:'700'}}>Sistema LIS</h2>
                </div>
                <div style={{width:'100%',textAlign:'right',position:'relative'}}>
                    <h6 style={{position:'absolute',bottom:'-1rem',right:'0',color:'green',fontWeight:'400'}}>{
                        control?'Consulta información de los controles de calidad realizados.':'Consulta información de los pacientes.'}</h6>
                </div>
            </div>
            
        {control ? (
            <>
            <MaterialTable 
                columns={columnasControl}
                data={datosControl}
                title="Control de calidad" 
                actions={
                    [
                        {
                            icon: 'add',
                            tooltip:'Mira información estadística del control de calidad para esta fecha',
                            onClick:(event,rowData)=>  {
                                
                                history.push("/estadisticaspordia/1")
                            
                            }
                            
                        },
                        {
                            icon: 'edit',
                            tooltip:'edita los datos del paciente',
                            onClick:(event,rowData)=>alert("editar: "+rowData.nombre)
                        },

                        {
                            icon: 'delete',
                            tooltip:'Eliminar paciente del sistema',
                            onClick:(event,rowData)=>window.confirm("eliminar paciente del sistema")
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

            </>
        ):(
            <>
            <MaterialTable
                columns={columnasPacientes}
                data={datosPacientes}
                title="Listado de pacientes"               
                actions={
                    [
                        {
                            icon: 'add',
                            tooltip:'Agrega una cita el paciente',
                            onClick:(event,rowData)=>{history.push("/cita/1")}
                        },
                        {
                            icon: 'edit',
                            tooltip:'edita los datos del paciente',
                            onClick:(event,rowData)=>alert("editar: "+rowData.nombre)
                        },
                        {
                            icon: 'search',
                            tooltip:'Ver más información del paciente',
                            onClick:(event,rowData)=>{ history.push("/resultspatient/1")}
                        },
                        {
                            icon: 'delete',
                            tooltip:'Eliminar paciente del sistema',
                            onClick:(event,rowData)=>window.confirm("eliminar paciente del sistema")
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
        </>
        )
    }
    </div> 
    )
}

export default Table
