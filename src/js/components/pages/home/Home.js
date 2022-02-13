import React from 'react'

import './Home.scss'

function Home (props) {
  return (
    <div className="home">
      <canvas className="three-canvas"></canvas>
      
      <div className="home__title">
        <p>
          Creative<br />Stuff<br />Storage
        </p>

        <button>Get In</button>
      </div>
    </div>
  )
}

export default Home