import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { MdOutlineMailOutline } from "react-icons/md";
export default function ContactUs() {
    return (
        <div className="flex flex-wrap justify-around md:h-[calc(100vh-4rem)] items-center mt-8 md:mt-0">
            <div className="w-full h-full md:w-1/3 px-8 md:px-0 mb-10 md:mb-0 flex flex-col justify-evenly">
           
                <Accordion type="single" collapsible>
                    <p className="text-md sm:text-2xl font-bold my-4">Frequenlty asked questions</p>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How can you join us ?</AccordionTrigger>
                            <AccordionContent>
                            At the start of each academic year, we hold a recruitment drive where we invite all students to join us. We also have a membership form that you can fill out and submit to us. We will get back to you as soon as possible.
                            </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Who can join us ?</AccordionTrigger>
                            <AccordionContent>
                            We are open to all students in the university. We do not discriminate any student based on his/her major
                            </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Why join us ?</AccordionTrigger>
                            <AccordionContent>
                            you will learn and develop leadership skills such as decision making, problem solving, delegation and organization. You will of course acquire skills and experiences which will complement your university course, meet new people and live new experiences. And, of course, have fun!                            </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="font-bold flex gap-2 py-6 text-sm xs:text-lg items-center"><MdOutlineMailOutline className="size-5 xs:size-8"/> <a href="mailto:esperanzaclub2019@gmail.com" className=" underline underline-offset-2">esperanzaclub2019@gmail.com</a></div>
                
            </div>
            <div className="flex items-center justify-center md:w-1/2 w-full px-8 md:px-0 mb-8">
      <div className="w-full lg:w-3/4 p-10 bg-esperanza_very_dark_blue bg-opacity-90 shadow-lg rounded-3xl shadow-white">
        <form>
          <div className="relative mb-8">
            
            <label className="  text-base text-white pointer-events-none transition-all duration-300 ease-in-out transform">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full  text-base text-white bg-transparent border-b border-white focus:outline-none focus:border-gray-400"
            />
          </div>
          <div className="relative mb-8">
            
            <label className=" text-base text-white pointer-events-none transition-all duration-300 ease-in-out transform">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full text-base text-white bg-transparent border-b border-white focus:outline-none focus:border-gray-400"
            />
          </div>
          <div className="relative mb-8">
            
            <label className="  text-base text-white pointer-events-none transition-all duration-300 ease-in-out transform">
              Subject
            </label>
            <input
              type="text"
              required
              className="w-full  text-base text-white bg-transparent border-b border-white focus:outline-none focus:border-gray-400"
            />
          </div>
          <div className="relative mb-8">
            
            <label className="  text-base text-white pointer-events-none transition-all duration-300 ease-in-out transform">
              Message
            </label>
            <textarea name="" id="" className="w-full  text-base text-white bg-transparent border-b border-white focus:outline-none focus:border-gray-400"></textarea>
          </div>
          
          <div className="text-center">
            <a
              href="#"
              className="relative inline-block px-5 py-2.5 text-base text-white uppercase transition-all duration-300 ease-in-out bg-transparent border border-white rounded-md hover:bg-esperanza_cyan_blue hover:text-white hover:border-esperanza_cyan_blue"
            >
              Send
            </a>
          </div>
        </form>
      </div>
    </div>

        </div>
    )
}