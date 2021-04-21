import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should match snapshot', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <section
        class="App"
      >
        <h1>
          Onset
        </h1>
        <p>
          Simple and easy.
        </p>
        <div
          class="button-row"
        >
          <button
            class="button button-tertiary"
            type="button"
          >
            Cancel
          </button>
          <button
            class="button button-primary"
            type="button"
          >
            Let's Go!
          </button>
        </div>
      </section>
    `)
  })
})
