import React from 'react'

function Project() {
  return (
    <div className=' m-0 p-0  mt-0 grid grid-cols-7 '>
      <div className='sm:col-span-1 sm:block  hidden' ></div>
      <div className=' min-h-max sm:col-span-5 col-span-7 bg-[#1b1b1d]'>
        <div className='grid grid-cols-4 mt-20 mb-11'>
          <div className='ml-12 col-span-3'>
            <h1 className='p-2 text-white text-left text-4xl font-bold tracking-wider'> From Concept to Completion: My <span className='text-cyan-400'> Project</span> Portfolio </h1>
          </div>
          <div className='ml-12 col-span-1'>
          </div>
        </div>
        <div className='bg-transparent ml-14 mr-14 mt-5 mb-5 flex flex-wrap gap-2 justify-evenly'>
          <div className='transition-all hover:bg-[#333337] p-10 w-[357px] rounded-lg'>
            <div className='rounded-full w-[60px] h-[60px] bg-[#333337] border-[#454548] border flex items-center justify-center' >
              <img className='rounded-full w-[45px] h-[45px]  ' src='/media/Neurex.jpeg' ></img>
            </div>
            <h1 className='mt-5 mb-5 text-white tracking-wider text-xl '>Neurex</h1>
            <p className='text-[#a1a1aa] mt-2 '>A complete healthcare billing solution. Where advanced algorithms and NLP extract valuable information from unstructured patient notes, identifying standardized clinical codes like SNOMED, CPT, LOINC, HCPCS, ICD..</p>
          </div>
          <div className='transition-all hover:bg-[#333337] p-10 w-[357px] rounded-lg'>
            <div className='rounded-full w-[60px] h-[60px] bg-[#333337] border-[#454548] border flex items-center justify-center' >
              <img className='rounded-full w-[45px] h-[45px]  ' src='/media/Sophist.jpeg' ></img>
            </div>
            <h1 className='mt-5 mb-5 text-white tracking-wider text-xl'>Sophist</h1>
            <p className='text-[#a1a1aa] mt-2 '>Our complete healthcare solution utilizes the FHIR r4 standard to manage various services including appointment scheduling, insurance, practitioner, and patient management.</p>
          </div>
          <div className='transition-all hover:bg-[#333337] p-10 w-[357px] rounded-lg'>
            <div className='rounded-full w-[60px] h-[60px] bg-[#333337] border-[#454548] border flex items-center justify-center' >
              <img className='rounded-full w-[45px] h-[45px]  ' src='/media/iMTD.jpeg' ></img>
            </div>
            <h1 className='mt-5 mb-5 text-white tracking-wider text-xl'>iMTD</h1>
            <p className='text-[#a1a1aa] mt-2 '>iMTD facilitates medical term lookup, verification, and translation. It's compatible with UMLS terminologies like SNOMED CT, LOINC, ICD-10, and more.</p>
          </div>
          <div className='transition-all hover:bg-[#333337] p-10 w-[357px] rounded-lg'>
            <div className='rounded-full w-[60px] h-[60px] bg-[#333337] border-[#454548] border flex items-center justify-center' >
              <img className='rounded-full w-[45px] h-[45px]  ' src='/media/Ehealth.jpeg' ></img>
            </div>
            <h1 className='mt-5 mb-5 text-white tracking-wider text-xl'>E-health Exchange</h1>
            <p className='text-[#a1a1aa] mt-2 '>This application supports national and local health information exchange, ensuring compatibility with secure network standards and nationally accepted interoperability standards.</p>
          </div>
          <div className='transition-all hover:bg-[#333337] p-10 w-[357px] rounded-lg'>
            <div className='rounded-full w-[60px] h-[60px] bg-[#333337] border-[#454548] border flex items-center justify-center' >
              <img className='rounded-full w-[45px] h-[45px]  ' src='/media/Epic.jpeg' ></img>
            </div>
            <h1 className='mt-5 mb-5 text-white tracking-wider text-xl'>Epic-Mapping  </h1>
            <p className='text-[#a1a1aa] mt-2 '>In this project, we map EPIC EMR data to a POJO class, storing it in a Mongo database. A trigger sends updated data to the EPIC server.</p>
          </div>
          <div className='transition-all hover:bg-[#333337] p-10 w-[357px] rounded-lg'>
            <div className='rounded-full w-[60px] h-[60px] bg-[#333337] border-[#454548] border flex items-center justify-center' >
              <img className='rounded-full w-[45px] h-[45px]  ' src='/media/Tenant.jpeg' ></img>
            </div>
            <h1 className='mt-5 mb-5 text-white tracking-wider text-xl'>Tenant Management</h1>
            <p className='text-[#a1a1aa] mt-2 '>Clinics employ custom authentication for login. FHIR R4 resources store data in the database. Each clinic's data is stored uniquely.</p>
          </div>
        </div>
        <div className='grid grid-cols-4 mt-20 mb-11'>
          <div className='ml-12 col-span-3'>
            <h1 className='p-2 text-white text-left text-4xl font-bold tracking-wider'> The Significance of <span className='text-cyan-400'> Achievement</span>: Unlocking <span className='text-cyan-400'>Success</span> and <span className='text-cyan-400'>Fulfillment</span> </h1>
          </div>
          <div className='ml-12 col-span-1'>
          </div>
        </div>
        <div className='grid grid-cols-4 mt-20 mb-11'>
          <div className='ml-14 mr-14 mt-5 mb-5 col-span-3'>
            <ul role="list" className="marker:text-white list-disc pl-5 space-y-3 text-[#a1a1aa] mt-2  text-xl " >
              <li>Skilled in <span className=' text-cyan-400'>full-cycle </span>Java <span className=' text-cyan-400'>project development </span>for clients, from concept to completion.</li>
              <li><span className=' text-cyan-400'>Early win! </span> Rigorous testing ensured flawless logic delivery. </li>
              <li>Specialized in <span className=' text-cyan-400'> integrating libraries</span>, crafting apps, and providing ongoing support.</li>
              <li>Built a cutting-edge <span className=' text-cyan-400'>HAPI FHIR server </span>, ensuring seamless <span className=' text-cyan-400'> R4 data</span> exchange.</li>
              <li>Engineered custom app logic using <span className=' text-cyan-400'>interceptors</span> and <span className=' text-cyan-400'>providers</span>. </li>
              <li>Integrated Apache Kafka for efficient inter-microservice <span className=' text-cyan-400'>messaging</span>.</li>
              <li>Used <span className=' text-cyan-400'>pdfBox , iText libraries </span> to read and fill form pdf.</li>
              <li>Integrated <span className=' text-cyan-400'>third party EHR</span> like epic and cerner for seamless data flow.</li>
              <li><span className=' text-cyan-400'>Upgraded microservices </span>from Spring Boot 2.x/Java 8 to Spring Boot 3.x/Java 17.</li>
              <li>Authored precise <span className=' text-cyan-400'>DB queries </span>for data extraction and filtration from <span className=' text-cyan-400'>various tables</span>.</li>
            </ul>
          </div>
          <div className=' mt-14 col-span-1 flex flex-wrap hover:scale-100'>
          <img className='rounded-full w-[300px] h-[300px]  ' src='/media/JavaCycle.png' ></img>
          </div>
        </div>

      </div>
      <div className='sm:col-span-1 sm:block hidden' ></div>

    </div>
  )
}

export default Project