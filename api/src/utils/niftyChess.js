import { parseUnits, formatUnits } from '@ethersproject/units'
import { Contract } from '@ethersproject/contracts'

import CONTRACTS from './contracts'

const getContract = ({ providerOrSigner }) => {
  return new Contract(
    CONTRACTS.niftyChess.xdai,
    CONTRACTS.niftyChess.abi,
    providerOrSigner
  )
}

export const getNftDetails = async ({ id, providerOrSigner }) => {
  const niftyChess = getContract({ providerOrSigner })
  const ownerAddress = await niftyChess.getOwnerByHash(id)
  const tokenId = await niftyChess.tokenHashLookup(id)
  return { ownerAddress, tokenId }
}
