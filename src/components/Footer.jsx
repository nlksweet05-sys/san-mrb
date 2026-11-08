import wedding from '../config/wedding'
import Petals from './Petals'
import { Divider } from './Welcome'
export default function Footer() {
  return (
    <footer className="sec foot">
      <Petals n={10} />
      <p className="eyebrow">WITH LOVE, JOY &amp; BLESSINGS</p>
      <p className="msg">“We eagerly look forward to celebrating these special moments with you.”</p>
      <Divider />
      <p className="fam">{wedding.brideFamily.join(' and ')}</p><div className="amp script">&amp;</div><p className="fam">{wedding.groomFamily.join(' and ')}</p>
      <Divider />
      <p className="thanks">THANK YOU FOR BEING PART OF OUR CELEBRATION.</p>
      <div className="credit">
        <div className="credit-line" aria-hidden="true"><span /><i>✦</i><span /></div>
        <p>Coding by Lakshitha &amp; Designing by Sanath</p>
      </div>
    </footer>
  )
}
