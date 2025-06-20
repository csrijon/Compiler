import React from "react";
import "./CodeEditorUI.css";

const CodeEditorUI = () => {
  const languageNames = [
    "Assembly (NASM 2.14.02)",
    "Bash (5.0.0)",
    "Basic (FBC 1.07.1)",
    "C (Clang 7.0.1)",
    "C++ (Clang 7.0.1)",
    "C (GCC 7.4.0)",
    "C++ (GCC 7.4.0)",
    "C (GCC 8.3.0)",
    "C++ (GCC 8.3.0)",
    "C (GCC 9.2.0)",
    "C++ (GCC 9.2.0)",
    "Clojure (1.10.1)",
    "C# (Mono 6.6.0.161)",
    "COBOL (GnuCOBOL 2.2)",
    "Common Lisp (SBCL 2.0.0)",
    "D (DMD 2.089.1)",
    "Elixir (1.9.4)",
    "Erlang (OTP 22.2)",
    "Executable",
    "F# (.NET Core SDK 3.1.202)",
    "Fortran (GFortran 9.2.0)",
    "Go (1.13.5)",
    "Groovy (3.0.3)",
    "Haskell (GHC 8.8.1)",
    "Java (OpenJDK 13.0.1)",
    "JavaScript (Node.js 12.14.0)",
    "Kotlin (1.3.70)",
    "Lua (5.3.5)",
    "Multi-file program",
    "Objective-C (Clang 7.0.1)",
    "OCaml (4.09.0)",
    "Octave (5.1.0)",
    "Pascal (FPC 3.0.4)",
    "Perl (5.28.1)",
    "PHP (7.4.1)",
    "Plain Text",
    "Prolog (GNU Prolog 1.4.5)",
    "Python (2.7.17)",
    "Python (3.8.1)",
    "R (4.0.0)",
    "Ruby (2.7.0)",
    "Rust (1.40.0)",
    "Scala (2.13.2)",
    "SQL (SQLite 3.27.2)",
    "Swift (5.2.3)",
    "TypeScript (3.7.4)",
    "Visual Basic.Net (vbnc 0.0.0.5943)"
  ];

  return (
    <div className="editor-wrapper">
      <div className="editor-top-bar">
        <span className="file-tab">main.py</span>
        <h3 className="editor-title">Python Hello World</h3>
        <div className="editor-controls">
          <button className="btn-green">  AI</button>
          <select className="lang-select">
            {languageNames.map((lan, index) => (
              <option key={index}>{lan}</option>
            ))}
          </select>
          <button className="btn-run">RUN ▶</button>
        </div>
      </div>

      <div className="editor-main">
        <div className="code-area">
          <textarea defaultValue={`print("Hello, World!")`} />
        </div>

        <div className="side-panel">
          <div className="stdin-section">
            <label>STDIN</label>
            <textarea placeholder="Input for the program ( Optional )" />
          </div>
          <div className="stdout-section">
            <label>Output:</label>
            <pre>Hello, World!</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorUI;
