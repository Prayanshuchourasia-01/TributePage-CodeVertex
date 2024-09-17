import React from 'react';
import jaron from "./jaron-lanier.jpg";

export default function HeroSection() {
  return (

    <>
    <div className="hero flex p-5 justify-between gap-x-16 ">
        <div className="image w-full ml-16 mt-16" >
        <img
            src={jaron}
            class="img-fluid rounded-full h-96 w-96"
            alt="image of the father of the VR development."
        />
        <h4 className='mt-6 font-mono'>
        "The great hope of Virtual Reality is that it can make the world a more creative, empathetic, and connected place." — Jaron Lanier
        </h4>
        
        </div>
        <div className="content mt-[10%]">
          <h1 className='text-center text-4xl font-bold font-mono mb-6'>
            Father Of VR (Virtual Reality)
          </h1>
<p className='font-light text-2xl px-16' >Jaron Lanier was born on May 3, 1960, in New York City. A visionary computer scientist, philosopher, and artist, Lanier grew up with a deep curiosity about technology and human potential. His early exposure to computers in the 1970s, a time when personal computing was still in its infancy, set him on a path to becoming one of the most influential figures in the development of Virtual Reality (VR).</p>
        </div>
    </div>
    </>

  )
}
