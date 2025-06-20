import React, { useState } from 'react';
import Reactlogo from '../assets/react.svg';
import clogo from '../assets/c.svg';
import cplus from "../assets/c++.svg";
import csharp from "../assets/csharp.svg";
import html from "../assets/html5.svg";
import java from "../assets/java.svg";
import javascript from "../assets/javascript.svg";
import mongodb from "../assets/mongodb.svg";
import mysql from "../assets/mysql.svg";
import python from "../assets/python.svg";
import ruby from "../assets/ruby.svg";
import "./Middle.css";

const Middle = () => {
  const data = [
    { text: "React", icon: Reactlogo, category: "web" },
    { text: "C", icon: clogo , category: "programming" },
    { text: "C++", icon: cplus,category:"programming" },
    { text: "C#", icon: csharp, category:"programming" },
    { text: "HTML", icon: html,category: "web" },
    { text: "JAVA", icon: java, category: "programming" },
    { text: "JS", icon: javascript,category:"programming" },
    { text: "MONGODB", icon: mongodb,category:"database" },
    { text: "SQL", icon: mysql,category:"database" },
    { text: "PYTHON", icon: python,category:"programming" },
    { text: "RUBY", icon: ruby, category:"programming" }
  ];

  const [datasend, setdatasend] = useState(data);

  const proclick = () => {
    const prodata = data.filter(item => item.category === "programming");
    setdatasend(prodata);
  };

  const webclick = () => {
    const webdata = data.filter((webitem)=>webitem.category === "web")
    setdatasend(webdata)
  };
  const dbclick = () => {
    const dbdata = data.filter((dbitem)=>dbitem.category === "database")
    setdatasend(dbdata)
  }
  
  const popuclick = () => {
    setdatasend(data)
  }
  
  return (
    <section className='middle'>
      <div className="text-first">
        <h2>Code Online With CompileX</h2>
      </div>
      <div className="secend-text">
        <p>This is CompileX You Can try Compile your code </p>
      </div>
      <div className="button-section">
        <button onClick={popuclick} className='button'>Populer</button>
        <button onClick={proclick} className='button'>Programming</button>
        <button onClick={webclick} className='button'>Web</button>
        <button onClick={dbclick} className='button'>Database</button>
      </div>
      <div className="show-section">
        {datasend.map((item, index) => (
          <div className="box" key={index}>
            <div className="text">{item.text}</div>
            <div className="icon">
              <img src={item.icon} alt={item.text} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Middle;
