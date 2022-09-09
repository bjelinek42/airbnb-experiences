import React from 'react'
import AE from '../images/Airbnb_Experiences.png'

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero--img" src={AE} alt="Airbnb Experiences" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--info">Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
    </section>
  )
}