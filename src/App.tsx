import React from 'react'
import { Button } from './components'
import './App.css'

const App = () => {
  const handleCancel = () => console.log('you clicked cancel')
  const handleCTA = () => console.log('you clicked CTA')

  return (
    <section className="App">
      <h1>Onset</h1>
      <p>Simple and easy.</p>
      <div className="button-row">
        <Button as="tertiary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button as="primary" onClick={handleCTA}>
          Let's Go!
        </Button>
      </div>
    </section>
  )
}

export default App
