// import { baseURL } from "."



//Base URL
export const baseURL = "http://192.168.1.2:8280";


//doctor APIs
export const docControllerURL = baseURL + "/doctor/v1.0.0";
export const adddoctorURL = docControllerURL + "/add";
export const updateDoctorURL = docControllerURL + "/update";
export const getdoctorIDURL = docControllerURL + "/getById";
export const deletedoctorURL = docControllerURL + "/delete";
export const doctorURL = docControllerURL + "/getAll";

//patient APIs
export const patientControllerURL = baseURL + "/patient/v1.0.0";
export const updatepatientURL = patientControllerURL + "/update";
export const getpatientIDURL = patientControllerURL + "/getById";
export const patientURL = patientControllerURL + "/getAll";
export const deletepaitientURL = patientControllerURL + "/delete";
export const addPatientURL = patientControllerURL + "/add";


//appointment APIs
export const appointmentController = baseURL + "/appointment/v1.0.0";
export const addapointmentURL =  appointmentController + "/add";
export const updateapointmentURL = appointmentController + "/update";
export const getapointmentIDURL = appointmentController + "/getById";
export const deleteapoinmentURL = appointmentController + "/delete";
export const appointmentURL = appointmentController + "/getAll";

//ambulance APIs
export const ambulanceControllerURL = baseURL + "/ambulance/v1.0.0";
export const addambulanceURL = ambulanceControllerURL + "/add";
export const getambulanceIDURL = ambulanceControllerURL + "/getById";
export const updateambulanceURL = ambulanceControllerURL + "/update";
export const deleteambulanceURL = ambulanceControllerURL + "/delete";
export const ambulanceURL = ambulanceControllerURL + "/getAll";

//room APIs
export const roomControllerURL = baseURL + "/room/v1.0.0";
export const getroomIDURL = roomControllerURL + "/getById";
export const updateroomURL = roomControllerURL + "/update";
export const addroomURL = roomControllerURL + "/add";
export const deleteroomURL = roomControllerURL + "/delete";
export const roomURL = roomControllerURL + "/getAll";

//attendant APIs
export const attendantControllerURL = baseURL + "/attendant/v1.0.0";
export const attendentURL = attendantControllerURL + "/getAll";
export const addattendentURL = attendantControllerURL + "/add";
export const updateattendentURL = attendantControllerURL + "/update";
export const deleteattentdentURL = attendantControllerURL + "/delete";
export const getattedentIDURL = attendantControllerURL + "/getById";

//patient APIs
export const userControllerURL = baseURL + "/patient//v1.0.0";
export const addUserURL = userControllerURL + "signup";
export const userURL = userControllerURL + "allUsers";

//Login APIs
// export const loginControllerURL = baseURL + "login/"
export const userLoginURL = attendantControllerURL + "/signin";
