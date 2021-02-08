/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

const moves = `1.c4 g6 2.d4 Bg7 3.Nc3 d6 4.e4 Nf6 5.f3 e5 6.dxe5 dxe5 7.Qxd8+ Kxd8 8.Bg5 c6
9.Nge2 Nd7 10.Rd1 Kc7 11.Nc1 Nc5 12.Be3 Nfd7 13.b4 Ne6 14.Nb3 Bf8 15.c5 a5
16.Nxa5 Nexc5 17.a3 Ne6 18.Kf2 Be7 19.Rc1 Bg5 20.Bxg5 Nxg5 21.Bc4 Nb6 22.h4 Ne6
23.Nb5+ Kb8 24.Nd6 Nxc4 25.Naxc4 f6 26.Rc3 Ra6 27.Rhc1 Rd8 28.Nxc8 Kxc8 29.a4 Kd7
30.Rd1+ Ke7 31.Rxd8 Kxd8 32.a5 Ke7 33.Nb6 c5 34.Nd5+ Kf7 35.bxc5 Rc6 36.Ke3 f5
37.g3 Nxc5 38.Nb4 f4+ 39.gxf4 exf4+ 40.Ke2 Rc7 41.Nd3 Ne6 42.Rxc7+ Nxc7 43.Nxf4 Kf6
44.Nd3 Ne6 45.Ke3 Ke7 46.Nf4 Nc5 47.Nd5+ Kf7 48.Nb6 Ke6 49.Nc4 h6 50.f4 Nb3
51.h5 gxh5 52.f5+ Ke7 53.e5 h4 54.Kf4 h5 55.f6+ Ke6 56.Nd6 Nxa5 57.f7 Ke7
58.e6 Nc6 59.Nf5+ Kf8 60.Nxh4 Ne7 61.Ke5 Kg7 62.Kd6 Kf8 63.Kc5 Kg7 64.Kc4 Kf8
65.Kd4 Kg7 66.Kc5 Kf8 67.Kd6 b6 68.Ke5 Kg7 69.Kd4 Nc6+ 70.Kd5 Ne7+ 71.Ke5 b5
72.Kd6 Kf8 73.Kc5 Kg7 74.Kxb5 Nd5 75.Kc6`

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it). For example:
  //
  //   const existing = await db.user.findMany({ where: { email: 'admin@email.com' }})
  //   if (!existing.length) {
  //     await db.user.create({ data: { name: 'Admin', email: 'admin@email.com' }})
  //   }

  console.info('No data to seed. See api/db/seeds.js for info.')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
