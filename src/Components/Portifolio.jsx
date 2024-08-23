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
      src: amarelo,
      link: "https://verificar-clima.netlify.app",
      docs:  "https://github.com/Caio-l3mos/Clima"
    },
    {
      id:2,
      src: azul,
      link: "https://planosfrontend.netlify.app",
      docs:  "https://github.com/Caio-l3mos/Planos_de_preco"
    },
    {
      id:3,
      src: vermelho,
      link: "https://lista-de-tarefasreact.netlify.app",
      docs:  "https://github.com/Caio-l3mos/Lista-de-tarefas"
    },
    /*{
      id:4,
      src: rosa,
      link: "https://verificar-clima.netlify.app",
      docs:  "https://github.com/Caio-l3mos/Clima"
    },
    {
      id:5,
      src: verde,
      link: "https://verificar-clima.netlify.app",
      docs:  "https://github.com/Caio-l3mos/Clima"
    },
    {
      id:6,
      src: roxo,
      link: "https://verificar-clima.netlify.app",
      docs:  "https://github.com/Caio-l3mos/Clima"
    }
*/

    


  ]
  
  


  return (




    <div
    id="portfolio"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full  ">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Um pouco de meus projetos</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
        {portifolios.map(({ id, src, link, docs }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg mt-7">
            <img
              src={src}
              alt=""
              className=" h-full w-screen"
            />
            <div className="flex items-center justify-around h-auto  ">
              
              <a className='border-2 border-sky-100 w-2/4 rounded-3xl  duration-200 hover:scale-90 items-center justify-center text-center' href={`${link}`} target="blank"> Projeto </a>

              
              <a className='border-2 border-sky-100 w-2/4 rounded-3xl  duration-200 hover:scale-90 items-center justify-center text-center' href={`${docs}`} target="blank">   Docs  </a>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Portifolio