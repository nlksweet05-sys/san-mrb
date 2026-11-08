export default function Petals({ n = 12, color = 'var(--gold)' }) {
  return (
    <div className="petals" aria-hidden="true">
      {Array.from({ length: n }, (_, i) => (
        <span key={i} style={{ left: `${(i * 83) % 100}%`, animationDelay: `${(i * 1.3) % 9}s`, animationDuration: `${9 + (i % 5) * 2}s`, background: color }} />
      ))}
    </div>
  )
}
