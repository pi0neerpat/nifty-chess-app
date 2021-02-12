import { parseUnits, formatUnits } from '@ethersproject/units'
import { Contract } from '@ethersproject/contracts'

import CONTRACTS from './contracts'

import { getErrorResponse } from './general'
import { unlockBrowser } from './connect'

export const mint = async ({ id }) => {
  try {
    const { walletProvider, walletAddress } = await unlockBrowser({
      debug: true,
    })
    const niftyChess = new Contract(
      CONTRACTS.niftyChess.xdai,
      CONTRACTS.niftyChess.abi,
      walletProvider.getSigner()
    )
    const tx = await niftyChess.mintBoard(walletAddress, '', id, {
      value: parseUnits('3', 18).toString(),
    })
    return { tx }
  } catch (err) {
    console.log(err)
    return {
      ...getErrorResponse(err, 'mint'),
    }
  }
}
