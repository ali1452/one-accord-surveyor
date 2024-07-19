import React from 'react'
import style from './services.module.scss'

type Props = {}

const Services = (props: Props) => {
  return (
    <div className={style.service_container}>
        <h1>Services</h1>
        <p>
            We offer a wide range of services to meet the needs of landlords and property managers. 
            Our comprehensive service offerings ensure that your properties are compliant, safe, and well-maintained.
        </p>
        <div>
        <p>3.1 Landlord Certifications</p>
        <p>
            We provide a full suite of landlord certification services, ensuring your properties meet all legal requirements 
            and standards. Our certifications include
        </p>
        <p>Energy Performance Certificate (EPC): Assessing the energy efficiency of your property.</p>
        <p>Gas Safety Certificate: Ensuring all gas appliances are safe and compliant.</p>
        <p>Electrical Installation Condition Report (EICR): Evaluating the safety of your electrical installations.</p>
        <p>Portable Appliance Testing (PAT): Testing electrical appliances for safety.</p>
        <p>Fire Door Assessment: Ensuring your fire doors meet safety regulations.</p>
        <p>Retrofit Assessments: Upgrading properties to meet energy efficiency standards.</p>
        <p>Floor Planning: Creating accurate floor plans for property listings and management.</p>
        </div>
        <div>
            <p>3.2 Project Management (Construction and Refurbishment)</p>
            <p>
            Our project management services cover all aspects of construction and refurbishment projects. From initial planning 
            to final execution, we ensure your project is completed on time, within budget, and to the highest standards.
            </p>
            <p>
            Construction Management: Overseeing all phases of construction projects, ensuring quality and efficiency.
            </p>
            <p>
            Refurbishment Management: Managing property refurbishments to enhance value and appeal.
            </p>
            <p>
            Budget Management: Keeping your project on track financially.
            </p>
            <p>
            Quality Control: Ensuring all work meets our rigorous standards of excellence.
            </p>
            <p>
            Client Communication: Keeping you informed and involved throughout the project.
            </p>
        </div>
        <div>
            <p>3.3 Building Surveys</p>
            <p>
                Our building survey services provide detailed insights into the condition of your property. This helps you make informed decisions
                about maintenance, repairs, and investments. Our surveys include:
            </p>
            <p>Stock Condition Report: Assessing the overall condition of the property to identify necessary repairs and maintenance.</p>
            <p>Housing Health and Safety Rating System (HHSRS): Evaluating potential health and safety risks within the property.</p>
            <p>Party Wall Surveying:</p>
            <p>Quantity Surveying:</p>
            <p>
                Rough Estimation for Project Cost: Providing an initial cost estimate for potential repair or refurbishment projects based
                on the survey findings.
            </p>
            
        </div>
        <div>
            <p>Get in Touch</p>
            <p>
                We would love to hear from you. Whether you have questions about our services or need a quote, our team is ready to assist you. 
                Contact us today to discuss your needs and find out how we can help.
            </p>
            <p>
            Phone: 020 3740 9165
            Email: Info@1accord.co.uk
            </p>
            <p>
            Address: Highlands House the Broadway, London SW19 1NE
            </p>
            <p>
            Or fill out our online contact form and we will get back to you as soon as possible.
            </p>
        </div>
    </div>
  )
}

export default Services