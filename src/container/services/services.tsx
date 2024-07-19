import React from 'react'
import style from './services.module.scss'

type Props = {}

const Services = (props: Props) => {
  return (
    <div className={style.service_container}>
        <p className={style.main_heading}>Services</p>
        <p>
            We offer a wide range of services to meet the needs of landlords and property managers. 
            Our comprehensive service offerings ensure that your properties are compliant, safe, and well-maintained.
        </p>
        <div>
        <p className={style.sub_heading}>3.1 Landlord Certifications</p>
        <p>
            We provide a full suite of landlord certification services, ensuring your properties meet all legal requirements 
            and standards. Our certifications include
        </p>
        <p><span className={style.bold_text}>Energy Performance Certificate (EPC):</span> Assessing the energy efficiency of your property.</p>
        <p><span className={style.bold_text}>Gas Safety Certificate:</span> Ensuring all gas appliances are safe and compliant.</p>
        <p><span className={style.bold_text}>Electrical Installation Condition Report (EICR):</span> Evaluating the safety of your electrical installations.</p>
        <p><span className={style.bold_text}>Portable Appliance Testing (PAT):</span> Testing electrical appliances for safety.</p>
        <p><span className={style.bold_text}>Fire Door Assessment:</span> Ensuring your fire doors meet safety regulations.</p>
        <p><span className={style.bold_text}>Retrofit Assessments:</span> Upgrading properties to meet energy efficiency standards.</p>
        <p><span className={style.bold_text}>Floor Planning:</span> Creating accurate floor plans for property listings and management.</p>
        </div>
        <div>
            <p className={style.sub_heading}>3.2 Project Management (Construction and Refurbishment)</p>
            <p>
            Our project management services cover all aspects of construction and refurbishment projects. From initial planning 
            to final execution, we ensure your project is completed on time, within budget, and to the highest standards.
            </p>
            <p>
            <span className={style.bold_text}>Construction Management:</span> Overseeing all phases of construction projects, ensuring quality and efficiency.
            </p>
            <p>
            <span className={style.bold_text}>Refurbishment Management:</span> Managing property refurbishments to enhance value and appeal.
            </p>
            <p>
            <span className={style.bold_text}>Budget Management:</span> Keeping your project on track financially.
            </p>
            <p>
            <span className={style.bold_text}>Quality Control:</span> Ensuring all work meets our rigorous standards of excellence.
            </p>
            <p>
            <span className={style.bold_text}>Client Communication:</span> Keeping you informed and involved throughout the project.
            </p>
        </div>
        <div>
            <p className={style.sub_heading}>3.3 Building Surveys</p>
            <p>
                Our building survey services provide detailed insights into the condition of your property. This helps you make informed decisions
                about maintenance, repairs, and investments. Our surveys include:
            </p>
            <p><span className={style.bold_text}>Stock Condition Report:</span> Assessing the overall condition of the property to identify necessary repairs and maintenance.</p>
            <p><span className={style.bold_text}>Housing Health and Safety Rating System (HHSRS):</span> Evaluating potential health and safety risks within the property.</p>
            <p><span className={style.bold_text}>Party Wall Surveying:</span></p>
            <p><span className={style.bold_text}>Quantity Surveying:</span></p>
            <p>
            <span className={style.bold_text}>Rough Estimation for Project Cost:</span> Providing an initial cost estimate for potential repair or refurbishment projects based
                on the survey findings.
            </p>
            
        </div>
        <div>
            <p className={style.sub_heading}>Get in Touch</p>
            <p>
                We would love to hear from you. Whether you have questions about our services or need a quote, our team is ready to assist you. 
                Contact us today to discuss your needs and find out how we can help.
            </p>
            <p>
            <span className={style.bold_text}>Phone:</span> 020 3740 9165
            </p>
            <p>
            <span className={style.bold_text}>Email:</span> Info@1accord.co.uk
            </p>
            <p>
            <span className={style.bold_text}>Address:</span> Highlands House the Broadway, London SW19 1NE
            </p>
            <p className={style.bold_text}>
            Or fill out our online contact form and we will get back to you as soon as possible.
            </p>
        </div>
    </div>
  )
}

export default Services