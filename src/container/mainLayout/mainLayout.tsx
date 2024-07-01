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
          Print Station Services
        </p>
        <p className={style.print_text}>
        Our team of experienced professionals is dedicated to helping you create the perfect printed materials for your business or event. Whether you need  
        signage, exhibition prints, site hoarding prints, banners, wallpapers or anything in between, we can help. We offer a wide variety of solutions, including 
        digital UV printing, design and digital cutting services.
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
    </div>
  )
}

export default MainLayout