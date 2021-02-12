import { parseUnits, formatUnits } from '@ethersproject/units'
import { Contract } from '@ethersproject/contracts'
import toast from 'react-hot-toast'

import CONTRACTS from './contracts'

import { getErrorResponse } from './general'
import { unlockBrowser } from './connect'

export const mint = async ({ id }) => {
  try {
    toast('Connecting to your wallet...')
    const { walletProvider, walletAddress, network } = await unlockBrowser({
      debug: true,
    })
    if (network.name !== 'xDAI') throw Error('Please switch to xDAI network')
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
