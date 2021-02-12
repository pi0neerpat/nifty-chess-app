import toast from 'react-hot-toast'

import { getErrorResponse } from './general'
import { unlockBrowser } from './connect'

const SuperfluidSDK = require('@superfluid-finance/js-sdk')
const { Web3Provider } = require('@ethersproject/providers')

export const donateFlow = async () => {
  try {
    toast('Connecting to your wallet...')
    const { walletProvider, walletAddress, network } = await unlockBrowser({
      debug: true,
    })
    if (network.name !== 'goerli')
      throw Error('Please switch to Goerli network')
    const sf = new SuperfluidSDK.Framework({
      ethers: walletProvider,
    })
    await sf.initialize()
    const donor = sf.user({
      address: walletAddress,
      token: '0xf2d68898557ccb2cf4c10c3ef2b034b2a69dad00',
    })
    await donor.flow({
      recipient: '0x9492510BbCB93B6992d8b7Bb67888558E12DCac4',
      flowRate: 385802469135802,
    })
    toast.success('Transaction complete. Thanks for donating!')
  } catch (err) {
    console.log(err)
    return {
      ...getErrorResponse(err, 'donateFlow'),
    }
  }
}
