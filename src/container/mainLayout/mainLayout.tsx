import React from 'react'
import style from './mainLayout.module.scss'
import EmailIcon from '@mui/icons-material/Email';

type Props = {}

const MainLayout = (props: Props) => {
  return (
    <div className={style.main_layout_container}>
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
  )
}

export default MainLayout