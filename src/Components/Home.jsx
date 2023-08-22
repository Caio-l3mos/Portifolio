import React from 'react'
import Hero from '../assets/home.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name="Home" className=' h-screen w-full bg-gradient-to-b via-black from-black to-gray-800 '> 
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    Desenvolvedor Full Stack
                </h2>
                <p className='text-gray-500 py-4 max-w-md'> 
                    Estou em busca de minha primeira oportunidade como Desenvolvedor web.
                    Amo trabalhar com desenvolvimento web e dou umas pinceladas em mobile. utilizando 
                    React( js e native), tailwind, Next Js, sqlServer e PHP

                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center 
                    rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portifolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25} ml-1/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={Hero} alt='Homem ditado na luaa' className='rounded-2xl mx-auto w-2/3 md:w-80% '/>
            </div>
        </div>
        
     </div>
  )
}

export default Home