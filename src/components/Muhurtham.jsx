import wedding from '../config/wedding'
import EventSection, { Lamp } from './EventSection'
const Art = () => (
  <svg viewBox="0 0 300 200" role="img" aria-label="Mandap with brass lamps">
    <g fill="none" stroke="#b8902f" strokeWidth="3"><path d="M50 190V70M250 190V70M50 70Q150-10 250 70M70 80Q150 20 230 80" /><path d="M90 190V90M210 190V90" strokeWidth="2" /></g>
    <g fill="#3f7d4a">{[70, 100, 130, 160, 190, 220].map((x) => <path key={x} d={`M${x} 46q6 16 0 28q-6-12 0-28z`} />)}</g>
    <g fill="#fffdf4">{[75, 105, 135, 165, 195, 225].map((x) => <circle key={x} cx={x} cy="86" r="4" />)}</g>
    <circle cx="150" cy="150" r="22" fill="none" stroke="#b8902f" strokeDasharray="3 4" />
    <g transform="translate(95 182)"><Lamp /></g><g transform="translate(205 182)"><Lamp /></g>
  </svg>
)
export default function Muhurtham() {
  return <EventSection id="muhurtham" theme="t-muhurtham" chapter="THE SACRED BEGINNING" ev={wedding.events.muhurtham}
    subtitle="A Sacred Beginning, Blessed by Love and Tradition" Art={Art} petal="#fffdf0"
    message="With the blessings of our beloved elders, we request the honour of your gracious presence as we celebrate the sacred union of two souls." />
}
