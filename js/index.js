let i = 0
let loopInfinite = false
const image = document.querySelector('#image')
const audio = document.querySelector('#audio-data')
const title = document.querySelector('#title')
const artist = document.querySelector('#artist')
const previous = document.querySelector('#previous')
const playElement = document.querySelector('#play')
const stopElement = document.querySelector('#stop')
const loopAudio = document.querySelector('#loop-current-audio')
const loopAll = document.querySelector('#loop-all-audios')
const next = document.querySelector('#next')
const currentAudio = audio

function currentAudioData() {
  image.src = data[i].image
  audio.src = data[i].file
  currentAudio.volume = 0.05
  title.innerText = data[i].title
  artist.innerText = data[i].artist
}

function playAudio() {
  currentAudio.play()
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

function stopAudio() {
  currentAudioData()
}

function loopCurrentAudio() {
  if (currentAudio.loop === false && loopAudio.style.color === 'white') {
    currentAudio.loop = true
    loopAudio.style.color = 'green'
  } else {
    currentAudio.loop = false
    loopAudio.style.color = 'white'
  }
  console.log(currentAudio.loop, loopAudio.style.color)
}

function loopAllAudios() {
  let color = ''
  if (loopInfinite === false && loopAll.style.color === 'white') {
    loopInfinite = true
    loopAll.style.color = 'green'
  } else {
    loopInfinite = false
    loopAll.style.color = 'white'
  }
  console.log(loopInfinite, loopAll.style.color)
}

function start() {
  currentAudioData()
  currentAudio.addEventListener('ended', () => {
    if (i + 1 < data.length) {
      nextAudio()
      playAudio()
    } else if (loopInfinite) {
      nextAudio()
      playAudio()
    }
  })
}

function actionsOfButtons() {
  stopElement.addEventListener('click', () => stopAudio())
  next.addEventListener('click', () => {
    if (!currentAudio.paused) {
      nextAudio()
      playAudio()
    } else nextAudio()
  })
  previous.addEventListener('click', () => {
    if (!currentAudio.paused) {
      prevAudio()
      playAudio()
    } else prevAudio()
  })
  loopAudio.addEventListener('click', () => loopCurrentAudio())
  loopAll.addEventListener('click', () => loopAllAudios())
}

start()
actionsOfButtons()
