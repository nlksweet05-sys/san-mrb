import { MapPin, CalendarPlus, BellRing } from 'lucide-react'
import wedding from '../config/wedding'
import { directionsUrl, downloadIcs } from '../utils'
import Petals from './Petals'
import Countdown from './Countdown'
import { Divider } from './Welcome'
export default function EventSection({ id, theme, chapter, ev, subtitle, message, Art, petal, countdown }) {
  return (
    <section id={id} className={`sec event ${theme}`}>
      <Petals n={8} color={petal} />
      <p className="eyebrow">{chapter}</p>
      <h2 className="title">{ev.title}</h2>
      <p className="sub">{subtitle}</p>
      <div className="art"><Art /></div>
      {message && <p className="msg">“{message}”</p>}
      <Divider />
      <dl className="info">
        <dt>Date</dt><dd>{ev.dateText}</dd>
        <dt>{ev.end ? 'Auspicious Time' : 'Time'}</dt><dd>{ev.timeText}</dd>
        <dt>Venue</dt><dd>{ev.venue}</dd>
        <dd className="addr">{ev.address}</dd>
      </dl>
      {countdown && <Countdown to={ev.start} />}
      <div className="actions">
        <a className="btn gold" href={directionsUrl(ev)} target="_blank" rel="noopener noreferrer"><MapPin size={18} /> GET DIRECTIONS</a>
        <button className="btn ghost" onClick={() => downloadIcs(ev)}><CalendarPlus size={18} /> ADD TO CALENDAR</button>
        {countdown && <button className="btn ghost" onClick={() => downloadIcs(ev, { remind: true })}><BellRing size={18} /> SAVE THE DATE</button>}
      </div>
    </section>
  )
}
export const Lamp = () => (<g><path d="M-14 0h28l-6 10h-16z" fill="#c9a24a" /><ellipse cx="0" cy="0" rx="14" ry="3" fill="#e6c46a" /><path className="flame" d="M0-4C-6-14 0-20 0-26 6-18 6-10 0-4z" fill="#ffb938" /></g>)
