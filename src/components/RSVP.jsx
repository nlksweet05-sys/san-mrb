import { useState } from 'react'
import { MessageCircle, Phone, Share2 } from 'lucide-react'
import wedding from '../config/wedding'
import { shareInvite } from '../utils'
export default function RSVP() {
  const [name, setName] = useState(''); const [note, setNote] = useState('')
  const msg = encodeURIComponent(`Namaste! This is ${name || 'a guest'}. I would love to attend the wedding celebrations of ${wedding.bride} & ${wedding.groom}.`)
  return (
    <section id="rsvp" className="sec rsvp">
      <p className="eyebrow">KINDLY RESPOND</p><h2 className="title">RSVP</h2>
      <p className="sub">Let us know you’re coming — we’d love to celebrate with you.</p>
      <input className="input" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} aria-label="Your name" />
      <div className="actions">
        {wedding.rsvp.map((r) => (
          <div key={r.wa} className="pair">
            <a className="btn gold" target="_blank" rel="noopener noreferrer" href={`https://wa.me/${r.wa}?text=${msg}`}><MessageCircle size={18} /> WhatsApp {r.label}</a>
            <a className="btn ghost sq" href={`tel:+${r.wa}`} aria-label={`Call ${r.label}`}><Phone size={18} /></a>
          </div>
        ))}
        <button className="btn ghost" onClick={async () => { setNote(await shareInvite(wedding)); setTimeout(() => setNote(''), 3000) }}><Share2 size={18} /> SHARE INVITATION</button>
        <p className="note" aria-live="polite">{note}</p>
      </div>
    </section>
  )
}
