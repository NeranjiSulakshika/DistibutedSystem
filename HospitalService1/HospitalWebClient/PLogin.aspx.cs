using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
//using HospitalWebClient.HospitalService1;

namespace HospitalWebClient
{
    public partial class PLogin : System.Web.UI.Page
    {
        HospitalService1.HospitalService1Client client = new HospitalService1.HospitalService1Client();
        protected void Page_Load(object sender, EventArgs e)
        {
           
        }

        protected void btnplogin_Click(object sender, EventArgs e)
        {
            string useremail = plemail.Text;
            string password = plpasswd.Text;
            string res = client.ptvalidCredential(useremail, password);
            if (res.Equals("true"))
            {
                Session["curruser"] = plemail.Text; ;
                Response.Redirect("Default");
                Session.RemoveAll();
            }
            else
            {
                errplogin.Text = "Invalid Credential!";
            }
        }
    }
}