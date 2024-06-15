"use client"
import React, { useEffect, useMemo, useState } from "react";
import { getGhUser } from '&/helpers/gh'
import Image from "next/image";
import './index.css'

export default function Page() {

  const [user, setUser] = useState([]);

  useMemo(()=>{
    getGhUser((res)=>{
      setUser(res);
    })
  }, [])

  return (
    <div className="text-center">
      <h1>¡Bienvenido!</h1>
      <p>Mi nombre es Agustin Fizzano y este es mi sitio web.</p>
      <div className="container cv">
        <div className="row row-cols-2">
          <div className="col col-foto">
              <Image
              src={user?.photo}
              className="foto"
              alt="Agustin Fizzano"
              width={200}
              height={200}
              unoptimized={true}
              />
            <p>{user?.bio}</p>
            </div>
          <div className="col">
          </div>
        </div>
      </div>
    </div>
  );
}
