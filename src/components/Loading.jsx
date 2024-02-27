import pkball from "../img/Poke_Ball_icon.svg.png"
import video from "../img/Pokeball_Animation.mp4"
import video2 from "../img/Pokeball_catch_animation.mp4"
import React from 'react'
import bgpkmn from '../img/1073995.jpg'

function Loading() {
  return (
    <div style={{ backgroundColor: 'rgb(55 48 163)', borderRight: '13px solid grey', backgroundImage: `url(${bgpkmn})`, backgroundSize: 'cover', backgroundPosition: '' }} className="w-screen h-100">
        {/* <img style={{ width: 400, height: 400 }} className="mx-auto"  src={pkball} alt="Loading..." /> */}
        <video  autoPlay src={video2} className="w-100 mt-24 opacity-80"></video>
        </div>
  )
}
export default Loading