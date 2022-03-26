import './Container.css';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltSharpIcon from '@mui/icons-material/SentimentSatisfiedAltSharp';
import { useState } from 'react';

const ChatContainer = () => {

  const [typedMessage,setTypedMessage]=useState();

  const messageHandler=(e)=>{
    let value=e.target.value;
    setTypedMessage(value);
  }
  const sendHandler=()=>{
      alert('message sent');
  }
  const messages=[{message:'Hi',user:'current'},{message:'Hii',user:'bot'},{message:'How are you',user:'current'},{message:'I am Fine,How are you',user:'bot'},
  {message:'Hi',user:'current'},{message:'Hii',user:'bot'},{message:'How are you',user:'current'},{message:'I am Fine,How are you',user:'bot'},
  {message:'Hi',user:'current'},{message:'Hii',user:'bot'},{message:'How are you',user:'current'},{message:'I am Fine,How are you',user:'bot'},
  {message:'Hi',user:'current'},{message:'Hii',user:'bot'},{message:'How are you',user:'current'},{message:'I am Fine,How are you',user:'bot'},
  {message:'Hi',user:'current'},{message:'Hii',user:'bot'},{message:'How are you',user:'current'},{message:'I am Fine,How are you',user:'bot'},
  {message:'Hi',user:'current'},{message:'Hii',user:'bot'},{message:'How are you',user:'current'},{message:'I am Fine,How are you',user:'bot'},
  {message:'Hi',user:'current'},{message:'Hii',user:'bot'},{message:'How are you',user:'current'},{message:'I am Fine,How are you',user:'bot'},
];
  

  const messageArea=<div className='messageDisplayArea'>
    {messages.map((message)=>{
        return(
          <div className='messages'>
            {message.user==='current' ?
            <p className='userMessage'>{message.message}</p>  :
            <p className='botMessage'>{message.message}</p>
          }
          </div>
        );
    })}

  </div>
  const textArea=<div className='textArea'>
    <AttachFileIcon style={{'transform':'rotate(45deg)'}} sx={{'color':'#495050','fontSize':'24px'}}/>
    <div className='messageInput'><input type='text' placeholder='Enter your message here' onChange={(e)=>messageHandler(e)} value={typedMessage} /><SentimentSatisfiedAltSharpIcon sx={{'color':'#ff8533','font-size':'24px '}}/></div>
    <Button color='primary' variant='contained' onClick={sendHandler}>send <SendIcon /></Button>
  </div>

  return (
    <div className='chatContainer'>
      <div style={{'min-height':'88%'}}>{messageArea}</div>
      {textArea}
      </div>
  )
}

export default ChatContainer