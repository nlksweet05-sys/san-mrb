export const directionsUrl = (e) =>
  'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(`${e.venue}, ${e.address}`)
const fmt = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
export function downloadIcs(e, { remind = false } = {}) {
  const s = new Date(e.start), en = e.end ? new Date(e.end) : new Date(s.getTime() + 2 * 3600e3)
  const esc = (t) => t.replace(/[,;]/g, (m) => '\\' + m)
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Wedding Invitation//EN', 'BEGIN:VEVENT',
    `UID:${fmt(s)}-wedding@invitation`, `DTSTAMP:${fmt(new Date())}`, `DTSTART:${fmt(s)}`, `DTEND:${fmt(en)}`,
    `SUMMARY:${esc(e.title + ' – Lakshitha & Sanath')}`, `LOCATION:${esc(e.venue + ', ' + e.address)}`,
    `DESCRIPTION:${esc('Wedding celebration of Lakshitha & Sanath. ' + e.dateText + ', ' + e.timeText + '. (India Standard Time)')}`]
  if (remind) lines.push('BEGIN:VALARM', 'TRIGGER:-P1D', 'ACTION:DISPLAY', 'DESCRIPTION:Wedding tomorrow', 'END:VALARM')
  lines.push('END:VEVENT', 'END:VCALENDAR')
  const url = URL.createObjectURL(new Blob([lines.join('\r\n')], { type: 'text/calendar' }))
  const l = document.createElement('a'); l.href = url; l.download = e.title.replace(/\W+/g, '-') + '.ics'
  document.body.appendChild(l); l.click(); l.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000)
}
export async function shareInvite(w) {
  const text = `You are cordially invited to the wedding celebrations of ${w.bride} & ${w.groom}. Open your invitation 💛`
  const data = { title: 'Wedding Invitation – Lakshitha & Sanath', text, url: w.websiteUrl }
  try { if (navigator.share) { await navigator.share(data); return 'shared' } } catch (e) { if (e.name === 'AbortError') return '' }
  try { await navigator.clipboard.writeText(`${text}\n${w.websiteUrl}`); return 'Link copied!' } catch { return 'Copy: ' + w.websiteUrl }
}
