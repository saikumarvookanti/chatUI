import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const StatsCard = () => {
  return (
    <div className='statsCard'>
        
        <div className='statDetails'>
            <div>
                <AccessTimeIcon sx={{color:' #3377ff'}} />&nbsp; 
                <div>
                <span style={{'color':'#3377ff'}}><b>13h</b></span>
                <span style={{fontSize:'14px'}}>Time</span>
                </div>
            </div>
            <div>
                <PeopleOutlineIcon className='iconBackground' sx={{color:'#00cc44'}} />&nbsp;
                <div>
                <span style={{'color':'#00cc44'}}><b>188</b> </span>
                <span style={{fontSize:'14px'}}>Attended</span>
                </div>
            </div>
            <div>
                <EventAvailableIcon className='iconBackground'  sx={{color:'#004d99'}} />&nbsp;
                <div>
                    <span style={{'color':'#004d99'}}><b>119</b> </span>
                    <span style={{fontSize:'14px'}}>Meetings</span>
                </div>
                
            </div>
            <div>
                <CancelPresentationIcon className='iconBackground' sx={{color:' #ff3300'}} />&nbsp;
                <div>
                    <span style={{'color':'#ff3300'}}><b>41</b> </span>
                    <span style={{fontSize:'14px'}}>Rejected</span> 
                </div>
                
            </div>
        </div>
        <div className='statChart'>

        </div>
    </div>
  )
}

export default StatsCard