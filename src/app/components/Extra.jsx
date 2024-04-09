import React from 'react'

export default function Extra() {


  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-no-repeat bg-cover bg-fixed" style={{backgroundImage: 'url("Images/Girl 2.jpg")'}}>
      <h1 className="text-slate-700 text-6xl font-bold">Lorem, ipsum.</h1>
    </div>

    <div className="p-10">
      <h2 className="font-bold text-4xl text-slate-700">This Section is Under Construction...</h2>
      <p className="text-slate-500">This Section is Under Construction...</p>
    </div>

    <div className="min-h-screen flex bg-center justify-center items-center bg-no-repeat bg-cover bg-fixed" style={{backgroundImage: 'url("Images/Mountain 2.jpg")'}}>
      <h2 className="font-bold text-4xl text-slate-200">This Section is Under Construction...</h2>
    </div>

    <div className="min-h-screen flex bg-fixed justify-center items-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("Images/Girl 2.png")'}}>
      <h2 className="font-bold text-4xl text-slate-200">This Section is Under Construction...</h2>
    </div>
    </>
  )
}
