import { games, game, createGame, updateGame, deleteGame } from './games'

describe('games', () => {
  scenario('creates a game from chess.com', async (scenario) => {
    const result = await createGame({
      input: {
        externalUrl: 'https://lichess.org/3RVEhTDV/black',
      },
    })
  })
  // scenario('creates a game from lichess', async (scenario) => {
  //   const result = await createGame({
  //     input: {
  //       externalUrl: 'https://lichess.org/3RVEhTDV/black',
  //     },
  //   })
  // })
})
