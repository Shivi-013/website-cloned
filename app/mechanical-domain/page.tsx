import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const MechanicalDomainPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">
      {/* Sparkles Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />
      
      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Mechanical Domain Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">
        
        {/* Mechanical Team Member 1 */}
        <Link href="https://www.linkedin.com/in/along-ao/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./mechanical-member1.png" alt="Mechanical Team Member 1" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Mechanical Lead-Along Ao</h3>
          </div>
        </Link>

        {/* Mechanical Team Member 11 */}
        <Link href="https://www.linkedin.com/in/aneesh-marella-a315b3221/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./mechanical-member11.png" alt="Mechanical Team Member 11" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">M.V. Aneesh</h3>
          </div>
        </Link>
       

               {/* Mechanical Team Member 3 */}
               {/* <Link href="/team-member-3"> */}
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./mechanical-member3.png" alt="Mechanical Team Member 3" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Kethan Babu</h3>
          </div>
        {/* </Link> */}
       
               {/* Mechanical Team Member 5 */}
               <Link href="https://www.linkedin.com/in/ratnesh-mishra-07260424b/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./mechanical-member5.png" alt="Mechanical Team Member 5" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Ratnesh Mishra</h3>
          </div>
        </Link>
       
        {/* Mechanical Team Member 2 */}
        <Link href="https://linkedin.com/in/aditya-raj-bhatia-279109252/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./mechanical-member2.png" alt="Mechanical Team Member 2" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Aditya Raj Bhatia</h3>
          </div>
        </Link>



        {/* Mechanical Team Member 4 */}
        <Link href="https://www.linkedin.com/in/himanshu-karar-349268157/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./mechanical-member4.png" alt="Mechanical Team Member 4" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Himanshu Karar</h3>
          </div>
        </Link>



        {/* Mechanical Team Member 6 */}
        <Link href="https://www.linkedin.com/in/prerna-kumari-31aa3325b/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./mechanical-member6.png" alt="Mechanical Team Member 6" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Prerna Kumari</h3>
          </div>
        </Link>

        {/* Mechanical Team Member 7 */}
        {/* <Link href="/team-member-7"> */}
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./mechanical-member7.png" alt="Mechanical Team Member 7" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Rishabh Kothari</h3>
          </div>
        {/* </Link> */}

        {/* Mechanical Team Member 9 */}
        <Link href="https://www.linkedin.com/in/sujal-shah-a92a63297/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./mechanical-member9.png" alt="Mechanical Team Member 9" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Sujal Shah</h3>
          </div>
        </Link>

        {/* Mechanical Team Member 10 */}
        {/* <Link href="/team-member-10"> */}
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./mechanical-member10.png" alt="Mechanical Team Member 10" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Kevin Mathew</h3>
          </div>
        {/* </Link> */}


        
      </div>
    </div>
  );
};

export default MechanicalDomainPage;
