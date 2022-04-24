using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;

namespace HostHospital
{
    class Program
    {
        static void Main(string[] args)
        {
            using(ServiceHost host = new ServiceHost(typeof(HospitalService1.HospitalService1)))
            {
                host.Open();
                Console.WriteLine("Host Started at @ " + DateTime.Now.ToString());
                Console.ReadLine();
            }
        }
    }
}
