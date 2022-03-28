import './Container.css';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltSharpIcon from '@mui/icons-material/SentimentSatisfiedAltSharp';
import { useState } from 'react';
import userPP from '.././common/img4.jpg';
import botPP from '.././common/img1.jpg';

const ChatContainer = () => {

  const [typedMessage,setTypedMessage]=useState();
  const messages=[{message:'Hi Henry!!',user:'current'},{message:'Hey Bill, nice to meet you!',user:'bot'},{message:'Hope you are doing fine',user:'bot'},{message:'i am good thanks for asking',user:'current'},{message:'i am interested to know more about your prices and services you offer',user:'bot'},
  {message:'Sure, please check below link to find more information',user:'current'},
  {message:'I will get in touch if there is anything unclear, Thanks for now!',user:'bot'},
  {message:'Have a great day!',user:'bot'},
  {message:'Thanks Buddy,you too as well',user:'current'},
];

const [displayMessages,setDisplayMessages]=useState([...messages]);

  const messageHandler=(e)=>{
    let value=e.target.value;
    setTypedMessage(value);
  }

  const trigger = [
    ["hi", "hey", "hello"],
    ["how are you", "how are things"],
    ["what is going on", "what is up"],
    ["happy", "good", "well", "fantastic", "cool"],
    ["bad", "bored", "tired", "sad"],
    ["tell me story", "tell me joke"],
    ["thanks", "thank you"],
    ["bye", "good bye", "goodbye"]
    ];
    
    const reply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"], 
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
      ],
    [
        "Nothing much",
        "Exciting things!"
      ],
    ["Glad to hear it"],
    ["Why?", "Cheer up buddy"],
    ["What about?", "Once upon a time..."],
    ["You're welcome", "No problem"],
    ["Goodbye", "See you later"],
    ];
    
    const alternative = [
      "Same",
      "Go on...",
      "Try again",
      "I'm listening...",
      "Bro..."
    ];

    const sendHandler=()=>{
      let messages=displayMessages;
      messages.push({message:typedMessage,user:'current'});
      setTypedMessage('');
      // console.log(messages);
      var item='';
      for (let x = 0; x < trigger.length; x++) {
        for (let y = 0; y < reply.length; y++) {
          if (trigger[x][y] == typedMessage.toLowerCase()) {
            let items = reply[x];
            item = items[Math.floor(Math.random() * items.length)];
            break;
          }
        }
        if(item) break;
      }
      if(item===''){
        item=alternative[Math.floor(Math.random()*alternative.length)];
      }
      messages.push({message:item,user:'bot'});
      setDisplayMessages([...messages]);
      console.log(displayMessages);
    }

  
  

  const messageArea=<div className='messageDisplayArea'>
    {displayMessages.map((message)=>{
        return(
          <div className='messages'>
            {message.user==='current' ?
            <div className='userMessageLine'><p className='userMessage'>{message.message}</p><div style={{'position':'relative'}}><img className='chatImg' src={userPP} /><span className='activeIndicatorSpan' /></div></div>  :
            <div className='botMessageLine'><div style={{'position':'relative'}}><img className='chatImg'  src={botPP} /><span className='activeIndicatorSpan' /></div><p className='botMessage'>{message.message}</p></div>
          }
          </div>
        );
    })}

  </div>
  const textArea=<div className='textArea'>
    <AttachFileIcon style={{'transform':'rotate(45deg)'}} sx={{'color':'#495050','fontSize':'24px'}}/>
    <div className='messageInput'><input type='text' placeholder='Enter your message here' onChange={(e)=>messageHandler(e)} value={typedMessage} /><SentimentSatisfiedAltSharpIcon sx={{'color':'#ff8533','font-size':'24px '}}/></div>
    <Button color='primary' variant='contained' onClick={sendHandler} disabled={!typedMessage}>send <SendIcon /></Button>
  </div>

  return (
    <div className='chatContainer'>
      <div style={{'min-height':'88%'}}>{messageArea}</div>
      {textArea}
      </div>
  )
}

export default ChatContainer