import { db } from 'src/lib/db'
import fetch from 'node-fetch'
import { id as sha3 } from '@ethersproject/hash'

const LI_CHESS_API = 'https://lichess.org/game/export/'
const LI_CHESS_PARAMS = '?clocks=false'

const text1 = `[Event "Rated Bullet game"]
[Site "https://lichess.org/3RVEhTDV"]
[Date "2021.02.06"]
[White "jschiarizzi"]
[Black "Halit63"]
[Result "1/2-1/2"]
[UTCDate "2021.02.06"]
[UTCTime "20:49:28"]
[WhiteElo "1476"]
[BlackElo "1513"]
[WhiteRatingDiff "+2"]
[BlackRatingDiff "-1"]
[Variant "Standard"]
[TimeControl "60+0"]
[ECO "B40"]
[Opening "Sicilian Defense: Marshall Counterattack"]
[Termination "Normal"]

1. e4 e6 2. Nf3 d5 3. d4 c5 4. exd5 exd5 5. Bb5+ Nc6 6. Bxc6+ bxc6 7. c3 Nf6 8. Bf4 Qe7+ 9. Qe2 cxd4 10. cxd4 Qxe2+ 11. Kxe2 Ba6+ 12. Kd2 Bb4+ 13. Nc3 Ne4+ 14. Kc2 Nxf2 15. Rhf1 Ne4 16. Rfe1 O-O 17. Re3 Nxc3 18. bxc3 Be7 19. Ne5 Bf6 20. Nxc6 Rac8 21. Nb4 Bxd4 22. Rd3 Bxd3+ 23. Kxd3 Bxc3 24. Nxd5 Bxa1 25. Ne7+ Kh8 26. Nxc8 Rxc8 27. Bd6 Rc3+ 28. Kd2 Rc6 29. Bb4 Bf6 30. a3 Rb6 31. Ke3 a5 32. Kf3 axb4 33. axb4 Rxb4 34. g3 Rb2 35. Kg4 Rxh2 36. Kf4 Rg2 37. Kf5 Rxg3 38. Ke4 h6 39. Kd5 h5 40. Kc6 h4 41. Kd7 h3 42. Ke8 h2 43. Kf8 h1=Q 44. Ke8 Rd3 45. Kxf7 Rd8 46. Kg6 Qf1 47. Kf7 Rd5 48. Kg6 Re5 49. Kf7 Qg2 50. Kf8 Qg6 1/2-1/2
`

const parseDate = (rawDate) => {
  if (!rawDate) return ''
  let [year, month, day] = rawDate.split('.')
  if (year.includes('?')) year = 0
  month = month.includes('?') ? 0 : month - 1
  if (day.includes('?')) day = 1
  return new Date(year, month, day)
}

export const games = () => {
  return db.game.findMany()
}

export const game = ({ id }) => {
  return db.game.findUnique({
    where: { id },
  })
}

export const createGame = async ({ input: { externalUrl } }) => {
  let black
  let white
  let playedAtRaw
  let winner = 'white'
  let location = 'Lichess.org'
  let eventName
  let moves

  if (externalUrl.includes('lichess.org')) {
    // https://lichess.org/api#section/Introduction
    let text
    try {
      const gameId = externalUrl.split('lichess.org/')[1].slice(0, 8)
      const res = await fetch(`${LI_CHESS_API}${gameId}${LI_CHESS_PARAMS}`)
      if (res.status === 404) throw new Error(`Game ${gameId} not found`)
      text = await res.text()
    } catch (e) {
      throw new Error(`Couldn't get game from Lichess.org. ${e}`)
    }
    text.split(/\n/).map((line) => {
      if (line.includes('[Black ')) black = line.split(`"`)[1]
      if (line.includes('[White ')) white = line.split(`"`)[1]
      if (line.includes('[Event ')) eventName = line.split(`"`)[1]
      if (line.includes('[Date ')) playedAtRaw = line.split(`"`)[1]
      let winnerRaw
      if (line.includes('[Result ')) winnerRaw = line.split(`"`)[1]
      if (line.includes('[Result ')) console.log(line)
      if (winnerRaw === '0-1') winner = 'black'
      else if (winnerRaw === '1/2-1/2') winner = 'draw'
      if (line.match(/1./)) console.log(line)
      if (line.match(/1./)) moves = line.split(/[0-21/2]+-/)[0].trim()
    })
  } else if (externalUrl.includes('chess.com')) {
    // https://www.chess.com/news/view/published-data-api#pubapi-endpoint-games
    // https://github.com/andyruwruw/chess-web-api
    location = 'Chess.com'
    throw Error('Chess.com is not available yet!')
  } else {
    throw Error('URL is not valid')
  }

  // const playedAt =
  const input = {
    black,
    white,
    playedAt: parseDate(playedAtRaw),
    winner,
    location,
    event: eventName,
    moves,
    id: sha3(moves),
    externalUrl,
  }
  // console.log(input)
  return db.game.create({
    data: input,
  })
}

export const updateGame = ({ id, input }) => {
  return db.game.update({
    data: input,
    where: { id },
  })
}

export const deleteGame = ({ id }) => {
  return db.game.delete({
    where: { id },
  })
}

export const Game = {
  minter: (_obj, { root }) =>
    db.game.findUnique({ where: { id: root.id } }).minter(),
}
