import React from 'react'
import "./Teams.css"
import compilersvg from "../assets/compiler.svg"

const Teams = () => {
  return (
     <section className="orgs-section">
      <div className="orgs-container">
        <div className="orgs-text">
          <h2 className="orgs-title">Orgs & Teams</h2>
          <p className="orgs-subtitle">
            Collaborate using Organizations & Teams. Assign & track challenges, chat with the team members and more
          </p>
          <h3 className="orgs-heading">Your team's private space with collaboration</h3>
          <p className="orgs-description">
            Create org with your college or with your company and create teams for classrooms or projects.
            Use Posts, Q&A, Chat, Challenges and many more features within your Orgs & Teams.
          </p>
          <a href="#" className="orgs-link">Learn more →</a>
        </div>
        <div className="orgs-image-box">
          <img src={compilersvg} alt="Orgs and Teams UI" className="orgs-image" />
        </div>
      </div>
    </section>
  )
}

export default Teams