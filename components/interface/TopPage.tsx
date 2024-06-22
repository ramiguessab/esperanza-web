import {FlipWords} from '@/components/ui/flip-words';
export default function TopPage() {
    return (
        <div className="flex flex-wrap-reverse text-white items-center justify-around h-[calc(100vh-4rem)]">
        <div className='w-5/6 sm:w-1/2 flex flex-col gap-8'>
            <p className="font-bold text-4xl">We <span className=" text-esperanza_cyan_blue">Live</span> Once, Let's <span className=" text-esperanza_cyan_blue">Leave</span> a Print</p>
            <div className='text-2xl font-bold'>For Those Who Have<FlipWords className=' text-esperanza_cyan_blue' words={['Passion','Curiosity','Enthusiasm']}></FlipWords></div>
            <p className='w-4/6'>
                Esperanza Club is a university scientific club at university of Jijel Ben Yahia Mohammed Saddek Faculty of exact science and computer science that aims to bring together students who are passionate about science and technology. We
            </p>
        </div>
        <div className=' flex items-center justify-center'>
            <img src="/assets/Icon_logo.svg" alt="logo" className="w-96 animate-flip"/>
        </div>
        </div>
    )
}