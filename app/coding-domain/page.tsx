import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const CodingDomainPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">

      {/* Sparkles Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Coding Domain Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">

        {/* Coding Team Member 1 */}
        <Link href="https://www.linkedin.com/in/sga0xc33d/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./coding-member1.png" alt="Coding Team Member 1" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Team Lead-Shashwat Ganesh</h3>
          </div>
        </Link>

        {/* Coding Team Member 2 */}
        <Link href="https://www.linkedin.com/in/waseem-riaz/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./coding-member2.png" alt="Coding Team Member 2" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Developers Lead-Waseem Riaz</h3>
          </div>
        </Link>

        {/* Coding Team Member 3 */}
        <Link href="https://www.linkedin.com/in/pritesh-a0/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./coding-member3.png" alt="Coding Team Member 3" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Simulation & Testing-Pritesh Agarwal</h3>
          </div>
        </Link>

        {/* Coding Team Member 4 */}
        <Link href="https://www.linkedin.com/in/yasharth-gupta-53749a255/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./coding-member4.png" alt="Coding Team Member 4" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Yasharth Gupta</h3>
          </div>
        </Link>

        {/* Coding Team Member 5 */}
        <Link href="https://www.linkedin.com/in/ayush-daga-341045226/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./coding-member5.png" alt="Coding Team Member 5" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Ayush Daga</h3>
          </div>
        </Link>
      </div>
      </div>
  );
};

export default CodingDomainPage;