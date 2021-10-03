import './App.css';
import Main from './pages/Main/Main.jsx'
import Intro from './pages/Intro/Intro.jsx'
import LoginBac from './pages/LoginBac/LoginBac.jsx'
import FormPatient from './pages/FormPatient/FormPatient.jsx'
import Table from './pages/Table/Table.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
{/* <LoginBac patient={patient} ></LoginBac> */}
{/* <FormPatient></FormPatient> */}
function App() {
  let patient=false;
  return (
    <Table></Table>
  );
}

export default App;
