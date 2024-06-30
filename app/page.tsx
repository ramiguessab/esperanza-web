import React from "react"
import TopPage from "@/components/interface/TopPage"
import AboutUs from "@/components/interface/AboutUs"
import ContactUs from "@/components/interface/ContactUs"
import { Activities } from "@/components/interface/Activities"
import { DataProvider } from "@/contexts/Data";
export default function Home() {
    return (
       <div>
        <TopPage />
        <AboutUs />
        <DataProvider>
      <Activities />
    </DataProvider>
        <ContactUs />
       </div>

    )
}
