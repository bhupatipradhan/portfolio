import React from 'react'

function Skill() {
  return (
    <div className=' m-0 p-0  mt-0 grid grid-cols-7 '>
      <div className='sm:col-span-1 sm:block  hidden' ></div>
      <div className=' min-h-max sm:col-span-5 col-span-7 bg-[#1b1b1d]'>
        <div className='grid grid-cols-2 mt-20 mb-11'>
          <div className='ml-12 col-span-1 mr-4'>
            <h1 className='p-2 text-white text-left text-4xl font-bold tracking-wider'> The Art of Code:  <span className='text-cyan-400'>Showcasing </span> Software Development <span className='text-cyan-400'>Skills</span> </h1>
            <div className='ml-2'>
              <p className='mt-5 text-[#a1a1aa] '>In the rapidly evolving IT sector, software skills and expertise are paramount. They enable professionals to develop innovative solutions, streamline processes, and stay ahead in a highly competitive industry, driving growth and success.</p>
              <ul className='text-white tracking-wider mt-5'>
                <li className='p-2 transition  hover:bg-[#333337] rounded-lg'>
                  <h1 className='text-cyan-400 font-medium text-xl ml-1'>Backend </h1>
                  <p className=' text-white ml-4'>Java (8, 11, 17), JDBC, Servlet, JSP, Spring 5.x, Spring Boot 2.x ,  Spring Boot 3.x,  Spring Rest, JavaScript , node js </p>
                </li>
                <li className='p-2 transition  hover:bg-[#333337] rounded-lg'>
                  <h1 className='text-cyan-400 font-medium text-xl ml-1'>Frontend </h1>
                  <p className=' text-white ml-4'>HTML, CSS, React, Tailwind </p>
                </li>
                <li className='p-2 transition  hover:bg-[#333337] rounded-lg'>
                  <h1 className='text-cyan-400 font-medium text-xl ml-1'>Databases  </h1>
                  <p className=' text-white ml-4'>Oracle, MySQL, PostgreSQL, mongoDB, neo4j</p>
                </li>
                <li className='p-2 transition  hover:bg-[#333337] rounded-lg'>
                  <h1 className='text-cyan-400 font-medium text-xl ml-1'>IDE  </h1>
                  <p className=' text-white ml-4'>Eclipse, STS, Intellij, VS code</p>
                </li>
                <li className='p-2 transition  hover:bg-[#333337] rounded-lg'>
                  <h1 className='text-cyan-400 font-medium text-xl ml-1'>Tools  </h1>
                  <p className=' text-white ml-4'>Maven, Gradel, log4j, Git, JUnit,
                    jira, Mokito , Jenkin, SonarQube, Postman, PuTTY, WinSCP </p>
                </li>
                <li className='p-2 transition  hover:bg-[#333337] rounded-lg'>
                  <h1 className='text-cyan-400 font-medium text-xl ml-1'>Operating System  </h1>
                  <p className=' text-white ml-4'>Windows, linux </p>
                </li>
                <li className='p-2 transition  hover:bg-[#333337] rounded-lg'>
                  <h1 className='text-cyan-400 font-medium text-xl ml-1'>Other  </h1>
                  <p className=' text-white ml-4'>AWS, Shell script, HL7, FHIR R4 R5</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='flex flex-wrap gap-2 mr-5 ml-5 justify-between'>
              <div className='transition bg-[#333337] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400 '>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-java.png'></img>
              </div>
              <div className='transition bg-[#333337] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-spring.png'></img>
              </div>
              <div className='transition bg-[#333337] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-rest.png'></img>
              </div>
              <div className='bg-[#333337] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-maven.png'></img>
              </div>
              <div className='transition bg-[#333337] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-gradle.png'></img>
              </div>

              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-mysql.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-PostgreSQL.png'></img>
              </div>

              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-oracle.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-mongoDb.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-neo4j.png'></img>
              </div>

              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-eclipse.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-intellij.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-vs.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-windows.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-linux.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-tomcat.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-html.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-css.png'></img>
              </div>

              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-tailwind.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-js.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-node.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-react.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-git.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-junit.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-jira.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-jenkins.png'></img>
              </div>

              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-sonarqube.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-postman.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/icon-aws.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/HL7.png'></img>
              </div>
              <div className='transition bg-[#EBEDE8] scale-75 hover:scale-110 rounded-md   flex items-center justify-center hover:shadow-md hover:shadow-cyan-400'>
                <img className=' w-[100px] h-[100px] rounded-md ' alt='' src='/media/FHIR.png'></img>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='sm:col-span-1 sm:block hidden' ></div>

    </div>
  )
}

export default Skill