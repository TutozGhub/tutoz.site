import Image from 'next/image'
import React from 'react'
import './Portaimagen.css'

export function Portaimagen({titleText="", text="", src="", alt="", title="", reverse=false}) {
  return (
    <div className={`contenedor p-3 ${reverse ? 'contenedor-reverse' : ''}`}>
      <div className="p-4 contenedor-ancho">
        <h3 className='mb-3'>{titleText}</h3>
        {text}
      </div>
      <div className="d-flex p-4 contenedor-ancho">
        <Image 
        className="img"
        width={550}
        height={880}
        src = {src}
        alt = {alt}
        unoptimized = {true}
        title={title}
        />
      </div>
    </div>
  )
}
