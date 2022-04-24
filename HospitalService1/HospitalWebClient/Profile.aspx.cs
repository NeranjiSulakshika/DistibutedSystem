using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using HospitalWebClient.HospitalService1;


namespace HospitalWebClient
{
    public partial class Profile : System.Web.UI.Page
    {
        HospitalService1.HospitalService1Client client = new HospitalService1.HospitalService1Client();
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnprupdate_Click(object sender, EventArgs e)
        {
            Patient pp = new Patient();
            pp.p_name = prname.Text;
            pp.p_email = premail.Text;
            pp.p_contact = prcontact.Text;
            pp.p_passwd1 = prpasswd1.Text;
            pp.p_passwd2 = prpasswd2.Text;
            string msg = client.updatePatient(pp);
            prerr.Text = msg.ToString();
            if (msg == "Update Successfully!")
            {
                Session["curruser"] = premail.Text;
            }
        }
    }
}