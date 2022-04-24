using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using HospitalWebClient.HospitalService1;

namespace HospitalWebClient
{
    public partial class Register : System.Web.UI.Page
    {
        HospitalService1.HospitalService1Client client = new HospitalService1.HospitalService1Client();
        protected void Page_Load(object sender, EventArgs e)
        {
           
        }

        protected void btnregister_Click(object sender, EventArgs e)
        {
            Patient pt = new Patient();
            pt.p_name = ptname.Text;
            pt.p_email = ptemail.Text;
            pt.p_contact = ptcontact.Text;
            if (ptpasswd1.Text.Equals(ptpasswd2.Text))
            {
                pt.p_passwd1 = ptpasswd1.Text;
                pt.p_passwd2 = ptpasswd2.Text;
                string msg = client.insertPatient(pt);
                Response.Redirect("PLogin");
            }
            else
            {
                string msg = "Password Doesn't Match!";
                errreg.Text = msg.ToString();
            }
        }
    }
}