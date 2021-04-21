import React from 'react'
import { Button } from './components'
import './App.css'

const App = () => {
  const handleCTA = () => {}

  return (
      <>
    <section className="App">
      <h1>Onset</h1>
      <div className="App-info">
        <span>[<em>änˌset</em>, <em>ônˌset</em>]</span>
        <strong>noun</strong>
      </div>
      <div className="App-def">
    the beginning of something, especially something
        unpleasant.
        </div>
    </section>
    <footer>
        Made with <strong>❤</strong> on <a rel="noopener noreferrer" href="https://github.com/garystorey/onset" target="_blank">Github</a>
    </footer>
    </>
  )
}

export default App
