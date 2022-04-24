using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace HospitalWebClient
{
    public partial class AllDoctors : System.Web.UI.Page
    {
        HospitalService1.HospitalService1Client client = new HospitalService1.HospitalService1Client();
        protected void Page_Load(object sender, EventArgs e)
        {
  
        }

        protected void btnview_Click(object sender, EventArgs e)
        {
            HospitalService1.getAllDoctors g = new HospitalService1.getAllDoctors();
            g = client.getDoctors();
            DataTable d = new DataTable();
            d = g.allDoctor;
            gridview.DataSource = d;
            gridview.DataBind();
        }
    }
}