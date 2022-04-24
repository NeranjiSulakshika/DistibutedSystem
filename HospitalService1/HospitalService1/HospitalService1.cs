using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;

namespace HospitalService1
{
    
    public class HospitalService1 : IHospitalService1
    {
      

        public string bookAppointment(BookApp bapp)
        {
            string msg = "";
            SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\EVIS\Downloads\WCF-Hospital-Management-System-main\WCFProject_CE055_CE025_CE022\HospitalService1\HostHospital\HPDB.mdf;Integrated Security=True");
            con.Open();
            SqlCommand cmd1 = new SqlCommand("Select * from Doctor", con);
            cmd1.CommandType = CommandType.Text;
            SqlDataReader dr;
            dr = cmd1.ExecuteReader();
            while (dr.Read())
            {
                if (bapp.ad_email.Equals(dr["d_email"]))
                {
                    dr.Close();
                    SqlCommand cmd2 = new SqlCommand("Insert into Appointment (ad_email, ap_email, a_desc, a_date) values(@ademail, @apemail, @adesc, @date)", con);
                    cmd2.Parameters.AddWithValue("@ademail", bapp.ad_email);
                    cmd2.Parameters.AddWithValue("@apemail", bapp.ap_email);
                    cmd2.Parameters.AddWithValue("@adesc", bapp.a_desc);
                    cmd2.Parameters.AddWithValue("@date", bapp.a_date);
                    int g = cmd2.ExecuteNonQuery();
                    if (g == 1)
                    {
                        msg = "Appointment Booked Successfully!";
                        return (msg);
                    }
                    else
                    {
                        msg = "Failed to Register!";
                        return (msg);
                    }
                }
                else
                { 
                    msg = "Doctor Does not Exist!";
                }
            }
            return (msg);
        }

        public string ptvalidCredential(string useremail, string password)
        {
            string msg = "";
            SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\EVIS\Downloads\WCF-Hospital-Management-System-main\WCFProject_CE055_CE025_CE022\HospitalService1\HostHospital\HPDB.mdf;Integrated Security=True");
            con.Open();
            SqlCommand cmd = new SqlCommand("Select * from Patient", con);

            cmd.CommandType = CommandType.Text;

            SqlDataReader dr;
            dr = cmd.ExecuteReader();
            while (dr.Read())
            {
                if (useremail.Equals(dr["p_email"]) && password.Equals(dr["p_passwd1"]))
                {
                    msg = "true";
                    break;
                }
                else
                {
                    msg = "false";
                }
            }
            dr.Close();
            return (msg);
        }

        public string validCredential(string uname, string password)
        {
            string msg = "";
            SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\EVIS\Downloads\WCF-Hospital-Management-System-main\WCFProject_CE055_CE025_CE022\HospitalService1\HostHospital\HPDB.mdf;Integrated Security=True");
            con.Open();
            SqlCommand cmd = new SqlCommand("Select * from Admin", con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable("AdminTable");
            da.Fill(dt);
            DataRow dr = dt.Rows[0];
            if (uname.Equals(dr[1]) && password.Equals(dr[2]))
            {
                msg = "true";
            }
            else
            {
                msg = "false";
            }
            return (msg);
        }

        public string deleteDoctor(deleteDoctor dd)
        {
            string msg;
            SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\EVIS\Downloads\WCF-Hospital-Management-System-main\WCFProject_CE055_CE025_CE022\HospitalService1\HostHospital\HPDB.mdf;Integrated Security=True");
            con.Open();
            SqlCommand cmd = new SqlCommand("Delete Doctor where d_id = @did", con);
            cmd.Parameters.AddWithValue("@did", dd.d_id);
            int g = cmd.ExecuteNonQuery();
            if (g == 1)
            {
                msg = "Doctor Deleted Successfully!";
            }
            else
            {
                msg = "Failed to Deleted!";
            }
            return (msg);
        }

        public string insertPatient(Patient patient)
        {
            string msg = "";
            SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\EVIS\Downloads\WCF-Hospital-Management-System-main\WCFProject_CE055_CE025_CE022\HospitalService1\HostHospital\HPDB.mdf;Integrated Security=True");
            con.Open();
            string query = "select p_email from Patient where p_email = @pemail";
            SqlCommand cmd1 = new SqlCommand(query, con);
            cmd1.Parameters.AddWithValue("@pemail", patient.p_email);
            SqlDataReader dr = cmd1.ExecuteReader();
            if (dr.HasRows)
            {
                msg = "Patient is Already Exist!";
            }
            else
            {
                dr.Close();
                SqlCommand cmd2 = new SqlCommand("Insert into Patient (p_name, p_email, p_contact, p_passwd1, p_passwd2) values(@pname, @pemail, @pcontact, @pass1, @pass2)", con);
                cmd2.Parameters.AddWithValue("@pname", patient.p_name);
                cmd2.Parameters.AddWithValue("@pemail", patient.p_email);
                cmd2.Parameters.AddWithValue("@pcontact", patient.p_contact);
                cmd2.Parameters.AddWithValue("@pass1", patient.p_passwd1);
                cmd2.Parameters.AddWithValue("@pass2", patient.p_passwd2);
                int g = cmd2.ExecuteNonQuery();
                if (g == 1)
                {
                    msg = "Registered Successfully!";
                }
                else
                {
                    msg = "Failed to Register!";
                }
            }
            return (msg);
        }
        public string insertDoctor(Doctor doctor)
        {
            string msg;
            SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\EVIS\Downloads\WCF-Hospital-Management-System-main\WCFProject_CE055_CE025_CE022\HospitalService1\HostHospital\HPDB.mdf;Integrated Security=True");
            con.Open();
            SqlCommand cmd = new SqlCommand("Insert into Doctor (d_name, d_address, d_email, d_contact, d_experience, d_speciality) values(@dname, @daddress, @demail, @dcontact, @dexperience, @dspeciality)", con);
            cmd.Parameters.AddWithValue("@dname", doctor.d_name);
            cmd.Parameters.AddWithValue("@daddress", doctor.d_address);
            cmd.Parameters.AddWithValue("@demail", doctor.d_email);
            cmd.Parameters.AddWithValue("@dcontact", doctor.d_contact);
            cmd.Parameters.AddWithValue("@dexperience", doctor.d_experience);
            cmd.Parameters.AddWithValue("@dspeciality", doctor.d_speciality);

            int g = cmd.ExecuteNonQuery();
            if (g == 1)
            {
                msg = "Doctor Successfully Added!";
            }
            else
            {
                msg = "Failed to Insert Doctor!";
            }
            con.Close();
            return (msg);
        }

        public string updatePatient(Patient patient)
        {
            string msg = "";
            SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\EVIS\Downloads\WCF-Hospital-Management-System-main\WCFProject_CE055_CE025_CE022\HospitalService1\HostHospital\HPDB.mdf;Integrated Security=True");
            con.Open();
            SqlCommand cmd = new SqlCommand("Update Patient set p_name = @pname, p_email = @pemail, p_contact = @pcontact, p_passwd1 = @pass1, p_passwd2 = @pass2 where p_email = @pemail", con);
            cmd.Parameters.AddWithValue("@pname", patient.p_name);
            cmd.Parameters.AddWithValue("@pemail", patient.p_email);
            cmd.Parameters.AddWithValue("@pcontact", patient.p_contact);
            cmd.Parameters.AddWithValue("@pass1", patient.p_passwd1);
            cmd.Parameters.AddWithValue("@pass2", patient.p_passwd2);
            int g = cmd.ExecuteNonQuery();
            if (g == 1)
            {
                msg = "Update Successfully!";
            }
            else
            {
                msg = "Failed to Update";
            }
            return (msg);
        }

        public string updateDoctor(Doctor doctor)
        {
            string msg = "";
            SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\EVIS\Downloads\WCF-Hospital-Management-System-main\WCFProject_CE055_CE025_CE022\HospitalService1\HostHospital\HPDB.mdf;Integrated Security=True");
            con.Open();
            SqlCommand cmd = new SqlCommand("Update Doctor set d_name = @dname, d_address = @daddress, d_email = @demail, d_contact = @dcontact, d_experience = @dexperience, d_speciality = @dspeciality where d_email = @demail", con);
            cmd.Parameters.AddWithValue("@dname", doctor.d_name);
            cmd.Parameters.AddWithValue("@daddress", doctor.d_address);
            cmd.Parameters.AddWithValue("@demail", doctor.d_email);
            cmd.Parameters.AddWithValue("@dcontact", doctor.d_contact);
            cmd.Parameters.AddWithValue("@dexperience", doctor.d_experience);
            cmd.Parameters.AddWithValue("@dspeciality", doctor.d_speciality);

            int g = cmd.ExecuteNonQuery();
            if (g == 1)
            {
                msg = "Doctor Successfully Updated!";
            }
            else
            {
                msg = "Doctor Does not Exist!";
            }
            return (msg);
        }

        public getAllDoctors getDoctors()
        {
            getAllDoctors gd = new getAllDoctors();
            SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\EVIS\Downloads\WCF-Hospital-Management-System-main\WCFProject_CE055_CE025_CE022\HospitalService1\HostHospital\HPDB.mdf;Integrated Security=True");
            con.Open();
            SqlCommand cmd = new SqlCommand("Select * from Doctor", con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable("MyTable");
            da.Fill(dt);
            gd.allDoctor = dt;
            con.Close();
            return (gd);
        }

        // For patients 
        public getAllApp getallapp(string pid)
        {
            getAllApp gaa = new getAllApp();
            SqlConnection con = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\EVIS\Downloads\WCF-Hospital-Management-System-main\WCFProject_CE055_CE025_CE022\HospitalService1\HostHospital\HPDB.mdf;Integrated Security=True");
            con.Open();
            SqlCommand cmd = new SqlCommand("Select * from Appointment where ap_email like'" + pid + "%'", con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable("AllApp");
            da.Fill(dt);
            gaa.allApp = dt;
            con.Close();
            return (gaa);
        }

        public void logout()
        {
           //pass 
        }
    }
}
