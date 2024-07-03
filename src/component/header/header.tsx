"use client"
import React, { useState } from 'react'
import style  from './header.module.scss'
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';

type Props = {}

const servicesMenuItem = [
  {name:'In House Design'}, {name:'Hoarding Boards'}, {name:'Banners'},{name:'Signage & Wayfinding'},{name:'Commercial'},
  {name:'Exibition'},{name:'Bars and Counters'},{name:'Flooring'},{name:'Foamex Printing'}
]

const materialMenuItem = [
  {name:'ACM'}, {name:'HIP'}, {name:'Foamex'},{name:'Canvas'},{name:'Acrylic'},
  {name:'Correx'}
  ]

const Header = (props: Props) => {
  const [opensideBar, setOpenSideBar] = useState(false)

  const toggle =()=>{
    setOpenSideBar(!opensideBar)
  }
  return (
    <div className={style.header_container}>
        <div className={style.logo_wrap}>
          <img src='./one-accord-logo.jpeg' alt='company_logo' />
        </div>
        <div className={style.menu_wrap}>
        <div className={style.menu_item}>
        <HomeIcon />
        </div>
        <div className={style.arrow_menu_item}>
          Our Services
          <span><KeyboardArrowDownIcon /></span>
          <div className={style.drowdown_box}>
          <div className={style.dropdown}>
          {servicesMenuItem.map((item,index)=>{
            return (
              <div className={style.dropdown_item} key={'services'+index}>{item.name}</div>
            )
          })}
          </div>
          </div>
        </div>
        <p className={style.menu_item}>Case Studies</p>
        <div className={style.arrow_menu_item}>
          Material For Sale
          <span><KeyboardArrowDownIcon /></span>
          <div className={style.drowdown_box}>
          <div className={style.dropdown}>
          {materialMenuItem.map((item,index)=>{
            return (
              <div className={style.dropdown_item} key={'material'+index}>{item.name}</div>
            )
          })}
          </div>
          </div>
        </div>
        <p className={style.menu_item}>Gallery</p>
        <p className={style.menu_item}>Contact us</p>
        <div className={style.contact_menu_item_contact}>
        <CallIcon />
        </div>

        </div>
        <div  className={style.hamburger_icon}>
        {opensideBar ? <CloseIcon  fontSize='large'  onClick={()=>toggle()} /> : <MenuIcon fontSize='large'  onClick={()=>toggle()} />}
        <HamburgerMenu open={opensideBar} toggleDrawer={toggle} />
        </div>
       
    </div>
  )
}

export default Header