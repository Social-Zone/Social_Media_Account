import React from 'react'
import "./share.css"
import PermMedia from '@mui/icons-material/PermMedia';
import Label from '@mui/icons-material/Label';
import Room from '@mui/icons-material/Room';
import Emoji from '@mui/icons-material/EmojiEmotions';
const PF=process.env.REACT_APP_PUBLIC_FOLDER;

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src={`${PF}person/2.jpg`} alt="" />
                <input placeholder='What`s in your mind Abhishek?' className='shareInput' />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                 <div className="shareOptions">
                  

                    <div className="shareOption"> 
                      <PermMedia htmlColor='tomato' className='shareIcon'/> 
                        <span className="shareOptionText">Photo or Video</span> 

                    </div>
                  
                       
                   <div className="shareOption">
                    <Label htmlColor='blue' className='shareIcon'/>
                    <span className="shareOptionText">Tag</span>
                    </div>
                   

                    <div className="shareOption">
                    <Room htmlColor='green' className='shareIcon'/>
                    <span className="shareOptionText">Location</span>
                    </div>
                   
                    <div className="shareOption">
                    <Emoji htmlColor='goldenrod' className='shareIcon'/>
                    <span className="shareOptionText">Feelings</span>
                    
                 </div> 
            </div> 
            <button className='shareButton'>Share</button>
            </div>
        </div>

    </div>
  )
}
