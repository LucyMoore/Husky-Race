import React, { useEffect } from 'react'
import '../App.css'
import dogSled from '../assets/dogSled.png'

function Racetrack(props) {
  const trackNum = 'track' + props.number
  console.log(trackNum)
  useEffect(() => {
    const dogSled = document.getElementById(trackNum).querySelector('img')
    let position = dogSled.offsetLeft

    //when key down do:
    function handleKeyDown(event) {
      if (event.key === 'ArrowRight') {
        position += 5
        dogSled.style.left = position + 'px'
      }
    }

    window.addEventListener('keydown', handleKeyDown)
  }, [trackNum])

  return (
    <>
      <div>
        <h2>track {props.number}</h2>
        <div id={trackNum} className="race-track">
          <img src={dogSled}></img>
        </div>
      </div>
    </>
  )
}

export default Racetrack
