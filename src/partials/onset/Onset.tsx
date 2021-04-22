import React from 'react'
import './Onset.css'

export function Onset() {
  return (
    <>
    <section className="onset">
        <span className="onset-sun"></span>
        <header>
            <h1>Onset</h1>
            <span>[<em>änˌset</em>, <em>ônˌset</em>]</span>
            <strong>noun</strong>
        </header>
        <main>
            the beginning of something, especially something unpleasant.
        </main>
        <footer>
        Made with <strong>❤</strong> on{' '}
        <a
          rel="noopener noreferrer"
          href="https://github.com/garystorey/onset"
          target="_blank"
        >
          Github
        </a>
      </footer>
      </section>
    </>
  )
}
export default Onset;