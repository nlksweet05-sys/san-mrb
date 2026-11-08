
import { useEffect, useState } from 'react'

const variant = import.meta.env.VITE_INVITE_VARIANT || 'all'

const allItems = [
  ['home', 'Home'],
  ['muhurtham', 'Muhurtham'],
  ['reception', 'Reception'],
  ['beegar', 'Beegar Oota'],
  ['rsvp', 'RSVP']
]

const items = allItems.filter(([id]) => {
  if (variant === 'all') return true
  if (variant === 'reception-beegar') {
    return id !== 'muhurtham'
  }
  if (variant === 'reception') {
    return !['muhurtham', 'beegar'].includes(id)
  }
  return true
})

export default function Navigation() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.45 }
    )

    items.forEach(([id]) => {
      const element = document.getElementById(id)
      if (element) io.observe(element)
    })

    return () => io.disconnect()
  }, [])

  return (
    <nav className="nav" aria-label="Sections">
      {items.map(([id, label]) => (
        <button
          key={id}
          className={active === id ? 'on' : ''}
          aria-current={active === id ? 'location' : undefined}
          onClick={() =>
            document
              .getElementById(id)
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          {label}
        </button>
      ))}
    </nav>
  )
}
