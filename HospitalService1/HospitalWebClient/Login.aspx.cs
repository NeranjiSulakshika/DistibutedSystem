using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace HospitalWebClient
{
    public partial class Login : System.Web.UI.Page
    {
        HospitalService1.HospitalService1Client client = new HospitalService1.HospitalService1Client();
        protected void Page_Load(object sender, EventArgs e)
        {
           
        }

        protected void btnlogin_Click(object sender, EventArgs e)
        {
            string username = uname.Text;
            string password = passwd.Text;
            string res = client.validCredential(username, password);
            if (res.Equals("true"))
            {
                Session["curruser"] = "admin";
                Response.Redirect("Default");
            }
            else
            {
                errlogin.Text = "Invalid Credential!";
            }
        }
    }
}