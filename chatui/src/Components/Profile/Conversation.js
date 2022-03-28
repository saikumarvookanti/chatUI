import { useState } from "react";
import  './profileStyling.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import profile from "../../common/img5.jpg";
import profile1 from "../../common/img1.jpg";
import profile2 from "../../common/img2.jpg";
import profile3 from "../../common/img3.jpg";
import profile4 from "../../common/img4.jpg";
import profile5 from "../../common/img6.jpg";
import profile6 from "../../common/img7.jpg";
import profile7 from "../../common/img8.jpg";


const Conversation = () => {
  const activeConversation=[{name:'Henry Boyd',status:'Active',unread:2,img:profile1},
  {name:'Martha Curtis',status:'Active',unread:0,img:profile},
  {name:'Philip Tucker',status:'Active',unread:0,img:profile2},
  {name:'Christine Reid',status:'Active',unread:3,img:profile3},
  {name:'Jerry Guzman',status:'Active',unread:0,img:profile5},
  {name:'Russel Williams',status:'Active',unread:0,img:profile7},
  {name:'Billy Ruthord',status:'Active',unread:0,img:profile6}
  ];
  const ArchievedConversations=[{name:'Joe Root',status:'Archieved',unread:2,img:profile},
  {name:'Json Roy',status:'Archieved',unread:0,img:profile2},
  {name:'Ben Stokes',status:'Archieved',unread:0,img:profile3},
  {name:'Jofra Archer',status:'Archieved',unread:3,img:profile1},
  {name:'Moeen Ali',status:'Archieved',unread:0,img:profile5},
  {name:'Chris Gayle',status:'Archieved',unread:0,img:profile6},
  {name:'Maxwell Gleen',status:'Archieved',unread:0,img:profile7}
  ];

  const [active,setActive]=useState(activeConversation);
  const [showActive,setShowActive]=useState(true);
  const [showArchive,setShowArchieve]=useState(false);

  const activeShow=<div>
    {active.map((details)=>{
      return (
        <div  className='displayNameStyling' >
          <span><img src={details.img} alt="Pic" />&nbsp;{details.name}</span>
          {details.unread > 0 && <span className="activeCount" style={{"backgroundColor":'#ff471a','color':'white'}}>{details.unread}</span> }
        </div>
      );
    })}
  </div>

  const archieveShow=<div>
  {ArchievedConversations.map((details)=>{
    return (
      <div  className='displayNameStyling'>
        <span><img src={details.img} alt="Pic" />&nbsp;{details.name}</span>
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
        {showActive ? <span style={{'transform':'rotate(90deg)'}}><ArrowBackIosIcon sx={{'fontSize':'14px'}}  /></span> :<span style={{'transform':'rotate(270deg)'}}><ArrowBackIosIcon sx={{'fontSize':'14px'}} /></span>}
      </div>
          {showActive && activeShow}
      </div>
      <div className="archievedConv">
      <div className="activeConvheading" onClick={archieveHandler}> <p>{"Archived Conversations"}&nbsp; <span className="activeCount">{"4"} </span> </p> 
        {showArchive ? <span style={{'transform':'rotate(90deg)'}}><ArrowBackIosIcon sx={{'fontSize':'14px'}}  /></span> :<span style={{'transform':'rotate(270deg)'}}><ArrowBackIosIcon sx={{'fontSize':'14px'}}  /></span>}
      </div>
      {showArchive && archieveShow}
      </div>  

    </div>
  )
}

export default Conversation