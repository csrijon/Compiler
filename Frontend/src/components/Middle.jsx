import React from 'react'
import "./Middle.css"

const Middle = () => {
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
    </section>
  )
}

export default Middle