import { id as sha3 } from '@ethersproject/hash'

const countMoves = (moves) => {
  return Math.round(moves.trim().split(' ').length / 2)
}

const parseDate = (rawDate) => {
  if (!rawDate) return ''
  let [year, month, day] = rawDate.split('.')
  if (year.includes('?')) year = 0
  month = month.includes('?') ? 0 : month - 1
  if (day.includes('?')) day = 1
  return new Date(year, month, day)
}

export const parseGameString = ({ gameString, externalUrl = '' }) => {
  let black
  let white
  let playedAtRaw
  let winner = 'white'
  let location = 'Lichess.org'
  let eventName
  let moves

  gameString.split(/\n/).map((line) => {
    if (line.includes('[Black ')) black = line.split(`"`)[1]
    if (line.includes('[White ')) white = line.split(`"`)[1]
    if (line.includes('[Event ')) eventName = line.split(`"`)[1]
    if (line.includes('[Date ')) playedAtRaw = line.split(`"`)[1]
    let winnerRaw
    if (line.includes('[Result ')) winnerRaw = line.split(`"`)[1]
    if (winnerRaw === '0-1') winner = 'black'
    else if (winnerRaw === '1/2-1/2') winner = 'draw'
    if (line.match(/1./)) moves = line.split(/[0-21/2]+-/)[0].trim()
  })

  return {
    black,
    white,
    playedAt: parseDate(playedAtRaw),
    winner,
    location,
    event: eventName,
    moves,
    id: sha3(moves),
    moveCount: countMoves(moves),
    externalUrl,
  }
}
