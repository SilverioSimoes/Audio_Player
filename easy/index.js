const data = {
  title: 'Bachianas Brasileiras N°5',
  artist: 'Heitor Villa Lobos',
  image: 'files/heitor2.jpeg',
  file: 'files/bachianas-brasileiras-n-5.mp3'
}

image.style.background = `url('${data.image}') no-repeat center center / cover`
audio.src = data.file
title.innerText = data.title
art.innerText = data.artist
