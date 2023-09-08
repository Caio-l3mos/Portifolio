import React from 'react'
import amarelo from '../assets/p/amarelo.jpg'
import vermelho from '../assets/p/vermelho.jpg'
import azul from '../assets/p/azul.jpg'
import verde from '../assets/p/verde.jpg'
import rosa from '../assets/p/rosa.jpg'
import roxo from '../assets/p/roxo.jpg'




const Portifolio = () => {

  const portifolios = [
    {
      id:1,
      src: amarelo
    },
    {
      id:2,
      src: azul
    },
    {
      id:3,
      src: vermelho
    },
    {
      id:4,
      src: rosa
    },
    {
      id:5,
      src: verde
    },
    {
      id:6,
      src: roxo
    }


  ]


  return (




    <div
    name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Um pouco de meus projetos</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portifolios.map(({ id, src }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <p className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
                O projeto será postado em breve, este é apenas um ilustrativo
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Portifolio