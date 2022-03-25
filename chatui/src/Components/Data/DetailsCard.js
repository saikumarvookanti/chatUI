import React from 'react';
import './dataStylings.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const DetailsCard = () => {
    let details={
        name:'Henry Boyd',
        email:'henryBoyd@gmail.com'
    }
  return (
    <div className='detailsCard'>
        <div className='detailsNamecircle'><span>HB</span></div>
        <div className='detailsNameEmail'>
            <p><EmailOutlinedIcon sx={{fontSize:'20px'}} />&nbsp;{details.email} </p>
            <p><AccountCircleOutlinedIcon sx={{fontSize:'20px'}}  />&nbsp;{details.name} </p>
            </div>
        <div className='archiveBtn'><Button variant='outlined'>Archive <DeleteOutlineIcon sx={{color:'blue[100]'}}/> </Button></div>
    </div>
  )
}

export default DetailsCard