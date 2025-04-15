// import { useState } from 'react'
import ServiceCard from './components/ServiceCard'
import './App.css'

function App() {
  // const services = [
  //   {
  //     title : "Web Development",
  //     description : "It is the creation of a Web application"
  //   },
  //   {
  //     title : "Designing",
  //     description : "It brings the design to life"
  //   }
  // ]

  return (
    <>
      <ServiceCard/>
      {/* <h2>{ServiceCard.services.title}</h2>
      <p>{ServiceCard.services.description}</p> */}
      {/* {services.map((service)=>(
        key={service}, service={service}
      ))}; */}
    </>
  )
}

export default App
