using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using HospitalWebClient.HospitalService1;

namespace HospitalWebClient
{
    public partial class AddDoctor : System.Web.UI.Page
    {
        HospitalService1.HospitalService1Client client = new HospitalService1.HospitalService1Client();
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnadd_Click(object sender, EventArgs e)
        {
            Doctor doc = new Doctor();
            doc.d_name = docname.Text;
            doc.d_email = docemail.Text;
            doc.d_address = docaddress.Text;
            doc.d_contact = doccontact.Text;
            doc.d_experience = docexperience.Text;
            doc.d_speciality = docspeciality.Text;
            string msg = client.insertDoctor(doc);
            errmsg.Text = msg.ToString();
        }

        protected void btnupdate_Click(object sender, EventArgs e)
        {
            Doctor doc = new Doctor();
            doc.d_name = docname.Text;
            doc.d_email = docemail.Text;
            doc.d_address = docaddress.Text;
            doc.d_contact = doccontact.Text;
            doc.d_experience = docexperience.Text;
            doc.d_speciality = docspeciality.Text;
            string msg = client.updateDoctor(doc);
            errmsg.Text = msg.ToString();

        }
    }
}