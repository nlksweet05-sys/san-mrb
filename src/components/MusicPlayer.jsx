
import { useEffect, useState } from 'react'
import { Music2, VolumeX } from 'lucide-react'
import * as bgm from '../audio'

export default function MusicPlayer() {
  const [music, setMusic] = useState({
    on: false,
    error: false
  })

  useEffect(() => {
    return bgm.subscribe(setMusic)
  }, [])

  return (
    <button
      className={`music ${music.on ? 'playing' : ''}`}
      onClick={bgm.toggle}
      aria-pressed={music.on}
      aria-label={
        music.error
          ? 'Music unavailable'
          : music.on
            ? 'Turn music off'
            : 'Turn music on'
      }
      title={music.error ? 'Music file unavailable' : ''}
    >
      {music.on ? (
        <Music2 size={22} />
      ) : (
        <VolumeX size={22} />
      )}
    </button>
  )
}
