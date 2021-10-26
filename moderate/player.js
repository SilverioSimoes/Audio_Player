function start() {
  this.image.src = data[0].image
  this.audio.src = data[0].file
  this.title.innerText = data[0].title
  this.art.innerText = data[0].artist
}

start()
