import logo from './assets/eva01.png';
import { useState } from 'react';
export default function Nav() {
  const [isSubmenuVisible, setSubmenuVisible] = useState(false);
  const handleClick = () => {
    setSubmenuVisible(!isSubmenuVisible);
  };


  
  return (
    <div className='bg-neutral-900 w-full h-10 flex items-center text-xl text-white shadow-xl'>
      <div className='flex w-1/3'>
      <a href="/"><div className='ml-5  w-9'><img src={logo}></img></div></a>
        <div className='ml-5 font-bold text-2xl font-poppins'>Welcome to my site!</div>
      </div>
      <div className='flex justify-end w-2/3 space-x-5 font-poppins'>
      <div className='w-32 text-center relative font-bold ' onClick={handleClick} >
            <p>Games <span className='ml-2 '>
              {isSubmenuVisible ? '▲' : '▼'}
            </span></p>
            { isSubmenuVisible && (
                <div className='absolute  bg-neutral-500 text-white p-2 m-1 w-40  '>
                  <p className='py-1 px-3'><a href='/tictactoe'>Tic Tac Toe</a></p>
                  <hr></hr>
                  <p className='py-1 px-3'><a href='#'>Nie wiem</a></p>
                  <hr></hr>
                  <p className='py-1 px-3'><a href='/clicker'>Clicker</a></p>
                </div>
              )
            }
          </div>
          <p className='w-32 text-center font-bold'><a href=''>About me</a></p>
          <p className='w-32 text-center font-bold'><a href=''>Projects</a></p>
          <p className='w-32 text-center font-bold'><a href='/socials'>Socials</a></p>
          
      </div>
    </div>
  );
}
