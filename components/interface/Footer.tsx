"use client"
import { FaFacebook,FaInstagram,FaLinkedin,FaTiktok } from "react-icons/fa";
import { usePathname } from "next/navigation";
export default function Footer() {
    const href=["/","/events","/contact"]
    const pathname=usePathname()
    return (
        <footer className={`${pathname===href[0]||pathname===href[1]|| pathname===href[2]  ? "bg-gradient-to-b from-esperanza_dark_blue to-esperanza_very_dark_blue text-white text-center p-4 flex flex-col gap-10 shadow-white" : 'hidden'}`}>
            <div>
                <p className="text-2xl font-bold py-8">Follow Us</p>
            <div className="flex justify-center items-center">
                <a href="https://www.facebook.com/esperanzaclub1"  className="text-white mx-2 hover:text-sky-400">
                    <FaFacebook size={30} />
                </a>
                <a href="https://www.instagram.com/esperanza_club/" className="text-white mx-2 hover:text-sky-400">
                    <FaInstagram size={30} />
                </a>
                <a href="https://www.linkedin.com/company/esperanza-club/posts/?feedView=all" className="text-white mx-2 hover:text-sky-400">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://www.tiktok.com/@esperanza.club?_t=8kJsEKxlNA6&_r=1" className="text-white mx-2 hover:text-sky-400">
                    <FaTiktok size={30} />
                </a>
            </div>
            </div>
            
            <div className="flex flex-col justify-center items-center gap-10">
            <img src="/assets/esperanza_logo.svg" alt="" className="w-40"/>
            <p>Made by Esperanza Club Members <br />
            </p>
            <p className="text-sm">© 2024 Esperanza Club. All rights reserved.</p>
            </div>
            
        </footer>
    );
}