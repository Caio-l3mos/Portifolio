import React from 'react'

import { FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'



const Social = () => {

  const  links = [
  {
    id: 1, 
    child: (
      <>
        Linkedin <FaLinkedin size={30} />
      </>
    ),
    href: 'https://linkedin.com',
   

  },
  {
    id: 2, 
    child: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
    href: 'https://github.com/Caio-l3mos',
   

  },{
    id: 3, 
    child: (
      <>
        Email <HiOutlineMail size={30} />
      </>
    ),
    href: 'mailto',


  },
  {
    id: 4, 
    child: (
      <>
        Resumo <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: '/Caio.pdf',
   
    download: true,


  }

]

 

  return (

  

    <div className='hidden lg:flex flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, download , href}) => (
       <li key={id} className={
        " bg-gray-500 flex justfy-between items center w-40 h-1/ 4 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md  duration-300" }>
        <a className='flex justify-between items-center w-full text-white' href={href}
        download={download}
        target='blank'
        > 
              
         <>
           {child}
         </>
              </a></li>


            ))}


           
        </ul>


        
    </div>
  )
}

export default Social