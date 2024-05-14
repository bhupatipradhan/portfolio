import React from 'react'

function Contact() {
  return (
    <div className=' m-0 p-0  mt-0 grid grid-cols-7 '>
      <div className='sm:col-span-1 sm:block  hidden' ></div>
      <div className=' min-h-max sm:col-span-5 col-span-7 bg-[#1b1b1d]'>
        <div className='grid grid-cols-2 mt-20 mb-11'>
          <div className='ml-12 col-span-1'>
            <h1 className='p-2 text-white text-left text-4xl font-bold tracking-wider'> <span className='text-cyan-400'>Bridge</span> the Gap: From Ideas to Reality </h1>
            <div>
              <div className='flex-col justify-start mt-4 text-xl'>
                <ul className='w-80 p-2'>
                  <li className='text-[#a1a1aa] m-2 mb-4 cursor-pointer flex items-center hover:fill-cyan-400 [&>a>span>svg]:fill-[#a1a1aa] [&>a>span>svg]:hover:fill-cyan-400 hover:text-cyan-400'>
                    <a className='flex' href='https://www.linkedin.com/in/bhupati-pradhan' target="_blank" > <span className="[&>svg]:h-7 [&>svg]:w-7">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                      </svg>
                    </span>
                      <span className='ml-2 '>Connect on LinkedIn</span></a>
                  </li>
                  <li className='text-[#a1a1aa] m-2 mb-4 cursor-pointer flex items-center hover:fill-cyan-400 [&>a>span>svg]:fill-[#a1a1aa] [&>a>span>svg]:hover:fill-cyan-400 hover:text-cyan-400'>
                    <a className='flex' href='https://github.com/bhupatipradhan' target="_blank" > <span className="[&>svg]:h-7 [&>svg]:w-7  ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 496 512">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                    </span><span className='ml-2 '> Follow on GitHub</span></a>
                  </li>
                  <li className='text-[#a1a1aa]  mb-4 border-b h-0.5 mt-4  '> </li>
                  <li className='text-[#a1a1aa] m-2 flex items-center hover:fill-cyan-400 [&>span>svg]:fill-[#a1a1aa] [&>span>svg]:hover:fill-cyan-400 hover:text-cyan-400'>
                    <span className="[&>svg]:h-7 [&>svg]:w-7  ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 496 512">
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                      </svg>
                    </span><span className='ml-2 '>dev.bhupatipradhan@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='ml-12 col-span-1'>
            <div className='mt-16 col-span-1 flex items-center justify-center'>
              <img className='w-76 h-80 rounded-md rotate-3' alt='' src='/media/Contact.png'></img>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:col-span-1 sm:block hidden' ></div>

    </div>
  )
}

export default Contact