import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import {MagicButton} from './ui/MagicButton'
import { FaLocationArrow } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className='pb-50 pt-36'>
        <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div className="h-screen w-full bg-[#04071d] flex items-center justify-center absolute top-0 left-0">
          {/* Radial Gradient Overlay */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#04071d] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>
        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    Dynamic Web Magic with Next.Js
                </h2>
                <TextGenerateEffect
                    className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    words='From Vision to Interaction Seamlessly'
                />
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    Hi, I&apos;m Randell! Full Stack Developer based in Philippines.
                </p>
                <div className='flex justify-center mt-6'> {/* Added this div to center the button */}
                    <a href="#about" className='inline-block'> {/* Added inline-block to prevent stretching */}
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero