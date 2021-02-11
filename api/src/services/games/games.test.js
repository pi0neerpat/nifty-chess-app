import { games, game, createGame, updateGame, deleteGame } from './games'

describe('games', () => {
  // scenario('creates a game from chess.com', async (scenario) => {
  //   const result = await createGame({
  //     input: {
  //       externalUrl: 'https://www.chess.com/live/game/6508402266',
  //     },
  //   })
  // })
  scenario('creates a game from lichess', async (scenario) => {
    const result = await createGame({
      input: {
        externalUrl: 'https://lichess.org/3RVEhTDV/black',
      },
    })
  })
})
