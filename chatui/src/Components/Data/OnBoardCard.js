import React from 'react';
import { Button } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

const OnBoardCard = () => {
  return (
    <div className='onBoardCard'>
        <h4>Onboard Clients</h4>
        <p>Share the link with prospects and discuss all stuff</p>
        <Button color='primary' variant='contained'>Copy Link &nbsp; <LinkIcon sx={{fontSize:'20px'}}/></Button>
    </div>
  )
}

export default OnBoardCard