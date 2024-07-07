import React from 'react'
import style from './mainLayout.module.scss'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

type Props = {}

const station_service_data = [
  {
    url:'https://printstation.co.uk/wp-content/uploads/2023/07/signage.jpg', text:'signage'
  },
  {
    url:'https://printstation.co.uk/wp-content/uploads/2023/03/exhibition.jpg', text:'exibitions'
  },
  {
    url:'https://printstation.co.uk/wp-content/uploads/2023/03/canvas_banners.jpg', text:'banners'
  },
  {
    url:'https://printstation.co.uk/wp-content/uploads/2023/02/wallpapers.jpg',
    text:'wallpapers'
  }
]

const journeyData = [
  {url:'https://printstation.co.uk/wp-content/uploads/2023/03/image_1.jpg', text:'Appointment Booking'},{url:'https://printstation.co.uk/wp-content/uploads/2023/03/image_2.jpg', text:'Representative Confirmation'},
  {url:'https://printstation.co.uk/wp-content/uploads/2023/03/image_3.jpg', text:'Certificate Delivery'}
                    ]

const technology_data = [
  {text:'quality',  image:'https://printstation.co.uk/wp-content/uploads/2023/03/quality-1.png', color:'#FDE6D4'},
  {text:'innovation',  image:'https://printstation.co.uk/wp-content/uploads/2023/03/innovation-1.png', color:'#FCE1EB'},
  {text:'customer oriented',  image:'https://printstation.co.uk/wp-content/uploads/2023/03/people.png', color:'#E8FACD'},
  {text:'sustainability',  image:'https://printstation.co.uk/wp-content/uploads/2023/03/sustainability-1.png', color:'#CFE3FD'},

]

const MainLayout = (props: Props) => {
  return (
    <div  className={style.main_layout_container}>
    <div className={style.top_layout_container}>
        <div>
            <p className={style.main_heading}>
            Specialist in Large<br/> Format Print for the<br/> Commercial Sector
            </p>
            <div className={style.btn_wrap}>
                <p className={style.service_btn}>Our Services</p>
                <p className={style.enquiry_btn}>
                 <EmailIcon />  Make an Enquiry
                </p>
            </div>
        </div>
        <div className={style.image_wrap}>
            <img src='https://printstation.co.uk/wp-content/uploads/2023/07/printstation-hero.jpg' alt="images" />
        </div>
       
    </div>
    <div className={style.print_station_contianer}>
      <div className={style.text_container}>
        <p className={style.print_heading}>
          One Accord Surveyors Services
        </p>
        <p className={style.print_text}>
          We are dedicated to providing government recognized services in property certifications and project management. Whether you are a landlord in need of 
          certifications or looking to manage a construction or refurbishment project, we have the expertise and experience to help you achieve your goals. Our 
          commitment to quality and customer satisfaction sets us apart in the industry. Explore our services to see how we can assist you.
        </p>
        <p className={style.query_btn}>
        <PhoneIcon /> Make an enquiry</p>
      </div>
      <div className={style.image_container}>
        {
           station_service_data.map((item,index)=>{
            return (
              <div className={style.image_box} key={'service-data' +index}>
              <img src={item.url} alt='image' />
              <p className={style.img_bottom_text}>{item.text}</p>
              </div>

            )
           })
        }
      </div>
    </div>
    <div className={style.journey_container}>
      <p className={style.journey_heading}>Your Journey with One Accord Surveyors </p>
      <div className={style.dot_box}>
        <p className={style.dot}></p>
        <p className={style.dot}></p>
        <p className={style.dot}></p>
      </div>
      <div className={style.journey_image_wrap}>
        {journeyData.map((item,index)=>{
          return (
            <p key={'journey_'+index} className={style.img_box}><img src={item.url} alt='image' /></p>
          )
        })}
          
      </div>

    </div>
    <div className={style.technology_container}>
    <p className={style.technology_heading}>We Provide High Quality Services Using The Latest Technology</p>
      <div className={style.dot_box}>
        <p className={style.dot}></p>
        <p className={style.dot}></p>
        <p className={style.dot}></p>
      </div>
    <div className={style.technology_wrap}>

      {technology_data.map((item,index)=>{
        return (
          <div key={'tech_'+index} className={style.technology_box} style={{backgroundColor:`${item.color}`}}>
            <p><img src={item.image} /></p>
            <p className={style.box_text}>{item.text}</p>
          </div>
        )
      })}
    </div>
    </div>
    </div>
  )
}

export default MainLayout