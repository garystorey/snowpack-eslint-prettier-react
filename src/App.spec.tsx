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
        <div
          class="App-info"
        >
          <span>
            [
            <em>
              änˌset
            </em>
            , 
            <em>
              ônˌset
            </em>
            ]
          </span>
          <strong>
            noun
          </strong>
        </div>
        <div
          class="App-def"
        >
          the beginning of something, especially something unpleasant.
        </div>
      </section>
    `)
  })
})
