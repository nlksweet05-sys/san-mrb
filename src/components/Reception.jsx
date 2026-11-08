import wedding from '../config/wedding'
import EventSection from './EventSection'
const Art = () => (
  <svg viewBox="0 0 300 200" role="img" aria-label="Palace with chandelier">
    <g fill="none" stroke="#d8b25a" strokeWidth="2"><path d="M20 190V90h40v100M240 190V90h40v100M60 190V60Q150-20 240 60v130" /><path d="M110 190V110Q150 70 190 110v80" /></g>
    <g stroke="#d8b25a" fill="#e6c46a"><path d="M150 0v34" /><path d="M120 50h60l-10-16h-40z" /><path d="M110 50q40 28 80 0" fill="none" />{[115, 135, 150, 165, 185].map((x) => <circle key={x} cx={x} cy="66" r="3" className="twinkle" />)}</g>
  </svg>
)
export default function Reception() {
  return <EventSection id="reception" theme="t-reception" chapter="THE CELEBRATION" ev={wedding.events.reception}
    subtitle="An Evening of Celebration, Love & Togetherness" Art={Art} petal="#e6c46a" countdown />
}
