
import wedding from '../config/wedding'
import Petals from './Petals'

const variant = import.meta.env.VITE_INVITE_VARIANT || 'all'

const firstEvent = {
  all: 'muhurtham',
  'reception-beegar': 'reception',
  reception: 'reception',
}[variant] || 'muhurtham'

export default function Welcome() {
  const go = () => {
    document
      .getElementById(firstEvent)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="sec welcome">
      <Petals n={14} />

      <svg
        className="arch"
        viewBox="0 0 300 120"
        aria-hidden="true"
      >
        <path
          d="M10 120V60Q10 10 150 10T290 60v60"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="2"
        />
        <path
          d="M30 120V65Q30 28 150 28T270 65v55"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1"
          opacity=".6"
        />
        <circle cx="150" cy="10" r="6" fill="var(--gold)" />
      </svg>

      <p className="eyebrow">
        WE JOYFULLY INVITE YOU TO CELEBRATE THE WEDDING OF
      </p>

      <h1 className="names script">{wedding.bride}</h1>
      <div className="amp script">&amp;</div>
      <h1 className="names script">{wedding.groom}</h1>

      <Divider />

      <p className="tag">
        Two families, two hearts, one beautiful celebration.
      </p>

      <button className="btn gold" onClick={go}>
        DISCOVER THE CELEBRATIONS
      </button>
    </section>
  )
}

export const Divider = () => (
  <div className="divider" aria-hidden="true">
    <span />
    <b>❖</b>
    <span />
  </div>
)
