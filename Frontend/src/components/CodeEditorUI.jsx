import React from "react";
// import fetch from "node-fetch";\
import { useRef, useState, useEffect } from 'react';
import { Buffer } from 'buffer';
import "./CodeEditorUI.css";


const CodeEditorUI = () => {
  const languageOptions = [
    { id: 45, name: "Assembly (NASM 2.14.02)" },
    { id: 46, name: "Bash (5.0.0)" },
    { id: 47, name: "Basic (FBC 1.07.1)" },
    { id: 75, name: "C (Clang 7.0.1)" },
    { id: 76, name: "C++ (Clang 7.0.1)" },
    { id: 48, name: "C (GCC 7.4.0)" },
    { id: 52, name: "C++ (GCC 7.4.0)" },
    { id: 49, name: "C (GCC 8.3.0)" },
    { id: 53, name: "C++ (GCC 8.3.0)" },
    { id: 50, name: "C (GCC 9.2.0)" },
    { id: 54, name: "C++ (GCC 9.2.0)" },
    { id: 86, name: "Clojure (1.10.1)" },
    { id: 51, name: "C# (Mono 6.6.0.161)" },
    { id: 77, name: "COBOL (GnuCOBOL 2.2)" },
    { id: 55, name: "Common Lisp (SBCL 2.0.0)" },
    { id: 56, name: "D (DMD 2.089.1)" },
    { id: 57, name: "Elixir (1.9.4)" },
    { id: 58, name: "Erlang (OTP 22.2)" },
    { id: 44, name: "Executable" },
    { id: 87, name: "F# (.NET Core SDK 3.1.202)" },
    { id: 59, name: "Fortran (GFortran 9.2.0)" },
    { id: 60, name: "Go (1.13.5)" },
    { id: 88, name: "Groovy (3.0.3)" },
    { id: 61, name: "Haskell (GHC 8.8.1)" },
    { id: 62, name: "Java (OpenJDK 13.0.1)" },
    { id: 63, name: "JavaScript (Node.js 12.14.0)" },
    { id: 78, name: "Kotlin (1.3.70)" },
    { id: 64, name: "Lua (5.3.5)" },
    { id: 89, name: "Multi-file program" },
    { id: 79, name: "Objective-C (Clang 7.0.1)" },
    { id: 65, name: "OCaml (4.09.0)" },
    { id: 66, name: "Octave (5.1.0)" },
    { id: 67, name: "Pascal (FPC 3.0.4)" },
    { id: 85, name: "Perl (5.28.1)" },
    { id: 68, name: "PHP (7.4.1)" },
    { id: 43, name: "Plain Text" },
    { id: 69, name: "Prolog (GNU Prolog 1.4.5)" },
    { id: 70, name: "Python (2.7.17)" },
    { id: 71, name: "Python (3.8.1)" },
    { id: 80, name: "R (4.0.0)" },
    { id: 72, name: "Ruby (2.7.0)" },
    { id: 73, name: "Rust (1.40.0)" },
    { id: 81, name: "Scala (2.13.2)" },
    { id: 82, name: "SQL (SQLite 3.27.2)" },
    { id: 83, name: "Swift (5.2.3)" },
    { id: 74, name: "TypeScript (3.7.4)" },
    { id: 84, name: "Visual Basic.Net (vbnc 0.0.0.5943)" }
  ];
  const [selectlanguageid, setselectlanguageid] = useState(languageOptions[0].id)
  const [token, settoken] = useState(0)
  const [output, setoutput] = useState(0)
  const [showAI, setShowAI] = useState(false);
  const [messages, setMessages] = useState([]);
  const [filename, setFilename] = useState("main.js");

  const coderef = useRef(null)
  const inputref = useRef(null)

  const handelclick = async () => {
    let source_code = coderef.current.value;

    const playload = {
      language_id: selectlanguageid,
      code: source_code
    }
    try {
      const response = await fetch("http://localhost:5000/output/code", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(playload)
      })
      if (!response.ok) {
        console.error("Server responded with error:", response.status);
        return;
      }
      const data = await response.json();
      console.log(data)
      settoken(data.token)
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  }
  useEffect(() => {
    if (!token) return;

    const fetchOutput = async () => {
      try {
        const response = await fetch(`http://localhost:5000/output/code/${token}`);
        const text = await response.text();

        console.log("📦 Raw response text:", text.slice(0, 100));

        let result;
        let raw;

        try {
          result = JSON.parse(text);

          raw = result.stdout
            ? Buffer.from(result.stdout, "base64").toString("utf-8")
            : result.stderr
              ? Buffer.from(result.stderr, "base64").toString("utf-8")
              : result.compile_output
                ? Buffer.from(result.compile_output, "base64").toString("utf-8")
                : "⏳ Waiting for output...";
        } catch (err) {
          console.error("❌ Failed to parse JSON:", err);
          return;
        }

        setoutput(raw);
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    };

    fetchOutput();
  }, [token]);
  const sendbuttclick = async () => {
    const inputdata = inputref.current.value;
    if (!inputdata.trim()) return;

    const body = {
      contents: [
        {
          parts: [{ text: inputdata }]
        }
      ]
    };

    try {
      const res = await fetch("http://localhost:5000/AIresponse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      const data = await res.json();

      const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Gemini didn’t return any message.";

      // ✅ Add both user and AI message at once
      setMessages(prev => [
        ...prev,
        { role: "user", text: inputdata },
        { role: "ai", text: aiText }
      ]);

      inputref.current.value = "";

    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [
        ...prev,
        { role: "user", text: inputdata },
        { role: "ai", text: "⚠️ Gemini error." }
      ]);
    }
  };


  const Aiclick = () => {
    setShowAI(true)
  }

  return (
    <>
      <div className="editor-wrapper">
        <div className="editor-top-bar"><input
          className="file-tab-input"
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
        />
          <h3 className="editor-title">Python Hello World</h3>
          <div className="editor-controls">
            <button className="btn-green" onClick={Aiclick}>AI</button>
            <select
              className="lang-select"
              value={selectlanguageid}
              onChange={(e) => setselectlanguageid(Number(e.target.value))}
            >
              {languageOptions.map((lan, index) => (
                <option value={lan.id} key={index}>{lan.name}</option>
              ))}
            </select>
            <button onClick={handelclick} className="btn-run">RUN ▶</button>
          </div>
        </div>
        <div className="editor-main">
          <div className="code-area">
            <textarea ref={coderef} defaultValue={`print("Hello, World!")`} />
          </div>
          <div className="side-panel">
            <div className="stdin-section">
              <label>STDIN</label>
              <textarea placeholder="Input for the program ( Optional )" />
            </div>
            <div className="stdout-section">
              <label>Output:</label>
              <pre>{output}</pre>
            </div>
          </div>
        </div>
      </div>
      {showAI && (
        <div className="chatgpt-panel">
          <div className="chatgpt-header">
            <span>🤖 CompileX AI</span>
            <button className="chatgpt-close" onClick={() => setShowAI(false)}>✕</button>
          </div>
          <div className="chatgpt-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-bubble ${msg.role === "user" ? "user" : "ai"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatgpt-input-area">
            <input ref={inputref}
              type="text"
              className="chatgpt-input"
              placeholder="Ask Gemini..."
            />
            <button onClick={sendbuttclick} className="chatgpt-send">➤</button>
          </div>
        </div>
      )}

    </>
  )
};

export default CodeEditorUI;
