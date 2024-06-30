"use client";
import Autoplay from "embla-carousel-autoplay"

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { FlipWords } from "../ui/flip-words";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useData } from "@/contexts/Data";
import { Data } from "@/components/interface/types";

export function Activities() {
  const { selectedData, isDialogOpen, setIsDialogOpen } = useData();
  const carouselData = selectedData ? [
    { imgSrc: selectedData.imgSrc, title: selectedData.title },
    { imgSrc: selectedData.imgSrc2, title: selectedData.title },
    { imgSrc: selectedData.imgSrc3, title: selectedData.title },
    { imgSrc: selectedData.imgSrc4, title: selectedData.title },
    { imgSrc: selectedData.imgSrc5, title: selectedData.title },
  ]:[]
 
  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-evenly  relative overflow-hidden h-[calc(100vh-4rem)]">
      <h1 className="text-3xl sm:text-5xl font-bold text-center py-4">
        Our <FlipWords className="text-esperanza_cyan_blue"
        words={[
         "Events",
         "Activities",
         "Workshops",
        ]}/>
      </h1>
      <div className="h-96 cursor-pointer">
        <InfiniteMovingCards
          items={Datas}
          direction="right"
          speed="slow"
        />
      </div>
      {selectedData && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className=" bg-esperanza_very_dark_blue p-10 px-16">
            <DialogHeader>
              <DialogTitle className="text-center">{selectedData.title}</DialogTitle>
              <br />
              <DialogDescription>
                <Carousel plugins={[
                    Autoplay({
                      delay: 4000,
                    }),
                    ]}
                    opts={{
                    align: "start",
                    loop: true,
                    }}>
                    <CarouselContent>
  {carouselData.map((item, index) => (
    <CarouselItem key={index}>
      <img 
        src={item.imgSrc}
        alt={item.title}
        className="w-96 h-96 object-cover"
      />
    </CarouselItem>
  ))}
</CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <br />
                <p className=" text-gray-300 text-center">{selectedData.date}</p>
                <p className="text-white text-center ">{selectedData.text} </p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}



const Datas: Data[] = [
  {
    imgSrc: "/assets/envision-logo-2.png",
    imgSrc2:"/assets/Envision/pic01.png",
    imgSrc3:"/assets/Envision/IMG_8679.JPG",
    imgSrc4:"/assets/Envision/_MG_6563.JPG",
    imgSrc5:"/assets/Envision/_MG_6560.JPG",
    text: "The 'Envision' event was a meeting place for future success, where we explored possibilities, seized opportunities, and set goals. Students discovered professions, listened to CEOs, and met like-minded people. 'Envision' provided tools and contacts for professional dreams and helped CEOs find talented students. It was a unique bridge between the academic and professional worlds in the wilaya.",
    title: "Envision",
    date:"30/04/2024"
  },
  {
    imgSrc: "/assets/Plus2end.png",
    imgSrc2:"/assets/Plus2end/5.png",
    imgSrc3:"/assets/Plus2end/1.png",
    imgSrc4:"/assets/Plus2end/3.png",
    imgSrc5:"/assets/Plus2end/7.png",
    text: "Plus 2nd is an event that included study and educational days for the benefit of students, focusing on lectures in various technical fields and training courses in web page programming (Web 2.0, Web 3.0) for web development students. Additionally, we held competition with prizes in web development for students specializing in computer science, as well as a chess competition , and 2 workshops (Web 3.0 and blockchain),(Web development frameworks)",
    title: "Plus 2nd Edition",
    date:"05/03/2024"
  },
  // {
  //   imgSrc: "/assets/plus1st.png",
  //   imgSrc2:"",
  //   imgSrc3:"",
  //   imgSrc4:"",
  //   imgSrc5:"",
  //   text: "A multi-activity scientific and cultural event in its first edition at Jijel University took place over three days. It started with workshops and training courses dedicated to students interested in sharing and showcasing their creativity and talent while boosting their skills. The event continued with lectures in technical fields under the supervision of experienced and knowledgeable professors and included technical competitions that provided opportunities for the participating students.",
  //   title: "Plus 1st Edition",
  //   date:"03/21/2022"
  // },
  {
    imgSrc: "/assets/EnglishSessions/story (1).jpg",
    imgSrc2:"/assets/EnglishSessions/IMG_0113.JPG",
    imgSrc3:"/assets/EnglishSessions/IMG_0417.JPG",
    imgSrc4:"/assets/EnglishSessions/IMG_0419.JPG",
    imgSrc5:"/assets/EnglishSessions/IMG_0114.JPG",
    text: "We do English speaking sessions where students can practice their English speaking skills and learn new vocabulary and grammar rules in a fun and interactive way.",
    title: "English Speaking Sessions",
    date:""
  },
  {
    imgSrc: "/assets/Chess/OMJWZZ0.jpg",
    imgSrc2:"/assets/Plus2end/3.png",
    imgSrc3:"/assets/Chess/4.png",
    imgSrc4:"/assets/Chess/IMG_5227.JPG",
    imgSrc5:"/assets/Chess/DSC_1919.JPG",
    text: "We do Chess Competitions where students can compete with each other and have fun. ",
    title: "Chess Tournaments",
    date:""
  },
  {
    imgSrc: "/assets/AI/Screenshot 2024-06-25 165556.png",
    imgSrc2:"/assets/AI/DSC_2292.jpg",
    imgSrc3:"/assets/AI/DSC_2313.jpg",
    imgSrc4:"/assets/AI/DSC_2342.jpg",
    imgSrc5:"/assets/AI/DSC_2449.JPG",
    text: "The Faculty of Exact Sciences and Computer Science, in coordination with the us and the alkalsadi_club Mathematics Club, organized a two-day event on artificial intelligence (AI). The event featured discussions on the latest developments and innovations in AI by experienced professors. The event included competitions, workshops, conferences, and a large exhibition, all aimed at increasing awareness and understanding of AI. It was held at the central library,",
    title: "Artificial Intelligence Days",
    date:"16/04/2023"
  },
  {
    imgSrc: "/assets/6463375.jpg",
    imgSrc2:"/assets/Workshops/DSC_2417.JPG",
    imgSrc3:"/assets/Workshops/IMG_5159.JPG",
    imgSrc4:"/assets/Workshops/IMG_5173.JPG",
    imgSrc5:"/assets/Workshops/IMG_5345.JPG",
    text: "We conducted workshops on various topics, such as web development, frameworks, Git and GitHub, voice-over, improving English communication skills, design tools, Microsoft tools, Web 3.0, blockchain, and an introduction to data science.",
    title: "Workshops on diffrent topics",
    date:""
  },
  {
    imgSrc: "/assets/StudentSkills/student skills.jpg",
    imgSrc2:"/assets/StudentSkills/1.jpg",
    imgSrc3:"/assets/StudentSkills/6.jpg",
    imgSrc4:"/assets/StudentSkills/7.jpg",
    imgSrc5:"/assets/StudentSkills/8.jpg",
    text: "This event was a unique opportunity for students to develop and refine their skills. It included training courses, workshops, such as git github, design,microsoft tools,,thesis Redaction. The event aimed to help students improve their skills and knowledge. It was a great opportunity for students to learn from experts and professionals in their fields.",
    title: "Student Skills , Develop & Refine",
    date:"23/12/2023"
  },
];