import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function Contact() {

  return (
    <section className="my-5" >
      <h1 id="about">Contact Me</h1>
      {/* <img src={portrait} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
          Contact me at JohnBopp@email.com
        </p>
        <p>
          My Photography Portfolio: https://www.pixpa.com/example/preview/
        </p>
      </div>
    </section>
  )
}

export default Contact