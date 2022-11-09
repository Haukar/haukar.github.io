import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Python from '../assets/python.png';
import GitHub from '../assets/github.png';
import CSharp from '../assets/csharp.png';
import NodeJS from '../assets/node.png';
import Java from '../assets/java.png';
import Docker from '../assets/docker.png';
import Vs2022 from '../assets/vs2022.png';
import Vscode from '../assets/vscode.png';
import Net from '../assets/net.png';
import Azure from '../assets/azure.png';
import Typescript from '../assets/typescript.png';
import Angular from '../assets/angular.png';
import NextJS from '../assets/nextjs.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#660066] text-gray-300'>
      {/* Container */}
      <div className='pt-32 sm:pt-52'>
        </div>
      <div className='pt-96 sm:pt-5 max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#ff66ff] '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>HTML</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>CSS</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>JAVASCRIPT</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>REACTJS</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>GITHUB</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>PYTHON</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={CSharp} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>C#</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={NodeJS} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>NODEJS</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={Java} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>JAVA</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={Azure} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>AZURE</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-32 mx-auto' src={Docker} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>DOCKER</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={Net} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>NET</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={Vscode} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>VS CODE</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={Vs2022} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>VS 2022</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={NextJS} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>NEXTJS</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={Typescript} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>TYPESCRIPT</p>
              </div>
              <div className='group shadow-md shadow-[#040c16] duration-500'>
                  <img className='group-hover:animate-bounce w-20 mx-auto' src={Angular} alt="HTML icon" />
                  <p className='my-4 group-hover:text-bold group-hover:scale-125'>ANGULAR</p>
              </div>
          </div>
        <div className='pt-96 sm:pt-96'>
        </div>
      </div>
    </div>
  );
};

export default Skills;
