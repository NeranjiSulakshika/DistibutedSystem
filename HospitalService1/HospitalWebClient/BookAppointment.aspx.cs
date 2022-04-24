using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using HospitalWebClient.HospitalService1;

namespace HospitalWebClient
{
    public partial class BookAppointment : System.Web.UI.Page
    {
        HospitalService1.HospitalService1Client client = new HospitalService1.HospitalService1Client();
        protected void Page_Load(object sender, EventArgs e)
        {
            if ((string)Session["curruser"] == null)
            {
                Response.Redirect("PLogin");
            }
        }

        protected void book_Click(object sender, EventArgs e)
        {
            BookApp bapp = new BookApp();
            bapp.ad_email = doctoremail.Text;
            bapp.ap_email = patientemail.Text;
            bapp.a_desc = description.Text;
            bapp.a_date = date.Text.ToString();
            string msg = client.bookAppointment(bapp);
            errbook.Text = msg.ToString();
        }
    }
}