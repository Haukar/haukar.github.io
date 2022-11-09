import React, { useState }  from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div name='home' className='pt-96 sm:pt-5 w-full h-screen bg-[#660066]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ff66ff]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Haukar Hussein
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          In my spare time I like to work on personal projects, on myself and my daily routines.
          In June 2022 I graduated as Bachelor of Science in Software Engineering at the Hogeschool: "Windesheim Flevoland" in Almere.
          In the meantime, I have 3 years of experience as a software engineer. I like to work out and cook food.
        </p>
      </div>
    </div>
  );
};

export default Home;
