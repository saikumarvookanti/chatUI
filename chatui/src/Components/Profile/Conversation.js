import { useState } from "react";
import  './profileStyling.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Conversation = () => {
  const activeConversation=[{name:'Henry Boyd',status:'Active',unread:2},
  {name:'Martha Curtis',status:'Active',unread:0},
  {name:'Philip Tucker',status:'Active',unread:0},
  {name:'Christine Reid',status:'Active',unread:3},
  {name:'Jerry Guzman',status:'Active',unread:0},
  {name:'Russel Williams',status:'Active',unread:0},
  {name:'Billy Ruthord',status:'Active',unread:0}
  ];
  const ArchievedConversations=[{name:'Joe Root',status:'Archieved',unread:2},
  {name:'Json Roy',status:'Archieved',unread:0},
  {name:'Ben Stokes',status:'Archieved',unread:0},
  {name:'Jofra Archer',status:'Archieved',unread:3},
  {name:'Moeen Ali',status:'Archieved',unread:0},
  {name:'Chris Gayle',status:'Archieved',unread:0},
  {name:'Maxwell Gleen',status:'Archieved',unread:0}
  ];

  const [active,setActive]=useState(activeConversation);
  const [showActive,setShowActive]=useState(true);
  const [showArchive,setShowArchieve]=useState(false);

  const activeShow=<div>
    {active.map((details)=>{
      return (
        <div  className='displayNameStyling' >
          <span>{details.name}</span>
          {details.unread > 0 && <span className="activeCount" style={{"backgroundColor":'#ff471a','color':'white'}}>{details.unread}</span> }
        </div>
      );
    })}
  </div>

  const archieveShow=<div>
  {ArchievedConversations.map((details)=>{
    return (
      <div  className='displayNameStyling'>
        <span>{details.name}</span>
        {details.unread > 0 && <span className="activeCount" style={{"backgroundColor":'#ff471a','color':'white'}}>{details.unread}</span> }
      </div>
    );
  })}
</div>

const activeHandler=()=>{
  setShowActive(!showActive);
  setShowArchieve(false);
}
const archieveHandler=()=>{
  setShowArchieve(!showArchive);
  setShowActive(false);
}

const activeCount=active.filter((user)=>(user.status==='Active'));
  return (
    <div className="conversation">
      <div className="activeConv">
        <div className="activeConvheading" onClick={activeHandler}> <p>{"Active Conversations"}&nbsp; <span className="activeCount">{activeCount.length} </span> </p> 
        {showActive ? <span style={{'transform':'rotate(90deg)'}}><ArrowBackIosIcon fontSize="smaller"  /></span> :<span style={{'transform':'rotate(270deg)'}}><ArrowBackIosIcon fontSize="smaller"  /></span>}
      </div>
          {showActive && activeShow}
      </div>
      <div className="archievedConv">
      <div className="activeConvheading" onClick={archieveHandler}> <p>{"Archived Conversations"}&nbsp; <span className="activeCount">{"4"} </span> </p> 
        {showArchive ? <span style={{'transform':'rotate(90deg)'}}><ArrowBackIosIcon fontSize="smaller"  /></span> :<span style={{'transform':'rotate(270deg)'}}><ArrowBackIosIcon fontSize="smaller"  /></span>}
      </div>
      {showArchive && archieveShow}
      </div>  

    </div>
  )
}

export default Conversation