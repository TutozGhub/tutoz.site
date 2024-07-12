"use client"
import React, { useEffect, useState } from 'react'
import './BtnRedSocial.css'
import Link from 'next/link'

export default function BtnRedSocial({logo, href, size = 50, color1 = '#fff', color2 = null}) {
    const [styles, setStyles] = useState({
        '--btnSize': `${size}px`,
        '--color1': `${color1}`,
    })
    useEffect(() => {
        if (color2 !== null){
            setStyles({...styles, '--color2': color2});
        }
    }, [])

  return (
    <button
    className='btn'
    style={styles}
    >
        <Link
        href={href}
        >
            {logo}
        </Link>
    </button>
  )
}
