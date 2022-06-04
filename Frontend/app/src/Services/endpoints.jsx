// import { baseURL } from "."



//Base URL
export const baseURL = "http://localhost:9900";


//doctor APIs
export const docControllerURL = baseURL + "/api/auth/doctor";
export const adddoctorURL = docControllerURL + "/add";
export const updateDoctorURL = docControllerURL + "/update";
export const getdoctorIDURL = docControllerURL + "/getById";
export const deletedoctorURL = docControllerURL + "/delete";
export const doctorURL = docControllerURL + "/getAll";

//patient APIs
export const patientControllerURL = baseURL + "/api/auth/patient/";
export const updatepatientURL = patientControllerURL + "update";
export const getpatientIDURL = patientControllerURL + "getById";
export const patientURL = patientControllerURL + "getAll";
export const deletepaitientURL = patientControllerURL + "delete";
export const addPatientURL = patientControllerURL + "add";


//appointment APIs
export const appointmentController = baseURL + "/api/auth/appointment";
export const addapointmentURL =  appointmentController + "/add";
export const updateapointmentURL = appointmentController + "/update";
export const getapointmentIDURL = appointmentController + "/getById";
export const deleteapoinmentURL = appointmentController + "/delete";
export const appointmentURL = appointmentController + "/getAll";

//ambulance APIs
export const ambulanceControllerURL = baseURL + "/api/auth/ambulance";
export const addambulanceURL = ambulanceControllerURL + "/add";
export const getambulanceIDURL = ambulanceControllerURL + "/getById";
export const updateambulanceURL = ambulanceControllerURL + "/update";
export const deleteambulanceURL = ambulanceControllerURL + "/delete";
export const ambulanceURL = ambulanceControllerURL + "/getAll";

//room APIs
export const roomControllerURL = baseURL + "/api/auth/room";
export const getroomIDURL = roomControllerURL + "/getById";
export const updateroomURL = roomControllerURL + "/update";
export const addroomURL = roomControllerURL + "/add";
export const deleteroomURL = roomControllerURL + "/delete";
export const roomURL = roomControllerURL + "/getAll";

//attendant APIs
export const attendantControllerURL = baseURL + "/api/auth/attendant";
export const attendentURL = attendantControllerURL + "/getAll";
export const addattendentURL = attendantControllerURL + "/add";
export const updateattendentURL = attendantControllerURL + "/update";
export const deleteattentdentURL = attendantControllerURL + "/delete";
export const getattedentIDURL = attendantControllerURL + "/getById";

//patient APIs
export const userControllerURL = baseURL + "/api/auth/patient/";
export const addUserURL = userControllerURL + "signup";
export const userURL = userControllerURL + "allUsers";

//Login APIs
// export const loginControllerURL = baseURL + "login/"
export const userLoginURL = baseURL + "/api/auth/attendant/signin";
