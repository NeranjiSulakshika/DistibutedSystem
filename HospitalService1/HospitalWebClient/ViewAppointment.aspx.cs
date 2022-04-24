using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace HospitalWebClient
{
    public partial class ViewAppointment : System.Web.UI.Page
    {
        HospitalService1.HospitalService1Client client = new HospitalService1.HospitalService1Client();
        protected void Page_Load(object sender, EventArgs e)
        {
            if ((string)Session["curruser"] == null)
            {
                Response.Redirect("PLogin");
            }
        }

        protected void btnapp_Click(object sender, EventArgs e)
        {
            HospitalService1.getAllApp g = new HospitalService1.getAllApp();
            string pid = ((string)Session["curruser"]);
            g = client.getallapp(pid);
            DataTable d = new DataTable();
            d = g.allApp;
            allapp.DataSource = d;
            allapp.DataBind();
        }
    }
}