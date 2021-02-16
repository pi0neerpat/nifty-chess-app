/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

const { parseGameString, parseDate, countMoves } = require('../src/utils/game')

const { id: sha3 } = require('@ethersproject/hash')

const fs = require('fs-extra')
const path = require('path')

// Change campaign here
const recentDirectoryPath = path.join(__dirname, './grandmasterGamesJSON')
const grandmasterDirectoryPath = path.join(__dirname, '../../../chessGames')
const celebrityDirectoryPath = path.join(__dirname, './celebrityGames')

dotenv.config()
const db = new PrismaClient()

const rawGamesOld = [
  {
    moves:
      '1.Nf3 f5 2.c4 Nf6 3.g3 g6 4.d4 Bg7 5.Bg2 d6 6.O-O O-O 7.d5 c5 8.Nc3 Na6 9.Qb3 Nc7 10.Bd2 b6 11.Qc2 Bb7 12.Rad1 e6 13.dxe6 Nxe6 14.Ng5 Nd4 15.Qd3 Bxg2 16.Kxg2 Ng4 17.b3 Ne5 18.Qb1 h6 19.Nh3 Qd7 20.f3 b5 21.cxb5 Nxb5 22.Nf4 a6 23.h4 Rae8 24.Nxb5 axb5 25.Qc2 b4 26.Bc1 Ra8 27.h5 g5 28.Ng6 Nxg6 29.hxg6 Qe6 30.f4 g4 31.Rd3 Rfe8 32.Kf2 Qxg6 33.e3 Qe6 34.Rfd1 Qe4 35.Qe2 Red8 36.Rxd6 Rxd6 37.Rxd6 Qh1 38.Qc4+ Kh8 39.Qd5 Rxa2+ 40.Bd2 Qxd5 41.Rxd5 c4 42.bxc4 b3 43.Rd8+ Kh7 44.Rd7 b2 45.Rb7 Ra7 46.Rxa7 b1=Q 47.Ke2 Kg6 48.Ra6+ Bf6 49.Rd6 Qe4 50.c5 Qf3+ 51.Kd3 Qf1+ 52.Kc2 Qc4+ 53.Kd1 Qxc5 54.Rd3 Qc6 55.Be1 Be7 56.Rb3 Qd5+ 57.Kc2 Qc4+ 58.Bc3 Bc5 59.Rb8 Bxe3',
    event: '7th WCCC',
    playedAt: '1992.1.??',
    location: 'Madrid',
    white: 'Woodpusher',
    black: 'Fritz 2',
    winner: 'black',
  },
]

const seed = async (jsonGames) => {
  await Promise.all(
    jsonGames.map(async (game, index) => {
      const id = sha3(game.moves)

      // CHANGE THIS
      if (index > 100) return

      const exists = await db.game.findOne({ where: { id } })
      if (!exists) {
        try {
          await db.game.create({
            data: {
              id,
              ...game,
              playedAt: parseDate(game.playedAt),
              moveCount: countMoves(game.moves),
            },
          })
          console.log(id)
          if (index === jsonGames.length - 1) {
            console.log('Last file: ', index)
          } else if (index % 100 === 0) console.log('Games seeded: ', index)
        } catch (e) {
          console.log('error making game ')
          console.log(e)
        }
      } else {
        // console.info('No data to seed. See api/db/seeds.js for info.')
      }
    })
  )
}

async function main() {
  let jsonGames = []
  fs.readdir(recentDirectoryPath, async (err, files) => {
    if (err) return console.log(err)
    console.log('Loading grand master game files...')
    await files.forEach((fileName, index) => {
      if (index === files.length - 1) {
        console.log('Last file: ', index + 1)
      } else if (index % 1000 === 0) console.log('Games loaded: ', index)
      const jsonGame = require(path.join(grandmasterDirectoryPath, fileName))
      jsonGames.push(jsonGame)
    })
    console.log(jsonGames.length)
    console.log('Example game:')
    console.log('Files loaded successfully! Time to seed...')
    await seed(jsonGames)
    console.log('Seed grandmaster games is complete!')
  })
  // fs.readdir(celebrityDirectoryPath, async (err, files) => {
  //   if (err) return console.log(err)
  //   console.log('Loading celebrity game files...')
  //   await files.forEach((fileName, index) => {
  //     console.log('Loading games for ', fileName.split('.js')[0])
  //     const gameStringList = require(path.join(
  //       celebrityDirectoryPath,
  //       fileName
  //     ))
  //     gameStringList.map((gameString, index) => {
  //       jsonGames.push(parseGameString({ gameString }))
  //     })
  //   })
  //   console.log('Files loaded. Time to seed...')
  //   await seed(jsonGames)
  //   console.log('Finished')
  // })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
