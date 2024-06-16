"use client"
import React, { useEffect, useMemo, useState } from "react";
import { getGhUser } from '&/helpers/gh'
import Image from "next/image";
import './index.css'

export default function Page() {

  const [user, setUser] = useState([]);
  const [links, setLinks] = useState(
    {
        web: (perline)=> `https://skillicons.dev/icons?i=html,css,vscode,javascript,ts,react,next,nodejs&theme=light&perline=${perline}`,
        desktop: (perline)=> `https://skillicons.dev/icons?i=cs,dotnet,visualstudio&theme=light&perline=${perline}`,
    });

  useMemo(()=>{
    getGhUser((res)=>{
      setUser(res);
    })
  }, [])

  return (
    <section className="main text-center">
      <section className="p-4">
        <h1>¡Bienvenido!</h1>
        <p>Mi nombre es Agustin Fizzano y este es mi sitio web.</p>
      </section>
      <section className="devices">
        <Image src="IMG/devices.svg" alt="devices" width={1600} height={500} />
      </section>
      <section className="background"></section>
      <section className="cv">
          { (user.photo) ?
            (<>
              <Image
              src={user?.photo}
              className="foto"
              alt="Agustin Fizzano"
              width={200}
              height={200}
              unoptimized={true}
              />
              <h5 className="descripcion">{user?.bio}</h5>
            </>) : ""}
          </section>
          <section className="col p-4">
            <div className="card py-4">
              <div className="card-body">
                <ul className="list-group list-group-flush stacks">
            {/* Stack web */}
                  <div class="stack">
                    <h4 className="mb-4">Web stack</h4>
                    <Image className="stack d"
                    src={links.web(4)}
                    alt="web stack"
                    height={100}
                    width={200}
                    unoptimized={true}
                    />
                    <Image className="stack m wm"
                    src={links.web(2)}
                    alt="web stack"
                    height={200}
                    width={100}
                    unoptimized={true}
                    />
                  </div>
            {/* Stack desktop */}
                  <div class="stack">
                    <h4 className="mb-4">Desktop stack</h4>
                    <Image className="stack d"
                    src={links.desktop(3)}
                    alt="web stack"
                    height={100}
                    width={150}
                    unoptimized={true}
                    />
                    <Image className="stack m dm"
                    src={links.desktop(1)}
                    alt="web stack"
                    height={100}
                    width={50}
                    unoptimized={true}
                    />
                  </div>
                </ul>
              </div>
        </div>
      </section>
      <section className="espacio"></section>
      <section className="background">
      <h5 className="descripcion">footer en progreso...</h5>
      <h5 className="descripcion">:p</h5>
      </section>
    </section>
  );
}
