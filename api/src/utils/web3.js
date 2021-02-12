import { Contract } from '@ethersproject/contracts'

const isMinted = async (id) => {
  const { onwer } = await niftyChess.getOwnerByHash(id)
}
