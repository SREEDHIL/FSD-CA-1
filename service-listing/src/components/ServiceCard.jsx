import React from 'react'

const ServiceCard = () => {
    const services = [
        {
            title: "Web Development",
            description: "It is the creation of a Web application"
        },
        {
            title: "Designing",
            description: "It brings the design to life"
        }
    ]

    return (
        <div>
            {services.map((service)=>(
                key={service}, service={service}
            ))};
        </div>
    )
}

export default ServiceCard
