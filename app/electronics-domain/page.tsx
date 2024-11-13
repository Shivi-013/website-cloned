import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const ElectronicsDomainPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">
      {/* Sparkles Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />
      
      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Electronics Domain Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">
        
        {/* Electronics Team Member 1 */}
        <Link href="https://www.linkedin.com/in/rajkumar-m13/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./electronics-member1.png" alt="Electronics Team Member 1" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Technical Director-RajKumar M</h3>
          </div>
        </Link>



        {/* Electronics Team Member 3 */}
        <Link href="https://www.linkedin.com/in/harshit-agrawal-5b6630225/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./electronics-member3.png" alt="Electronics Team Member 3" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">System Integrations-Harshit Agarwal</h3>
          </div>
        </Link>
                {/* Electronics Team Member 2 */}
                <Link href="https://www.linkedin.com/in/prerna-sharma-b64414223/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./electronics-member2.png" alt="Electronics Team Member 2" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Power & Communications-Prerna Sharma</h3>
          </div>
        </Link>

        {/* Electronics Team Member 6 */}
        <Link href="https://www.linkedin.com/in/pragati-prithvi/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./electronics-member6.png" alt="Electronics Team Member 6" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Pragati Prithvi</h3>
          </div>
        </Link>


        {/* Electronics Team Member 5 */}
        <Link href="https://www.linkedin.com/in/srivastava-sonakshi/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./electronics-member5.png" alt="Electronics Team Member 5" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Sonakshi Srivastava</h3>
          </div>
        </Link>



        {/* Electronics Team Member 4 */}
        <Link href="https://www.linkedin.com/in/kaustub-guha/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./electronics-member4.png" alt="Electronics Team Member 4" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Kaustubh Guha</h3>
          </div>
        </Link>

        {/* Electronics Team Member 7 */}
        <Link href="https://www.linkedin.com/in/sidhant1226/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./electronics-member7.png" alt="Electronics Team Member 7" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Sidhant Chakrabarti</h3>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default ElectronicsDomainPage;
