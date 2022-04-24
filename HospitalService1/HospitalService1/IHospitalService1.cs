using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Data;

namespace HospitalService1
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService1" in both code and config file together.
    [ServiceContract]
    public interface IHospitalService1
    {
        [OperationContract]
        getAllApp getallapp(string pid);

        [OperationContract]
        getAllDoctors getDoctors();

        [OperationContract]
        string insertDoctor(Doctor doctor);

        [OperationContract]
        string updateDoctor(Doctor doctor);

        [OperationContract]
        string deleteDoctor(deleteDoctor dd);

        [OperationContract]
        string validCredential(string uname, string password);

        [OperationContract]
        string ptvalidCredential(string useremail, string password);

        // For Patients

        [OperationContract]
        string insertPatient(Patient patient);

        [OperationContract]
        string updatePatient(Patient patient);

        [OperationContract]
        void logout();

        /*
         For Booking Appointments
          
         */
        [OperationContract]
        string bookAppointment(BookApp bapp);



        // TODO: Add your service operations here
    }


    [DataContract]
    public class BookApp
    {
        string ademail = string.Empty;
        string apemail = string.Empty;
        string adesc = string.Empty;
        string date = string.Empty;

        [DataMember]
        public string ad_email
        {
            get { return ademail; }
            set { ademail = value; }
        }
        [DataMember]
        public string ap_email
        {
            get { return apemail; }
            set { apemail = value; }
        }
        [DataMember]
        public string a_desc
        {
            get { return adesc; }
            set { adesc = value; }
        }
        [DataMember]
        public string a_date
        {
            get { return date; }
            set { date = value; }
        }
    }


    [DataContract]
    public class Patient
    {
        string pname = string.Empty;
        string pemail = string.Empty;
        string pcontact = string.Empty;
        string pass1 = string.Empty;
        string pass2 = string.Empty;

        [DataMember]
        public string p_name
        {
            get { return pname; }
            set { pname = value; }
        }

        [DataMember]
        public string p_email
        {
            get { return pemail; }
            set { pemail = value; }
        }

        [DataMember]
        public string p_contact
        {
            get { return pcontact; }
            set { pcontact = value; }
        }

        [DataMember]
        public string p_passwd1
        {
            get { return pass1; }
            set { pass1 = value; }
        }

        [DataMember]
        public string p_passwd2
        {
            get { return pass2; }
            set { pass2 = value; }
        }
    }

    [DataContract]
    public class getAllApp
    {
        [DataMember]
        public DataTable allApp
        {
            get;
            set;
        }
    }

    [DataContract]
    public class getAllDoctors
    {
        [DataMember]
        public DataTable allDoctor
        {
            get;
            set;
        }
    }

    [DataContract]
    public class deleteDoctor
    {
        int did;
        [DataMember]
        public int d_id
        {
            get { return did; }
            set { did = value; }
        }
    }

    [DataContract]
    public class Doctor
    {
        //int dId;
        string dname = string.Empty;
        string daddress = string.Empty;
        string demail = string.Empty;
        string dcontact = string.Empty;
        string dexperience = string.Empty;
        string dspeciality = string.Empty;


        [DataMember]
        public string d_name 
        { 
            get { return dname; }
            set { dname = value; }
        }

        [DataMember]
        public string d_address
        {
            get { return daddress; }
            set { daddress = value; }
        }

        [DataMember]
        public string d_email
        {
            get { return demail; }
            set { demail = value; }
        }

        [DataMember]
        public string d_contact
        {
            get { return dcontact; }
            set { dcontact = value; }
        }

        [DataMember]
        public string d_experience
        {
            get { return dexperience; }
            set { dexperience = value; }
        }

        [DataMember]
        public string d_speciality
        {
            get { return dspeciality; }
            set { dspeciality = value; }
        }
    }

    // Use a data contract as illustrated in the sample below to add composite types to service operations.
    // You can add XSD files into the project. After building the project, you can directly use the data types defined there, with the namespace "HospitalService1.ContractType".
    [DataContract]
    public class CompositeType
    {
        bool boolValue = true;
        string stringValue = "Hello ";

        [DataMember]
        public bool BoolValue
        {
            get { return boolValue; }
            set { boolValue = value; }
        }

        [DataMember]
        public string StringValue
        {
            get { return stringValue; }
            set { stringValue = value; }
        }
    }
}
