import { db } from 'src/lib/db'
import fetch from 'node-fetch'
import { parseGameString } from 'src/utils/game'
import { getNftDetails } from 'src/utils/niftyChess'
import { JsonRpcProvider } from '@ethersproject/providers'

const LI_CHESS_API = 'https://lichess.org/game/export/'
const LI_CHESS_PARAMS = '?clocks=false'

const GAMES_PER_PAGE = 9

const walletlessProvider = new JsonRpcProvider(process.env.RPC_URL)

export const games = () => {
  return db.game.findMany()
}

export const game = async ({ id }) => {
  const game = await db.game.findOne({
    where: { id },
  })
  let ownerAddress
  let tokenId
  try {
    ;({ ownerAddress, tokenId } = await getNftDetails({
      providerOrSigner: walletlessProvider,
      id,
    }))
  } catch (e) {
    console.log(e)
  }
  return { ...game, ownerAddress, tokenId }
}

export const gamePage = async ({ page = 1 }) => {
  const offset = (page - 1) * GAMES_PER_PAGE
  const count = await db.game.count()
  return {
    games: db.game.findMany({
      take: GAMES_PER_PAGE,
      skip: offset,
      orderBy: { createdAt: 'desc' },
    }),
    count: db.game.count(),
  }
}

export const createGame = async ({ input: { externalUrl } }) => {
  let gameString
  if (externalUrl.includes('lichess.org')) {
    // https://lichess.org/api#section/Introduction
    if (externalUrl.includes('study'))
      throw Error(`"Study" games cannot be used, only real games.`)
    try {
      const gameId = externalUrl.split('lichess.org/')[1].split('/')[0]
      const res = await fetch(`${LI_CHESS_API}${gameId}${LI_CHESS_PARAMS}`)
      if (res.status === 404) throw new Error(`Game ${gameId} not found`)
      gameString = await res.text()
    } catch (e) {
      throw new Error(`Couldn't get game from Lichess.org. ${e}`)
    }
  } else if (externalUrl.includes('chess.com')) {
    // https://www.chess.com/news/view/published-data-api#pubapi-endpoint-games
    // https://github.com/andyruwruw/chess-web-api
    location = 'Chess.com'
    throw Error('Chess.com is not available yet!')
  } else {
    throw Error('URL is not valid')
  }
  const game = parseGameString({ gameString, externalUrl })
  const existingGame = await db.game.findOne({ where: { id: game.id } })
  if (existingGame) return existingGame
  return db.game.create({
    data: game,
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
    db.game.findOne({ where: { id: root.id } }).minter(),
}
