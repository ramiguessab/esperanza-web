"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { useData } from "@/contexts/Data";
import { Data } from "@/components/interface/types";
export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
  }: {
    items: Data[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
  }) => {
    const { setSelectedData, setIsDialogOpen } = useData();
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
  
    useEffect(() => {
      addAnimation();
    }, []); // Run animation only once when component mounts
  
    const addAnimation = () => {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
  
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current?.appendChild(duplicatedItem);
        });
  
        getDirection();
        getSpeed();
      }
    };
  
    const getDirection = () => {
      if (containerRef.current) {
        if (direction === "left") {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards"
          );
        } else {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse"
          );
        }
      }
    };
  
    const getSpeed = () => {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s");
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s");
        }
      }
    };
  
    const handleCardClick = (item: Data) => {
      setSelectedData(item);
      setIsDialogOpen(true);
    };
  
    return (
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-10 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full gap-4 py-4 w-max flex-nowrap animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              key={item.text}
              className="w-[260px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 sm:px-8 px-4 py-6 md:w-[450px]"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
              }}
              onClick={() => handleCardClick(item)}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
  
                <img src={item.imgSrc} alt="" className="relative w-full h-60" />
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                   
                    <span className="text-md leading-[1.6] text-white font-bold flex justify-between">
                      {item.title} <span className="text-sm leading-[1.6] text-gray-300 font-normal line-clamp-4">{item.date}</span>
                    </span>
                     <span className="text-sm leading-[1.6] text-gray-300 font-normal line-clamp-4">
                      {item.text}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    );
  };
