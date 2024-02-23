import React, { useRef, useState, useEffect } from 'react';

import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { LampDemo } from '@/components/ui/lamp';
export default function Home() {
    const words=[
        {text:"Esperanza"},{text:"Club"},{text:"is"},{text:"a"},{text:"scientific"},{text:"club"},{text:"of"},{text:"faculty"}
    ]


    
    return (
        <main className="">
            <div className=" h-screen bg-background3 text-white"> 
            <div className="flex justify-between p-32 h-full md:flex" >
                <div className="">
                <h1 className=" text-5xl font-bold">ESPERANZA <span className="text-bluecyan"> CLUB</span></h1>
                
                 <TextGenerateEffect words="For Those Who Have Passion" className="text-white text-5xl"></TextGenerateEffect>
                 <TypewriterEffect words={words} className="text-red"></TypewriterEffect>
                <p className="text-xl w-5/6">Esperanza Club is a scientific club of faculty of exact science and informatics that founded in 2019 ............etc
                </p>
               
            </div>
            <div className="w-96 lg:w-96">
                <video autoPlay src="./assets/vid.mp4" ></video>
                <p className='text-center'>We Live Once Let's Leave a Print</p>
                <LampDemo></LampDemo>
            </div>
            </div>

            
            
            </div>
        </main>
    )
}
