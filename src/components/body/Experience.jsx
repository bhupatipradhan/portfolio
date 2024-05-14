import React from 'react'

function Experience() {
  return (
    <div className=' m-0 p-0  mt-0 grid grid-cols-7 '>
      <div className='sm:col-span-1 sm:block  hidden' ></div>
      <div className=' min-h-max sm:col-span-5 col-span-7 bg-[#1b1b1d]'>
        <div className='grid grid-cols-4 mt-20 mb-11'>
          <div className='ml-12 col-span-3'>
            <h1 className='p-2 text-white text-left text-4xl font-bold tracking-wider'> From Pixels to Progress: The Impactful <span className='text-cyan-400'> Journey</span> of a <span className='text-cyan-400'> Software Developer</span> </h1>
            <p className='ml-2 mt-5 text-[#a1a1aa] mb-5 '>In the rapidly evolving IT sector, software skills and expertise are paramount. They enable professionals to develop innovative solutions, streamline processes, and stay ahead in a highly competitive industry, driving growth and success.</p>
            <div className='mt-10 ml-2 border-l border-cyan-400 tracking-wider  hover:bg-[#333337] rounded-lg' >
              <ul className='ml-5 flex'>
                <li className='text-white font-semibold'>THOUGHTi India pvt.ltd</li>
                <li className='ml-10 text-[#a1a1aa] font-thin'><span className='text-cyan-400'>2020-Dec </span>to <span className='text-cyan-400'>2024-May</span></li>
              </ul>
              <ul className='mt-5 ml-[140px] text-[#a1a1aa]'>
                <li ><p>I embarked on my professional journey with the Organization as a Java Developer, eager to contribute my skills and passion for software development. Over the years, my role has evolved, and I have embraced new challenges and responsibilities with enthusiasm.
                  Throughout my journey, I have consistently been appreciated by team members for my sense of responsibility and innovative problem-solving. I take pride in contributing ideas that not only address challenges effectively but also enhance the overall efficiency of our projects.</p></li>
              </ul>
            </div>
            <div className='mt-10 ml-2 border-l border-cyan-400 tracking-wider hover:bg-[#333337] rounded-lg' >
              <ul className='ml-5 flex'>
                <li className='text-white font-semibold'>Spectovision Technologies pvt.ltd</li>
                <li className='ml-10 text-[#a1a1aa] font-thin'><span className='text-cyan-400'>2019-Aug </span>to <span className='text-cyan-400'>2020-April</span></li>
              </ul>
              <ul className='mt-5 ml-[140px] text-[#a1a1aa]'>
                <li ><p>As a trainee intern in an IT development company, prioritize learning technical skills such as programming languages and software development lifecycle phases. Develop problem-solving abilities, communication, and time management skills. Understand the importance of documentation, testing, and continuous learning. Embrace professionalism for effective collaboration and career growth.</p></li>
              </ul>
            </div>
          </div>
          <div className='ml-12 col-span-1'>

          </div>
        </div>
      </div>
      <div className='sm:col-span-1 sm:block hidden' ></div>

    </div>
  )
}

export default Experience