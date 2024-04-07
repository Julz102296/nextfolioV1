"use client"

import { useRef } from "react";

export default function Portfolio() {

  const items = [
    {
      id: 1,
      title: "Game Center",
      desc: "Game Center specializes in dynamic static websites, featuring a download game page and personalized user dashboards. Our expertise lies in crafting user-centric designs, seamless game integration, and impactful digital experiences.",
      video: "videos/video1.webm",
      link: "https://julz102296.github.io/game_center.2.0.github.io/",
    },
    {
      id: 2,
      title: "WTG Car Rentals",
      desc: "I specialize in developing robust web applications using React, Tailwind CSS, and Firebase, specifically designed for modern car rental businesses. Our platform seamlessly integrates essential features including booking, cart management with date range selection, price calculation, secure payment gateways, and comprehensive admin CRUD operations.",
      video: "videos/video2.webm",
      link: "https://car-rentals-wtg.vercel.app/",
    },
    {
      id: 3,
      title: "CMS",
      desc: "Built with Laravel, Tailwind, MySQL, and JavaScript, our admin interface offers seamless CRUD operations. Manage your content effortlessly and efficiently with our robust system.",
      video: "videos/video3.webm",
      link: "https://carrentalwtg.online/",
    },
    {
      id: 4,
      title: "Mario Club",
      desc: "Your nostalgic haven for all things Mario! Dive into the world of everyone's favorite plumber with our static website, crafted with HTML and CSS. Explore our pages filled with Mario games, trivia, and more. Join the club and relive the magic of Mario today!",
      video: "videos/video4.webm",
      link: "https://www.facebook.com",
    },
  ];

  const ref = useRef();

  return (
    <div ref={ref} className="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-12 space-y-8">
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.id}>
          <article className="group">
          <div href={item.link} className="group relative block overflow-hidden">
            <video
              className="w-full h-auto bg-white rounded-lg"
              autoPlay
              muted
              loop
              style={{ aspectRatio: '16/9' }}
            >
              <source src={item.video} type="video/webm" className="rounded-lg"/>
            </video>

            <div className="p-4">
              
              <a href={item.link}>
                <h3 className="text-lg font-medium text-slate-700">{item.title}</h3>
              </a>

              <p className="mt-2 text-sm/relaxed text-slate-600">
                {/* {item.desc} */}
              </p>
            </div>
            </div>
          </article>                                                                                                                                                                                                                              
        </li>
      ))}
      </ul>
    </div>
      
  );
}
