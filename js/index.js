let i = 0
let playing = false
const image = document.querySelector('#image')
const audio = new Audio(data[i].file)
const currentAudio = audio
const audioTime = document.querySelector('#audio-time')
const audioDuration = document.querySelector('#audio-duration')
const title = document.querySelector('#title')
const artist = document.querySelector('#artist')
const previous = document.querySelector('#previous')
const playElement = document.querySelector('#play')
const pauseElement = document.querySelector('#pause')
const stopElement = document.querySelector('#stop')
const next = document.querySelector('#next')

function currentAudioData() {
  image.src = data[i].image
  audio.src = data[i].file
  currentAudio
  title.innerText = data[i].title
  artist.innerText = data[i].artist
  audioTime.innerText = currentAudio.currentTime
  audioDuration.innerText = currentAudio.duration
}

function playAudio() {
  playing = true
  currentAudio.play()
}

function pauseAudio() {
  playing = false
  currentAudio.pause()
}

function prevAudio() {
  i--
  if (i >= 0) {
    if (playing) {
      currentAudioData()
      playAudio()
    } else currentAudioData()
  } else {
    i = data.length - 1
    if (playing) {
      currentAudioData()
      playAudio()
    } else currentAudioData()
  }
}

function nextAudio() {
  i++
  if (i < data.length) {
    if (playing) {
      currentAudioData()
      playAudio()
    } else {
      currentAudioData()
    }
  } else {
    i = 0
    if (playing) {
      currentAudioData()
      playAudio()
    } else currentAudioData()
  }
}

function stopAudio() {
  playing = false
  currentAudioData()
}

currentAudioData()

currentAudio.addEventListener('ended', () => {
  nextAudio()
  playAudio()
})
previous.addEventListener('click', () => prevAudio())
playElement.addEventListener('click', () => playAudio())
pauseElement.addEventListener('click', () => pauseAudio())
stopElement.addEventListener('click', () => stopAudio())
next.addEventListener('click', () => nextAudio())
