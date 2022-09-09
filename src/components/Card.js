import React from 'react'
import katie from '../images/katie.jpeg'
import star from '../images/star.jpeg'

export default function Card() {
  return (
    <section>
      <img className="card--photo" src={katie} alt="katie" />
      <div className="card--info">
        <img className="card--star" src={star} alt="star" />
        <span>5.0</span>
        <span className="card--info--reviews">(6)</span>
        <span className="card--info--location">-USA</span>
        <p>Life lessons with Katie Zaferes</p>
        <p><span><b>From $138</b></span> / person</p>
      </div>
    </section>
  )
}