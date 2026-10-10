import { useEffect } from 'react'
import RaceTrack from './Components/raceTrack'
import './App.css'

function App() {
  return (
    <>
      <section id="content">
        <RaceTrack number={1} />
        {/* <RaceTrack number={2} /> */}
      </section>

      <div></div>
    </>
  )
}

export default App
