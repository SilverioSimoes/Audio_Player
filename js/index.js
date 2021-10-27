let i = 0
const image = document.querySelector('#image')
const audio = document.querySelector('#audio')
const title = document.querySelector('#title')
const artist = document.querySelector('#artist')
const currentAudio = data[i].file

function playAudio() {
  if (i > 0) audio.play()
}

function next() {
  i++
  if (i < data.length) {
    start()
  } else {
    i = 0
    start()
  }
}
function start() {
  image.src = data[i].image
  audio.src = data[i].file
  title.innerText = data[i].title
  artist.innerText = data[i].artist
  playAudio()
}

start()
audio.addEventListener('ended', event => next())
