const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')
const festDateEl = document.getElementById('festDate')

const fest = '31 Dec 2030'

function countdown() {
  const festDate = new Date(fest)
  const currentDate = new Date()

  const totalSeconds = (festDate - currentDate) / 1000

  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const mins = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60
  festDateEl.innerHTML = fest
  daysEl.innerHTML = days
  hoursEl.innerHTML = formatTime(hours)
  minsEl.innerHTML = formatTime(mins)
  secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}
// initial call
countdown()

setInterval(countdown, 1000)
