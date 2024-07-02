import React from 'react'
import list from './../list.json'
import ProjectCard from './ProjectCard'
export default function Project() {
    console.log(list)
  return (
    <>
    <section id='project'>
    <div className="bg-gradient-to-b from-blue-400 to-blue-900 pt-10 md:pt-16 pb-10">
        <div className="text-black text-4xl text-center mb-8"><h1 className="font-bold">Project</h1></div>

    <div className='grid grid-cols-1 md:grid-cols-3 max-w-screen md:px-24  '>
        {list.map((data)=>{
            return <ProjectCard data={data}key={data.id} />
        })
        
    }
      
    </div>
    </div>
    </section>
    </>
  )
}
