import React from 'react'
import style from './footer.module.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import Tooltip from '@mui/material/Tooltip';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={style.footer_container}>
        <div className={style.footer_main}>
            <div>
              <div className={style.img_wrap}>
                <img  src='./southshore_logo.jpg' alt="company_logo" width={300} />
              </div>
              <div className={style.icon_wrap}>
                <p className={style.icon_box}>
                <FacebookIcon fontSize='large' />
                </p>
                <p className={style.icon_box}>
                  <YouTubeIcon fontSize='large' />
                </p>
                <p className={style.icon_box}>
                  <InstagramIcon fontSize='large' />
                </p>
              </div>
            </div>
            <div className={style.quick_link_wrap}>
            <p className={style.quick_link_heading}>Quick Links</p>
            <p className={style.quick_link_item}>About Us</p>
            <p className={style.quick_link_item}>Our Services</p>
            <p className={style.quick_link_item}>Case Studies</p>
            <p className={style.quick_link_item}>Contact Us</p>

            </div>
            <div className={style.contact_wrap}>
              <p className={style.contact_heading}>
                Contact Us
              </p>
              <p className={style.contact_item}>
               <Tooltip title="033343678228" classes={{tooltip:style.tooltip}}>
               <>
               <PhoneIcon />
               033343678228
               </>
                </Tooltip> 
              </p>
              <p className={style.contact_item}>
                <Tooltip title='info@Accord.com.uk' classes={{tooltip:style.tooltip}}> 
                <>
                <EmailIcon />
                info@Accord.com.uk
                </>
                </Tooltip>
              </p>
              <p className={style.contact_item}>
                <Tooltip title='business location' classes={{tooltip:style.tooltip}}> 
                <>
                <PlaceIcon />Gravaline House, Wallingford<br/>
                Road,London
                </>
                </Tooltip>
              </p>
            </div>
            <div>
            <p>  
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2491.0280513620164!2d0.038921!3d51.365781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDIxJzU2LjgiTiAwwrAwMicyMC4xIkU!5e0!3m2!1sen!2s!4v1713013995125!5m2!1sen!2s" width="100%" height="350" style={{ border: '0' }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </p>
            </div>

        </div>
    <p className={style.footer_bottom}>© 2024 One Accord Surveyor . All Rights Reserved.</p>
    </div>
  )
}

export default Footer