import React, { useRef, useState, useEffect } from 'react';

import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { SparklesCore } from '@/components/ui/sparkles';
import { SparklesPreview } from '@/components/ui/sparklesPreview';

export default function Home() {
    const words=[
        {text:"Esperanza"},{text:"Club"},{text:"is"},{text:"a"},{text:"scientific"},{text:"club"},{text:"of"},{text:"faculty"}
    ]


    
    return (
        <main className="">

            <div className=" h-screen bg-background3 text-white"> 
            <div className=" lg:flex lg:flex-row flex flex-col-reverse md:justify-between  justify-center p-12 md:p-32 h-full" >
                <div className="">
                <h1 className=" text-4xl md:text-5xl font-bold">ESPERANZA <span className="text-bluecyan"> CLUB</span></h1>
                 
                 <TextGenerateEffect words="For Those Who Have Passion" className="text-white text-xl"></TextGenerateEffect>
                 <TypewriterEffect words={words} className="text-red"></TypewriterEffect>
                 
                
               
                
               
            </div>
            <div className=" w-68 sm:w-96  relative bottom-20">
                <video autoPlay src="./assets/vid.mp4" className='ml-auto mr-auto table w-48 lg:w-80'></video>
              
                 <SparklesPreview></SparklesPreview>
                
            </div>
            </div>    
            </div>
           
        </main>
    )
}
