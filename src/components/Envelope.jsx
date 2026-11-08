
import { useState } from 'react'
import * as bgm from '../audio'
import Petals from './Petals'

export default function Envelope({ onDone }) {
  const [phase, setPhase] = useState(0)

  const open = () => {
    if (phase) return

    bgm.play()
    setPhase(1)
    setTimeout(() => setPhase(2), 1900)
    setTimeout(onDone, 2500)
  }

  return (
    <div
      className={`env ${phase ? 'env-open' : ''} ${phase === 2 ? 'env-zoom' : ''}`}
      role="dialog"
      aria-label="Wedding invitation envelope"
    >
      <Petals n={10} />

      <p className="env-top">YOU ARE CORDIALLY INVITED</p>

      <div className="envelope">
        <div className="card">
          <span className="script">L &amp; S</span>
          <small>Wedding Invitation</small>
        </div>
        <div className="flap" />
        <div className="seal" aria-hidden="true">ॐ</div>
      </div>

      <button className="btn gold" onClick={open} disabled={phase > 0}>
        OPEN YOUR INVITATION
      </button>

      {phase > 0 &&
        Array.from({ length: 18 }, (_, i) => (
          <i
            key={i}
            className="spark"
            style={{
              left: `${10 + ((i * 47) % 80)}%`,
              animationDelay: `${(i % 6) * 0.15}s`,
            }}
          />
        ))}
    </div>
  )
}
