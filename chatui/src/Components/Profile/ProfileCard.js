import React from 'react';
import './profileStyling.css';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
// import chatLogo from "../../chatLogo.png";
import pp from '../../common/img4.jpg';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));
function ProfileCard() {
  return (
    <div className='profileCard'>
      <img src={pp} alt="pp"/>
      {/* <div className='detailsNamecircle'><span>BB</span></div> */}
      <div><span className='name'>{"Bill Brandford"}</span><SettingsOutlinedIcon  fontSize="small" /> </div>
      <p className='designation'>{"Lead UX/UI Designer"}</p>
      <div className='switchClass'><AntSwitch defaultChecked /><span style={{'fontWeight':'300','paddingLeft':'5px'}}>{"Active"}</span></div>
      
    </div>
  )
}

export default ProfileCard;