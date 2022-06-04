import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import AmbulanceCreate from "./Pages/Ambulance/AmbulanceCreate";
import AmbulanceUpdate from "./Pages/Ambulance/AmbulanceUpdate";
import AddUser from "./Pages/User/AddUser";
import AmbulanceList from "./Pages/Ambulance/AmbulanceList";
import CreatePatient from "./Pages/Patient/CreatePatient";
import UserLogin from "./Pages/User/UserLogin";
import PatientList from "./Pages/Patient/PatientList";
import UpdatePatient from "./Pages/Patient/UpdatePatient";
import CreateAppointment from "./Pages/Appointment/CreateAppointment";
import AppointmentList from "./Pages/Appointment/AppointmentList";
import UpdateAppointment from "./Pages/Appointment/UpdateAppointment";
import DoctorList from "./Pages/Doctor/DoctorList";
import CreateDoctor from "./Pages/Doctor/CreateDoctor";
import RoomList from "./Pages/Room/RoomList";
import CreateRoom from "./Pages/Room/CreateRoom";
import AttendantList from "./Pages/Attendant/AttendantList";
import CreateAttendant from "./Pages/Attendant/CreateAttendant";
import UpdateRoom from "./Pages/Room/UpdateRoom";
import UpdateAttendant from "./Pages/Attendant/UpdateAttendent";
import UpdateDoctor from "./Pages/Doctor/UpdateDoctor";
import AboutDoctor from "./Pages/Doctor/AboutDoctor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/about">
            <AboutDoctor />
          </Route>
          <Route exact path="/">
            <UserLogin />
          </Route>
          <Route path="/doctorList">
            <DoctorList />
          </Route>
          <Route path="/createDoctor">
            <CreateDoctor />
          </Route>
          <Route path="/updateDoctor">
            <UpdateDoctor />
          </Route>
          <Route path="/createPatient">
            <CreatePatient />
          </Route>
          <Route path="/patientList">
            <PatientList />
          </Route>
          <Route path="/updatePatient">
            <UpdatePatient />
          </Route>
          <Route path="/createAppointment">
            <CreateAppointment />
          </Route>
          <Route path="/appointmentList">
            <AppointmentList />
          </Route>
          <Route path="/updateAppointment">
            <UpdateAppointment />
          </Route>
          <Route path="/createAmbulance">
            <AmbulanceCreate />
          </Route>
          <Route path="/updateAmbulance">
            <AmbulanceUpdate />
          </Route>
          <Route path="/ambulanceList">
            <AmbulanceList />
          </Route>
          <Route path="/roomList">
            <RoomList />
          </Route>
          <Route path="/createRoom">
            <CreateRoom />
          </Route>
          <Route path="/updateRoom">
            <UpdateRoom />
          </Route>
          <Route path="/attendantList">
            <AttendantList />
          </Route>
          <Route path="/createAttendant">
            <CreateAttendant />
          </Route>
          <Route path="/updateAttendent">
            <UpdateAttendant />
          </Route>
          <Route path="/addUser">
            <AddUser />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
