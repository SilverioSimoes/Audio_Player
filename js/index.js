let i = 0
const image = document.querySelector('#image')
const audio = document.querySelector('#audio')
const title = document.querySelector('#title')
const artist = document.querySelector('#artist')
const previous = document.querySelector('#previous')
const next = document.querySelector('#next')
const Stop = document.querySelector('#stop')
const currentAudio = data[i].file

function currentAudioData() {
  image.src = data[i].image
  audio.src = data[i].file
  title.innerText = data[i].title
  artist.innerText = data[i].artist
}

function playAudio() {
  audio.play()
}

function prevAudio() {
  i--
  if (i >= 0) {
    currentAudioData()
  } else {
    i = data.length - 1
    currentAudioData()
  }
}

function nextAudio() {
  i++
  if (i < data.length) {
    currentAudioData()
  } else {
    i = 0
    currentAudioData()
  }
}
function startAudio() {
  playAudio()
}

function stopAudio() {
  currentAudioData()
}

currentAudioData()

audio.addEventListener('ended', () => {
  nextAudio()
  playAudio()
})
previous.addEventListener('click', () => prevAudio())
next.addEventListener('click', () => nextAudio())
Stop.addEventListener('click', () => stopAudio())
