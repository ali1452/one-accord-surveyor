"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeIcon from '@mui/icons-material/Home';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from './hamburgerMenu.module.scss'
import Link from 'next/link';


type Props = {
    open:boolean
    toggleDrawer:()=>void
}



const servicesMenuItem = [
  {name:'In House Design', url:'/services' }, {name:'Hoarding Boards', url:'/services'}, {name:'Banners', url:'/services'},{name:'Signage & Wayfinding', url:'/services'},{name:'Commercial', url:'/services'},
  {name:'Exibition', url:'/services'},{name:'Bars and Counters', url:'/services'},{name:'Flooring', url:'/services'},{name:'Foamex Printing', url:'/services'}
]

const materialMenuItem = [
  {name:'ACM',url:'/'}, {name:'HIP',url:'/'}, {name:'Foamex',url:'/'},{name:'Canvas',url:'/'},{name:'Acrylic',url:'/'},
  {name:'Correx',url:'/'}
  ]

const memuItem = [
  {name:'Our Services', isAccordion:true,  data:servicesMenuItem},
  {name:'Case Studies', isAccordion:false,  data:null},
  {name:'Material for sale', isAccordion:true,  data:materialMenuItem},
  {name:'Gallery', isAccordion:false,  data:null},
  {name:'Contact us', isAccordion:false,  data:null},

]

const HamburgerMenu = ({open,toggleDrawer}: Props) => {

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" >
      <List classes={{root:style.ListItem_root}}>
      <ListItem>
        <div onClick={()=>toggleDrawer()}>
        <img src='./one-accord-logo.jpeg' alt='company_logo' width='150px'  />
        </div>
      </ListItem>
      <ListItem>
        <div className={style.item_div}>
        <Link href='/'>
        <HomeIcon fontSize='medium' onClick={()=>toggleDrawer()} />
        </Link>
        </div>
      </ListItem>

      {memuItem.map((menu,i)=>{
        if(menu.isAccordion){
          return (
            <ListItem key={'menu'+ i}>
            <Accordion
            square={true}
            disableGutters={true}
             classes={{
              region:style.accordion_region,
               root:style.accordion

             }
             }
            >
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            classes={{
              root:style.summary_content
            }}
            >
            {menu.name}
            </AccordionSummary>
            <AccordionDetails classes={{root:style.accordion_detail_root}}>
            {menu.data?.map((item,index)=>{
              return (
                <Link href={item.url} key={'service'+ index}><p onClick={()=>toggleDrawer()}>{item.name}</p></Link>
              )
            })}
            </AccordionDetails>
            </Accordion>
            </ListItem>
          )
        }else{
          return (
            <ListItem key={'menu'+ i}>
            <div className={style.item_div} onClick={()=>toggleDrawer()}>
            {menu.name}
            </div>
            </ListItem>

            )
        }
        
      })}
      
      </List>
    </Box>
  );

  return (
    <div className={style.hamburger_menu_container}>
    <Drawer open={open} onClose={()=>toggleDrawer()} classes={{paper:style.drawer_paper}}>
      {DrawerList}
    </Drawer>
  </div>
  )
}

export default HamburgerMenu