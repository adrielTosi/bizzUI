import React from "react"
import me from "images/Portfolio/me.jpg"
const About = () => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-12 col-lg-4 text-center">
        <img src={me} height="200px" style={{ borderRadius: "100%" }} alt="" />
      </div>
      <div
        className="col-12 col-lg-8"
        style={{ borderLeft: "2px solid black" }}
      >
        Hello! My name is Adriel, nice to meet you. I am a front-end developer
        based in Germany. I was born in Brazil but I'm also partly Italian (such
        confusion). I use React as my primary tool to magically manipulate the
        DOM right in front of your eyes! I love to learn new things, in fact, I
        believe I can learn anything if I put my mind to it. I look foward to
        working with you!
      </div>
    </div>
  )
}

export default About
