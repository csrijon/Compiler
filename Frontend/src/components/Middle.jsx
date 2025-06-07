import React from 'react'
import Reactlogo from '../assets/react.svg'
import clogo from '../assets/c.svg'
import cplus from "../assets/c++.svg"
import csharp from "../assets/csharp.svg"
import html from "../assets/html5.svg"
import java from "../assets/java.svg"
import javascript from "../assets/javascript.svg"
import mongodb from "../assets/mongodb.svg"
import mysql from "../assets/mysql.svg"
import python from "../assets/python.svg"
import ruby from "../assets/ruby.svg"
import "./Middle.css"

const Middle = () => {

  const data = [
    { text: "React", icon: Reactlogo },
    { text: "C", icon: clogo },
    { text: "C++", icon: cplus },
    { text: "C#", icon: csharp },
    { text: "HTML", icon: html },
    { text: "JAVA", icon: java },
    { text: "JS", icon: javascript },
    { text: "MONGODB", icon: mongodb },
    { text: "SQL", icon: mysql },
    { text: "PYTHON", icon: python },
    { text: "RUBY", icon: ruby }
  ];

  return (
    <section className='middle' >
      <div className="text-first">
        <h2>Code Online With CompileX</h2>
      </div>
      <div className="secend-text">
        <p>This is The Frontend Compiler You Can Write HTML And CSS And JavaScript</p>
      </div>
      <div className="button-section">
        <button className='button' >Populer</button>
        <button className='button' >Programming</button>
        <button className='button' >Web</button>
        <button className='button' >Database</button>
      </div>
      <div className="show-section">
        {data.map((item, index) => (
          <div className="box" key={index}>
            <div className="text">{item.text}</div>
            <div className="icon">
              <img src={item.icon} alt={item.text} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Middle