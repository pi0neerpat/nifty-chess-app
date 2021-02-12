import GameCard from './GameCard'

const game = {
  __typename: 'Game',
  id: '0xb0f6c8899a2fea606bcb0d2b4c23947671d96f80c4ea33798e3d085cf1e3d0f4',
  createdAt: '2021-02-11T20:43:39.391Z',
  updatedAt: '2021-02-11T20:43:39.391Z',
  playedAt: '1899-12-31T05:00:00.000Z',
  mintedAt: null,
  moves:
    'pgn1.Nf3 Nf6 2.c4 e6 3.g3 d5 4.Bg2 Be7 5.O-O O-O 6.d4 dxc4 7.Qc2 a6\n8.a4 Nc6 9.Qxc4 Qd5 10.Nbd2 Rd8 11.e3 Qh5 12.e4 Bd7 13.b3 b5\n14.Qc3 bxa4 15.bxa4 Bb4 16.Qc2 Rac8 17.Nc4 Be8 18.h3 Rxd4 19.g4 Qc5\n20.Nxd4 Nxd4 21.Qd3 Rd8 22.Bb2 e5 23.Rfc1 Qe7 24.Bxd4 Rxd4 25.Qg3 Qe6\n26.Qb3 a5 27.Qc2 c5 28.Ne3 Bc6 29.Rd1 g6 30.f3 c4 31.Qe2 Bc5 32.Kh1 c3\n33.Nc2 Rxa4 34.Qd3 Bd4 35.f4 Rxa1 36.Rxa1 Bb6 37.Rb1 Bc5 38.f5 Qd7\n39.Qxc3 Nxe4 40.Qxe5 Bd6 41.Qxa5 Bc7 42.Qb4 Qd3 0-1\n\n[Event "cm2"]\n[Site "Moscow"]\n[Date "1968.??.??"]\n[Round "07"]\n[White "Tal M"]\n[Black "Korchnoi V"]\n[Result "1/2-1/2"]\n',
  black: 'name',
  white: 'name',
  externalUrl: null,
}

export const generated = () => {
  return <GameCard game={game} />
}

export default { title: 'Components/Pagination' }
