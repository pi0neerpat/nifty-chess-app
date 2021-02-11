<h1 align="center">Welcome to nifty-chess 👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <!-- <a href="https://twitter.com/Superfluid\_HQ" target="_blank">
    <img alt="Twitter: Superfluid_HQ" src="https://img.shields.io/twitter/follow/Superfluid_HQ.svg?style=social" />
  </a> -->
</p>

> A playful NFT game for collecting chess games. Made with <3 @ ETH Denver 2021

<!-- ### 🏠 [Homepage](TODO) -->

## Tech stack

- `@redwoodjs` for the React and Prisma database tooling
- `@oneclickdapp/ethereum-auth` for wallet authentication [docs](https://github.com/oneclickdapp/ethereum-auth/blob/master/README.md)
- `node-pgn2gif` library adapted from `pgn2gif`. Every pgn is broken into JSON, and there is one pgn for each game, rather than for each tournament. We also hash the pgn to generate the NFT seed (which is used to generate the color) https://github.com/jschiarizzi/node-pgn2gif

## Install

```sh
yarn install
```

copy `.env.template` to `.env` and add the required variables

## Usage

```sh
yarn rw dev
```

## New to Redwood?

- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

## Author

👤 **Patrick Gallagher**

- Website: https://patrickgallagher.dev

  - Twitter: [@pi0neerpat](https://twitter.com/pi0neerpat)
  - GitHub: [@pi0neerpat](https://github.com/pi0neerpat)

  👤 **Joseph Schiarizzi**

- Website: https://ethhole.com
  - Twitter: [@cupOJoseph](https://twitter.com/cupOJoseph)
  - GitHub: [@jschiarizzi](https://github.com/jschiarizzi)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
