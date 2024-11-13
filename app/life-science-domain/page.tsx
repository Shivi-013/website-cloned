import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const LifeScienceDomainPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">
      {/* Sparkles Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />
      
      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Life Science Domain Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">
        
        {/* Life Science Team Member 1 */}
        <Link href="https://www.linkedin.com/in/eeshan-nair-496800238/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./life-science-member1.png" alt="Life Science Team Member 1" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Co Team Lead-Eeshan Nair</h3>
          </div>
        </Link>

        {/* Life Science Team Member 2 */}
        <Link href="https://www.linkedin.com/in/aruna-sainathan-668b46228/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./life-science-member2.png" alt="Life Science Team Member 2" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Research Lead-Aruna S</h3>
          </div>
        </Link>

        {/* Life Science Team Member 3 */}
        <Link href="https://www.linkedin.com/in/sayantani-chattopadhyay-33b71b256/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./life-science-member3.png" alt="Life Science Team Member 3" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Sayantani Chattopadhyay</h3>
          </div>
        </Link>

        {/* Life Science Team Member 4 */}
        <Link href="https://www.linkedin.com/in/danyal-reyaz/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./life-science-member4.png" alt="Life Science Team Member 4" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Danyal Reyaz</h3>
          </div>
        </Link>

        {/* Life Science Team Member 5 */}
        {/* <Link href="/life-science-team-member-5"> */}
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./life-science-member5.png" alt="Life Science Team Member 5" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Neelesh S</h3>
          </div>
        {/* </Link> */}

        {/* Life Science Team Member 6 */}
        {/* <Link href="/life-science-team-member-6"> */}
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./life-science-member6.png" alt="Life Science Team Member 6" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Tanmayaa C S</h3>
          </div>
        {/* </Link> */}

      </div>
    </div>
  );
};

export default LifeScienceDomainPage;
