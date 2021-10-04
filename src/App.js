import './App.css';
import Main from './pages/Main/Main.jsx'
import Intro from './pages/Intro/Intro.jsx'
import LoginBac from './pages/LoginBac/LoginBac.jsx'
import FormPatient from './pages/FormPatient/FormPatient.jsx'
import Table from './pages/Table/Table.jsx'
import ControlCalidad from './pages/ControlCalidad/ControlCalidad.jsx'
import PatientResults from './pages/PatientResults/PatientResults.jsx'
import Statistics from './pages/Statistics/Statistics.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
{/* <LoginBac patient={patient} ></LoginBac> */}
{/* <FormPatient></FormPatient> */}
{/* <Table></Table> */}
{/* <ControlCalidad></ControlCalidad> */}
{/* <Table control={control}></Table> */}
{/* <PatientResults patient={patient}></PatientResults> */}
{/* <Statistics></Statistics> */}

function App() {
  let patient=true;
  let control=true;
  return (
    <Intro></Intro>
  );
}

export default App;
