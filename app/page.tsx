'use client';
import { SparklesCore } from '@/components/ui/sparkles';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Home = () => {
  const galleryImages = [
    './gallery-item1.png',
    './gallery-item2.png',
    './gallery-item3.png',
    './gallery-item4.png',
    './gallery-item5.png',
    './gallery-item6.png',
    './gallery-item7.png',
    './gallery-item8.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);


  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sponsorshipImages = [
    { src: './sukrit-infotech.png', alt: 'Sukrit Infotech' },
    { src: './solidworks.png', alt: 'Solidworks' },
    { src: './wheeleez.png', alt: 'Wheeleez' },
    { src: './nvidia.png', alt: 'Nvidia' },
    { src: './altium.png', alt: 'Altium' },
    { src: './vartech.png', alt: 'Var Tech' },
    { src: './protocase.png', alt: 'Protocase' },
  ];

  return (
    <div className="overflow-x-hidden"> {/* Prevent horizontal overflow */}
    <style jsx>{`
      html {
        scroll-behavior: smooth;
      }
      @media (max-width: 640px) {
        #home {
        }
      }
    `}</style>
       {/* Navbar */}
<nav className="bg-black bg-opacity-60 text-white fixed w-full z-20 transition-transform duration-300">
  <div className="px-4 py-2 flex justify-between items-center w-full">
    
    {/* Rudra Logo - Aligned to the left */}
    <Link href="/" legacyBehavior>
      <a className="flex-shrink-0">
        <img src="./rudra-logo.png" alt="Rudra logo" width={100} height={50} />
      </a>
    </Link>

    {/* Desktop Menu - Aligned to the right */}
    <div className="hidden lg:flex space-x-4">
      <Link href="#home" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">HOME</a>
      </Link>
      <Link href="#about" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">ABOUT US</a>
      </Link>
      <Link href="#team" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">TEAM</a>
      </Link>
      <Link href="#achievements" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">ACHIEVEMENTS</a>
      </Link>
      <Link href="#gallery" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">GALLERY</a>
      </Link>
      <Link href="#sponsors" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">SPONSORSHIP</a>
      </Link>
      <Link href="#contact" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">CONTACT US</a>
      </Link>
    </div>
        {/* Hamburger Menu for Mobile */}
        <button 
          className="lg:hidden flex items-center ml-auto"  
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-60 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <button 
            className="absolute top-4 right-4 text-white text-3xl" 
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          <div className="flex flex-col items-center mt-16 space-y-6">
            <Link href="#home" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>HOME</a>
            </Link>
            <Link href="#about" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>ABOUT US</a>
            </Link>
            <Link href="#team" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>TEAM</a>
            </Link>
            <Link href="#achievements" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>ACHIEVEMENTS</a>
            </Link>
            <Link href="#gallery" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>GALLERY</a>
            </Link>
            <Link href="#sponsors" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>SPONSORSHIP</a>
            </Link>
            <Link href="#contact" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>CONTACT US</a>
            </Link>
          </div>
        </div>

        {/* SRM logo */}
        {/* <a href="https://www.srmist.edu.in/" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
          <img src="/rudraweb2/srm-logo.png" alt="SRM logo" width={100} height={50} />
        </a> */}
      </div>
    </nav>


 {/* Hero Section */}
 <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat sm:bg-none z-20" // Adjusted z-index
        style={{
          backgroundImage: `url('background-image.png')`, // Default background for larger screens
        }}
        id="home"
      >
  {/* <Navbar /> */}
  <div
    className="absolute inset-0 flex items-center justify-center sm:bg-cover sm:bg-center sm:bg-no-repeat"
    style={{
      backgroundImage: `url('/background-image-sm.png')`, // Background for small screens
    }}
  >
    {/* Optional content can be added here */}
  </div>
</div>
      {/* About Us Section */}
      <div className="min-h-screen bg-gray-900 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8" id="about">
        {/* Left Side: 3D Model */}
        <div className="w-full lg:w-3/5 flex justify-center items-center border-4 border-gray-300 box-border mb-8 lg:mb-0">
        <img
      src="./box-image.png" // Update with the path to your image
      alt="Rover model" // Update with a description for accessibility
      className="object-contain max-w-full max-h-full" // Adjust as needed
    />
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-3/5 bg-gray-900 bg-opacity-80 text-white p-4 sm:p-10 font-sans">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6 font-serif">About Us</h2>
          <p className="mb-4 sm:mb-6 font-sans">
            RUDRA is the official team of SRM IST taking part in the University Rover Challenge organized by the Mars Society since 2013. 
            The annual competition is held at the Mars Desert Research Station (MDRS), Martian Analog Site, near Hanksville, Utah, USA. 
            The team has been successfully operational for the last 10 years and has maintained its consistency in the competition.
          </p>
          <p className="mb-4 sm:mb-6 font-sans">
            Our Team consists of 25-30 undergraduate students of every year from various engineering streams, working in different domains. 
            The fun part - R&D, is the soul and essence of Team RUDRA. Brainstorming discussions are always welcome for giving birth to new ideas.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="relative min-h-screen bg-black bg-cover bg-center flex flex-col items-center justify-center py-16" id="team">
        <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/starsvideo.mov" type="video/mov" />
          Your browser does not support the video tag.
        </video>

        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 font-serif flex items-center justify-center z-10">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-10 text-center z-5">
          {/* Team Members */}
          {[
            { name: 'Team Lead - Shashwat Ganesh', img: 'team-lead.png', link: 'https://www.linkedin.com/in/sga0xc33d/' },
            { name: 'Team Co-Lead - Eeshan Nair', img: 'team-manager.png', link: 'https://www.linkedin.com/in/eeshan-nair-496800238/' },
            { name: 'Technical Director - Rajkumar', img: 'technical-director.png', link: 'https://www.linkedin.com/in/rajkumar-m13/' },
            { name: 'Mechanical Domain', img: 'mechanical-domain.png', link: './mechanical-domain' },
            { name: 'Electronics Domain', img: 'electronics-domain.png', link: './electronics-domain' },
            { name: 'Coding Domain', img: 'coding-domain.png', link: './coding-domain' },
            { name: 'Life Science Domain', img: 'life-science-domain.png', link: './life-science-domain' },
            { name: 'Corporate Domain', img: 'corporate-domain.png', link: './corporate-domain' },
          ].map((member, index) => (
            <a key={member.name} href={member.link}>
          <div className="bg-gray-800 p-4 w-80 rounded-lg hover:bg-gray-700 hover:scale-105 transform transition-transform duration-300">

                <img src={member.img} alt={member.name} className="w-24 sm:w-32 h-24 sm:h-32 mx-auto rounded-full" />
                <h3 className="text-white text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 font-sans">{member.name}</h3>
              </div>
            </a>
          ))}
           {/* Center the last team member */}
  <div className="col-span-full flex justify-center">
    <a href="https://www.srmist.edu.in/about-us/administrative-heads/director-alumni-relations/">
    <div className="bg-gray-800 p-4 w-80 rounded-lg hover:bg-gray-700 hover:scale-105 transform transition-transform duration-300">
        <img src="./faculty.png" alt="Dr. A. Rathinam" className="w-24 sm:w-32 h-24 sm:h-32 mx-auto rounded-full" />
        <h3 className="text-white text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 font-sans">Faculty Advisor-Dr. A. Rathinam</h3>
      </div>
    </a>
  </div>
  </div>
  </div>
{/* Gallery Section */}
<div className="relative min-h-screen bg-black flex flex-col items-center justify-center py-16" id="gallery">
  {/* Sparkles Effect */}
  <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

  <h2 className="text-white text-6xl mb-12 font-serif z-10">Gallery</h2>
  <div className="relative w-full max-w-4xl flex items-center justify-center z-5">
    {/* Gallery Image Container */}
    <div
      id="gallery-container"
      className="w-full h-[550px] flex overflow-x-auto scroll-smooth snap-x snap-mandatory relative z-0"
    >
      {galleryImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery Item ${index + 1}`}
          className="flex-shrink-0 w-full h-full object-cover rounded-lg snap-center"
        />
      ))}
    </div>
  </div>

  {/* Horizontal Scroller */}
  <div className="w-full max-w-4xl overflow-x-auto mt-6 z-10">
    <div className="flex space-x-4">
      {galleryImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery Thumbnail ${index + 1}`}
          className="flex-shrink-0 w-24 h-24 object-cover rounded-lg cursor-pointer"
          onClick={() => {
            const galleryContainer = document.getElementById('gallery-container');
            if (galleryContainer !== null) galleryContainer.scrollTo({ left: galleryContainer.clientWidth * index, behavior: 'smooth' });
          }}
        />
      ))}
    </div>
  </div>
</div>
{/* Achievements Section */}
<div className="relative min-h-screen bg-black py-4 mb-[-16px]" id="achievements">
  {/* Sparkles Effect */}
  <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

  {/* Section Content */}
  <h2 className="text-white text-4xl md:text-5xl lg:text-6xl text-center mb-12 font-serif z-10 relative">
    Achievements
  </h2>

  <div className="container mx-auto px-4">
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-0 w-full h-1 bg-gray-400 top-1/2 transform -translate-y-1/2 z-0"></div>

      {/* Achievement Cards - Top Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center mb-8 relative z-0">
        {[
          {
            src: "./achievement-image1.png",
            title: "URC 2013 - Team RUDRA achieved 5th as World Rank and 1st as Asia Rank",
            date: "May 28, 2013"
          },
          {
            src: "./achievement-image2.png",
            title: "URC 2014 - Team RUDRA participated and ranked 5th globally",
            date: "June 15, 2014"
          },
          {
            src: "./achievement-image3.png",
            title: "URC 2015 - Achieved 12th rank in the World and 2nd among Asian Teams",
            date: "May 29, 2015"
          },
          {
            src: "./achievement-image4.png",
            title: "URC 2016 - Team RUDRA secured 9th place overall",
            date: "June 12, 2016"
          },
          {
            src: "./achievement-image5.png",
            title: "URC 2017 - Team RUDRA participated and ranked 20th globally and 4th in Asia",
            date: "June 10, 2017"
          }
        ].map((item, index) => (
          <div key={index} className="relative group overflow-hidden">
            <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-white rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-105">
              <img
                src={item.src}
                alt={`Achievement ${index + 1}`}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-300">
              <div className="text-center p-4">
                <p className="text-sm lg:text-base">{item.title}</p>
                <p className="text-xs lg:text-sm">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Cards - Bottom Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center relative z-0">
        {[
          {
            src: "./achievement-image6.png",
            title: "URC 2019 - Team RUDRA secured 11th place in the world",
            date: "June 18, 2018"
          },
          {
            src: "./achievement-image7.png",
            title: "IRDC - Team RUDRA achieved 3rd as World Rank",
            date: "June 12, 2019"
          },
          {
            src: "./achievement-image8.png",
            title: "IRC 2023 - Team RUDRA ranked 5th globally",
            date: "Jan 2023"
          },
          {
            src: "./achievement-image9.png",
            title: "IRC 2024 - Team RUDRA ranked 3rd globally",
            date: "Jan 2024"
          }
        ].map((item, index) => (
          <div key={index} className="relative group overflow-hidden">
            <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-white rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-105">
              <img
                src={item.src}
                alt={`Achievement ${index + 6}`}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-300">
              <div className="text-center p-4">
                <p className="text-sm lg:text-base">{item.title}</p>
                <p className="text-xs lg:text-sm">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>




{/* Sponsorship Section */}
<div className="relative min-h-screen bg-black flex flex-col items-center justify-center py-4 mt-[-16px]" id="sponsors">
  <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />
  <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-12 sm:mb-16 z-20">Our Sponsors</h2>
  <div className="flex flex-wrap items-center justify-center z-10">
    {sponsorshipImages.map((sponsor, index) => (
      <div key={index} className="p-4 sm:p-6">
        <img
          src={sponsor.src}
          alt={sponsor.alt}
          width={200}
          height={200}
          className="w-48 h-auto object-contain"
        />
      </div>
    ))}
  </div>
</div>

    {/* Contact Us Section */}
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16" id="contact">
  <h2 className="text-white text-6xl mb-12 font-serif">Contact Us</h2>
  <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
    {/* Image/Icon Section */}
    <div className="bg-gray-700 p-16 rounded-lg shadow-lg flex items-center justify-center w-[480px] h-[480px]">
      <img src="image.png" alt="Icon or Image" className="w-128 h-128 object-contain" />
    </div>

    {/* Contact Information Section */}
    <div className="bg-gray-800 p-16 rounded-lg shadow-lg flex flex-col justify-between w-[480px] h-[480px]">
      <div className="space-y-4">
        <p className="text-white text-xl">
          Email: <a href="mailto:srmmarsroverteam@gmail.com" className="text-blue-500">srmmarsroverteam@gmail.com</a>
        </p>
        <p className="text-white text-xl">
          Address: C-404/405 - Placement Cell, SRM IST, Kattankulathur, Chennai - 603203
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col space-y-4 mt-6">
        <a href="https://www.youtube.com/@RUDRASRMMARSROVER" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
          <img src="youtube.png" alt="LinkedIn" className="w-10 h-10" />
          <span className="text-white text-xl">Youtube</span>
        </a>
        <a href="https://www.linkedin.com/company/srmrudra/mycompany/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
          <img src="linkedin-brands-solid.svg" alt="LinkedIn" className="w-10 h-10" />
          <span className="text-white text-xl">LinkedIn</span>
        </a>
        <a href="https://www.instagram.com/team_rudra/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
          <img src="square-instagram-brands-solid.svg" alt="Instagram" className="w-10 h-10" />
          <span className="text-white text-xl">Instagram</span>
        </a>
      </div>
    </div>
  </div>
</div>
      </div>
  );
};
export default Home;
