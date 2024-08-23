import React from 'react'
import { Image } from 'react-bootstrap'

const skills = () => {
    return (
        <section id="Skills" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen">


            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-1/2'>

                <div className=' pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Skills</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
                    <div className="shadow-md shadow-gray-600 rounded-lg mt-7 max-h-96">
                        <img className=' max-h-full w-full '
                            src='https://logospng.org/download/javascript/logo-javascript-icon-1024.png'
                            alt=""
                            
                        />
                       
                    </div>

                    <div className="shadow-md shadow-gray-600 rounded-lg mt-7 max-h-96">
                        <img className=' max-h-full w-full '
                            src='https://logospng.org/download/react/logo-react-1024.png'
                            alt=""
                            
                        />
                       
                    </div>


                        


                    <div className="shadow-md shadow-gray-600 rounded-lg mt-7 h-96">
                        <img className=" max-h-full w-screen"
                            src={'https://logospng.org/download/typescript/typescript-1024.png'}
                            alt=""
                            
                        />
                        
                    </div>

                </div>





            </div>







        </section>








    )
}

export default skills