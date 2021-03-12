const ul = document.querySelector('ul')

function newLi() {
  return document.createElement('li')
}

function randomPhoto(photos) {
  let img = document.createElement('img')

  let randomNumber = Math.floor(Math.random() * photos.length)

  img.src = photos[randomNumber].img_src
  img.setAttribute('sol', photos[0].sol)

  return img
}

function appendSol(sol) {
  let p = document.createElement('p')

  p.textContent = "SOL: " + sol

  return p
}

function appendEdate(Edate) {
  let p = document.createElement('p')

  p.textContent = "Earth Date: " + Edate

  return p
}

function liData(data) {
  let photo = randomPhoto(data.photos)
  let sol = appendSol(data.photos[0].sol)
  let earthdate = appendEdate(data.photos[0].earth_date)

  appendli(photo, sol, earthdate)
}

function appendli(photo, sol, earthdate) {
  let li = newLi()
  li.append(photo, sol, earthdate)
  ul.appendChild(li)
}

module.exports = { liData }