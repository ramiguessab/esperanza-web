import React from "react"
import Image from "next/image"
import IconLink from "@/components/shared/IconLink"
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import RegistrationButton from "@/components/registration/Button"
import TopPage from "@/components/interface/TopPage"
import AboutUs from "@/components/interface/AboutUs"
import ContactUs from "@/components/interface/ContactUs"

export default function Home() {
    return (
       <div>
        <TopPage />
        <AboutUs />
        <ContactUs />
       </div>
    )
}
