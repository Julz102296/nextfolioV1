"use client"

import React, { useRef } from 'react'


export default function Parallax() {
  

  const skills = [
    {
      id: 1,
      title: "Web",
      desc: "Local Government",
    },
    {
      id: 2,
      title: "Graphic",
      desc: "Local Government",
    },
    {
      id: 3,
      title: "Tattoo",
      desc: "Local Government",
    },

  ];

  const ref = useRef();

  return (
    <div ref={ref} className="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-12 space-y-8">

    <div className="max-w-xl">
    <h1 className="text-7xl font-extrabold text-slate-700 sm:text-5xl leading-tight tracking-tight">I'm passionate about three distinct yet interconnected worlds</h1>

      <p className="mt-4 text-slate-600">
      Each of these areas represents not just skills, but a part of my creative essence. From crafting immersive digital experiences to designing captivating visuals, and even etching meaningful stories onto skin, I thrive on the diverse expressions of creativity.
      </p>
    </div>

    {/* <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {skills.map((skill) => (
      <li key={skill.id}>
        <a
        className="block rounded-xl border p-8 shadow-xl"
        href="#"
      >

        <h2 className="mt-4 text-xl font-bold text-slate-700">{skill.title}</h2>

        <p className="mt-1 text-sm text-slate-500">
          {skill.desc}
        </p>
      </a>
      </li>
    ))}
    </ul> */}
    
  </div>
  );
}
