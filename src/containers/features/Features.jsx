import React from 'react';
import { Feature } from '../../components';
import './features.css';


const featuresData = [
  {
    title: "Creation of apps and layout tools ",
    text: "Jordan Singer tested GPT-3 to create an app by only providing a description for GPT-3.Sharif built a functional react app by only describing what he wanted to GPT-3."
  },
  {
    title: "Turning Legal text into plain English",
    text: "Another user, Michael, trained GPT-3 to turn legal text into simple and plain English without using a code."       
  },
  {
      title: "Content creation",
      text: "Merzmensch twitted about his first try with the app. He sought for a Shakespearean poem and got something splendid."
  },
  {
      title: "Really boy law county",
      text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="gpt3__features-container">
        {featuresData.map((item,index) => (
          <Feature 
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  )
}

export default Features