import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
   <div className="gpt3__whatgpt3 section__margin" id="wgpt3">

    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="Generative Pre-trained Transformer 3 is an autoregressive language model
               that uses deep learning to produce human-like text. 
               It is the third-generation language prediction model in the GPT-n series created by OpenAI, 
               a San Francisco-based artificial intelligence research laboratory."
       />
    </div>

    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore The Library</p>
    </div>

    <div className="gpt3__whatgpt3-container">
      <Feature 
        title="Chatbots"
        text="Developed by OpenAI, GPT-3 is a machine learning model specialized in language processing."
      />
      <Feature 
        title="Knowledgebase"
        text="Helphub is a GPT-3 powered knowledge base that writes support articles for you. 
              Useful, affordable, and beautifully designed."
      />
      <Feature
        title="Education"
        text="OpenAI has released new versions of GPT-3 and Codex which can 
              edit or insert content into existing text, rather than just completing existing text. "
      />
    </div>
   </div>
  )
}

export default WhatGPT3