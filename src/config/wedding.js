// ✏️ EDIT EVERYTHING HERE. iso = date/time in India time (+05:30).
const wedding = {
  bride: 'Lakshitha Karthik N',
  groom: 'Sanath S',
  brideFamily: ['Smt Vijayashree B G', 'Sri J Nethaji Bose'],
  groomFamily: ['Smt H Sujatha', 'Sri C.R Sathish Kumar'],
  websiteUrl: 'https://YOUR-SITE.vercel.app', // ← replace after deploying
  musicFile: '/music/wedding-background.mp3',
   rsvp: [
  { label: 'Bose', wa: '919448688232' },
  { label: 'Sathish', wa: '919448303753' }
],
  events: {
    muhurtham: {
      title: 'The Muhurtham', dateText: '19 November 2026', timeText: '9:30 AM – 10:30 AM',
      start: '2026-11-19T09:30:00+05:30', end: '2026-11-19T10:30:00+05:30',
      venue: 'Bhoga Nandishwara Temple', address: 'SH 74, Nandi Village, Chikkaballapur Dist - 562103',
      mapLink: 'https://share.google/iiP9Lzftq8rMnYg1G',
    },
    reception: {
      title: 'The Grand Reception', dateText: '22 November 2026', timeText: '7 PM onwards',
      start: '2026-11-22T19:00:00+05:30', end: '2026-11-22T22:30:00+05:30',
      venue: 'G.S Brindavana', address: 'Betahalli Cross, Near Byndahalli, Magadi Road, Dasanpura Hobli, Bangalore - 562130',
      mapLink: 'https://share.google/qZq2YdN6LnMae6WOn',
    },
    beegar: {
      title: 'Beegara Oota', dateText: '25 November 2026', timeText: '12:30 Noon onwards',
      start: '2026-11-25T12:30:00+05:30', end: null, // no end time given → calendar defaults to 2 hrs
      venue: 'Karnataka Engineers Academy', address: '2nd Main Rd, 3rd Stage 4th Block, Shakthi Ganapathi Nagar, Basaveshwar Nagar, Bengaluru, Karnataka 560079',
      mapLink: 'https://share.google/gMhas5ZMsMLvmmnFA',
    },
  },
}
export default wedding
