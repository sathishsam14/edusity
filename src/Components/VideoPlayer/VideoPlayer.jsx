import React, { useRef } from 'react'
import video from "../../assets/Timeline 1.mov"
import "./VideoPlayer.css"

const VideoPlayer = ({playstate,setPlaystate}) => {
const  player = useRef(null)

const closingVideo=(e)=>{
  if(e.target === player.current ){
    setPlaystate(false)
  }
}

  return ( 
    <div className={`video-player ${playstate?"":"hide"}`} onClick={closingVideo} ref={player}>
        <video src={video} autoPlay muted controls></video>

    </div>
  )
}

export default VideoPlayer