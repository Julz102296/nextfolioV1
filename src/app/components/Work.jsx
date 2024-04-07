"use client"
import React, { useRef } from 'react'


export default function Work() {

  const works = [
    {
      id: 1,
      title: "Wilcon",
      job: "Data Encoder",
      desc: "Local Government",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      yearStart: "July 2023",
      yearEnd: "October 2023",
    },
    {
      id: 2,
      title: "City Government of San Juan",
      job: "Traffic Aide - Radio Operator",
      desc: "Local Government",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      yearStart: "February 2016",
      yearEnd: "June 2023",
    },
    {
      id: 3,
      title: "Alert General Services",
      job: "Maintenance",
      desc: "Local Government",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      yearStart: "February 2015",
      yearEnd: "February 2016",
    },
    {
      id: 4,
      title: "Tata Motors",
      job: "Auto Detailer",
      desc: "Wilcon Montalban",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      yearStart: "September 2014",
      yearEnd: "January 2015",
    },
    {
      id: 5,
      title: "Alberguz",
      job: "Warehouse Assistant",
      desc: "Local Government",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      yearStart: "March 2014",
      yearEnd: "August 2014",
    },
    {
      id: 6,
      title: "El Jose Catering",
      job: "Waiter",
      desc: "Waiter",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      yearStart: "October 2013",
      yearEnd: "December 2013",
    },
  ];

  const ref = useRef();

  return (
    <div ref={ref} className="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-12 space-y-8 mt-10">

    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {works.map((work) => (
      <li key={work.id}>
        <a
          href="#"
          className="block rounded-xl border border-slate-400 p-8 shadow-xl transition hover:border-slate-500/10 hover:shadow-slate-500/10"
        >


            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {work.title}
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">{work.job}</p>
              </div>

            </div>


            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dd className="text-xs text-gray-500">{work.yearStart}</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dd className="text-xs text-gray-500">{work.yearEnd}</dd>
              </div>
            </dl>
        </a>
      </li>
    ))}
    </ul>
    
  </div>
  );
}
