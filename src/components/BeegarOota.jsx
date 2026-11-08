import wedding from '../config/wedding'
import EventSection from './EventSection'
const Art = () => (
  <svg viewBox="0 0 300 200" role="img" aria-label="Feast on a banana leaf">
    <path d="M10 110Q150 20 290 110Q150 190 10 110z" fill="#4c8a3b" /><path d="M10 110Q150 100 290 110" stroke="#2f6a2a" strokeWidth="3" fill="none" />
    <circle cx="150" cy="115" r="30" fill="#fffaf0" /><circle cx="150" cy="115" r="30" fill="none" stroke="#e8e0cc" />
    <circle cx="95" cy="98" r="11" fill="#e0a526" /><circle cx="205" cy="98" r="11" fill="#b83a1e" /><circle cx="85" cy="130" r="10" fill="#7a9a2c" />
    <circle cx="215" cy="130" r="10" fill="#d9822b" /><circle cx="120" cy="150" r="9" fill="#f4d56a" /><circle cx="180" cy="150" r="9" fill="#8a4a24" />
    <g fill="#c9a24a"><circle cx="40" cy="168" r="9" /><circle cx="260" cy="168" r="9" /></g>
  </svg>
)
export default function BeegarOota() {
  return <EventSection id="beegara" theme="t-beegara" chapter="THE FEAST OF TOGETHERNESS" ev={wedding.events.beegar}
    subtitle="A Traditional Feast of Love, Family & Togetherness" Art={Art} petal="#e0a526" />
}
