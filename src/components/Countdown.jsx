import { useEffect, useState } from 'react'
export default function Countdown({ to }) {
  const [now, setNow] = useState(Date.now())
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t) }, [])
  const ms = new Date(to).getTime() - now
  if (ms <= 0) return <p className="tag">The celebration has begun — thank you for being with us! 🙏</p>
  const s = Math.floor(ms / 1000)
  const items = [['Days', Math.floor(s / 86400)], ['Hours', Math.floor(s / 3600) % 24], ['Mins', Math.floor(s / 60) % 60], ['Secs', s % 60]]
  return (
    <div className="count" role="timer" aria-label="Countdown to the reception">
      {items.map(([l, v]) => <div key={l}><b>{String(v).padStart(2, '0')}</b><small>{l}</small></div>)}
    </div>
  )
}
