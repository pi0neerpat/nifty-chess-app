import { games, game, createGame, updateGame, deleteGame } from './games'

describe('games', () => {
  scenario('returns all games', async (scenario) => {
    const result = await games()

    expect(result.length).toEqual(Object.keys(scenario.game).length)
  })

  scenario('returns a single game', async (scenario) => {
    const result = await game({ id: scenario.game.one.id })

    expect(result).toEqual(scenario.game.one)
  })

  scenario('creates a game', async (scenario) => {
    const result = await createGame({
      input: {
        updatedAt: '2021-02-07T23:29:03Z',
        playedAt: '2021-02-07T23:29:03Z',
        mintedAt: '2021-02-07T23:29:03Z',
        moves: 'String',
        movesHash: 'String',
        black: 'String',
        white: 'String',
      },
    })

    expect(result.updatedAt).toEqual('2021-02-07T23:29:03Z')
    expect(result.playedAt).toEqual('2021-02-07T23:29:03Z')
    expect(result.mintedAt).toEqual('2021-02-07T23:29:03Z')
    expect(result.moves).toEqual('String')
    expect(result.movesHash).toEqual('String')
    expect(result.black).toEqual('String')
    expect(result.white).toEqual('String')
  })

  scenario('updates a game', async (scenario) => {
    const original = await game({ id: scenario.game.one.id })
    const result = await updateGame({
      id: original.id,
      input: { updatedAt: '2021-02-08T23:29:03Z' },
    })

    expect(result.updatedAt).toEqual('2021-02-08T23:29:03Z')
  })

  scenario('deletes a game', async (scenario) => {
    const original = await deleteGame({ id: scenario.game.one.id })
    const result = await game({ id: original.id })

    expect(result).toEqual(null)
  })
})
