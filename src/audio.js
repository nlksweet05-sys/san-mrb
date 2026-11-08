
import wedding from './config/wedding'

const TARGET = 0.35

let audio = null
let timer = null
let listeners = new Set()

const state = {
  on: false,
  error: false
}

const emit = () => {
  listeners.forEach((listener) => listener({ ...state }))
}

export const subscribe = (listener) => {
  listeners.add(listener)
  listener({ ...state })

  return () => listeners.delete(listener)
}

function getAudio() {
  if (audio) return audio

  audio = new Audio(wedding.musicFile)
  audio.loop = true
  audio.preload = 'none'
  audio.volume = 0

  audio.addEventListener('error', () => {
    state.error = true
    state.on = false
    emit()
  })

  audio.addEventListener('play', () => {
    state.on = true
    emit()
  })

  audio.addEventListener('pause', () => {
    state.on = false
    emit()
  })

  return audio
}

function fade(target, callback) {
  clearInterval(timer)

  timer = setInterval(() => {
    if (!audio) {
      clearInterval(timer)
      timer = null
      return
    }

    const difference = target - audio.volume

    if (Math.abs(difference) < 0.03) {
      audio.volume = target
      clearInterval(timer)
      timer = null
      callback?.()
    } else {
      audio.volume += Math.sign(difference) * 0.03
    }
  }, 50)
}

export async function play() {
  const el = getAudio()

  // Avoid duplicate playback requests
  if (!el.paused && state.on) return

  try {
    clearInterval(timer)
    timer = null

    el.volume = 0

    await el.play()

    state.error = false
    state.on = true

    fade(TARGET)
  } catch (error) {
    state.on = false
    emit()
  }

  emit()
}

export function pause() {
  if (!audio) return

  state.on = false

  fade(0, () => {
    audio.pause()
  })

  emit()
}

export function stop() {
  clearInterval(timer)
  timer = null

  if (audio) {
    audio.pause()
    audio.currentTime = 0
    audio.volume = 0
  }

  state.on = false
  emit()
}

export function toggle() {
  if (state.on) {
    pause()
  } else {
    play()
  }
}
