import {FlipWords} from '@/components/ui/flip-words';
export default function TopPage() {
    return (
        <div className="flex flex-wrap-reverse text-white sm:items-center justify-center  md:justify-around lg:h-[calc(100vh-4rem)] h-screen">
        <div className='w-5/6 sm:w-1/2 flex flex-col gap-8'>
            <p className="font-bold text-3xl xs:text-4xl text-center sm:text-left">We <span className=" text-esperanza_cyan_blue">Live</span> Once, <br className='block sm:hidden'/> Let's <span className=" text-esperanza_cyan_blue">Leave</span> a Print</p>
            <div className='lg:text-2xl text-center sm:text-left text-xl font-bold'>For Those Who Have<FlipWords className=' text-esperanza_cyan_blue' words={['Passion','Curiosity','Enthusiasm']}></FlipWords></div>
            <p className='w-full lg:w-3/5 text-wrap leading-7 text-center sm:text-left'>
                Esperanza Club is a university scientific club at university of Jijel Ben Yahia Mohammed Saddek Faculty of exact science and computer science 
                that aims to bring together students who are passionate about science and technology. We plan to organize events, workshops, and competitions 
            </p>
        </div>
        <div className=' flex items-center justify-center flex-col lg:gap-20 gap-8'>
            <img src="/assets/Icon_logo.svg" alt="logo" className="lg:w-96 sm:w-72 xs:w-52 animate-flip"/>
            <p className="ml-2 text-xl xs:text-2xl sm:text-2xl lg:text-4xl font-bold text-gray-100">Esperanza <span className='text-esperanza_cyan_blue'>Club</span></p>

        </div>
        </div>
    )
}