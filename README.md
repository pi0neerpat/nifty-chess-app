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

<img src="game10.gif"/>

<!-- ### 🏠 [Homepage](TODO) -->

## Tech stack

- `@redwoodjs` for the React and Prisma database tooling
- `@oneclickdapp/ethereum-auth` for wallet authentication [docs](https://github.com/oneclickdapp/ethereum-auth/blob/master/README.md)
- `node-pgn2gif` library adapted from `pgn2gif`. Every pgn is broken into JSON, and there is one pgn for each game, rather than for each tournament. We also hash the pgn to generate the NFT seed (which is used to generate the color) https://github.com/jschiarizzi/node_pgn2gif

## Contracts

### xDAI

NiftyChess Contract (proxy): 0xAe7ca55Ce4511C848ac4F9C0F26abD9ecaaee2c6 [Blockscout explorer](https://blockscout.com/poa/xdai/address/0xAe7ca55Ce4511C848ac4F9C0F26abD9ecaaee2c6/transactions)

Current Logic contract: 0x51fD8E034A8aE34C499F9EE869886f303FadF228

Bridge Mediator: 0x9d68A3490E0b0CBD9265A21b5bD307f6Ea7e769e [Blockscout explorer](https://blockscout.com/poa/xdai/address/0x9d68A3490E0b0CBD9265A21b5bD307f6Ea7e769e/transactions)

### Mainnet

These contracts will be deployed soon.

### Code + Developer stuff

Our smart contracts are adapted from the [Nifty Ink contracts](https://github.com/austintgriffith/scaffold-eth/blob/nifty-ink-dev/packages/buidler/contracts/NiftyMain.sol). See the contract source code here: http://remix.ethereum.org/?gist=b44c2c66212f701dc1ddab277cf7e8e7&call=fileManager//open//browser/niftyChess.sol. And use this ABI to interact with the contract: https://gist.github.com/jschiarizzi/0f12f4f7bc02bbfe3373f30d470e38a6

The UI was built with RedwoodJS. See `notes.md` for a complete walkthrough of how it was made.

## Install

```sh
yarn install
```

copy `.env.template` to `.env` and add the required variables

## Usage

```sh
yarn rw dev
```

### Ngrok it

```bash
# In VM
yarn rw dev --fwd="--host=0.0.0.0"

# on host machine
./ngrok http 8910
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
