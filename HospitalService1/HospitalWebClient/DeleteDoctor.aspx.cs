using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using HospitalWebClient.HospitalService1;

namespace HospitalWebClient
{
    public partial class DeleteDoctor : System.Web.UI.Page
    {
        HospitalService1.HospitalService1Client client = new HospitalService1.HospitalService1Client();
        protected void Page_Load(object sender, EventArgs e)
        {
        
        }

        protected void btndelete_Click(object sender, EventArgs e)
        {
            deleteDoctor dd = new deleteDoctor();
            dd.d_id = int.Parse(docid.Text);
            string msg = client.deleteDoctor(dd);
            errdelete.Text = msg.ToString();
        }
    }
}