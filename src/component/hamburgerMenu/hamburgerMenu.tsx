"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from './hamburgerMenu.module.scss'


type Props = {
    open:boolean
    toggleDrawer:()=>void
}



const servicesMenuItem = [
  {name:'In House Design'}, {name:'Hoarding Boards'}, {name:'Banners'},{name:'Signage & Wayfinding'},{name:'Commercial'},
  {name:'Exibition'},{name:'Bars and Counters'},{name:'Flooring'},{name:'Foamex Printing'}
]

const memuItem = [
  {name:'Our Services', isAccordion:true,  data:servicesMenuItem},
  {name:'Case Studies', isAccordion:false,  data:null},
  {name:'Material for sale', isAccordion:true,  data:servicesMenuItem},
  {name:'Gallery', isAccordion:false,  data:null},
  {name:'Contact us', isAccordion:false,  data:null},

]

const HamburgerMenu = ({open,toggleDrawer}: Props) => {

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={()=>toggleDrawer()}>
      <List>
      <ListItem>
        <div>
        <img src='./southshore_logo.jpg' alt='company_logo' />
        </div>
      </ListItem>
      <ListItem>
        <div>
        <HomeIcon fontSize='small' />
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
              content:style.summary_content
            }}
            >
            {menu.name}
            </AccordionSummary>
            <AccordionDetails>
            {menu.data?.map((item,index)=>{
              return (
                <p key={'service'+ index}>{item.name}</p>
              )
            })}
            </AccordionDetails>
            </Accordion>
            </ListItem>
          )
        }else{
          return (
            <ListItem key={'menu'+ i}>
            <div>
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
    <Drawer open={true} onClose={()=>toggleDrawer()}>
      {DrawerList}
    </Drawer>
  </div>
  )
}

export default HamburgerMenu