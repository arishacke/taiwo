const mantaPacificConfig = {
  chainId: '0xA9',
  chainName: 'Manta Pacific Mainnet',
  rpcUrls: ['https://pacific-rpc.manta.network/http'],
}

const handleAddNetwork = async (chainInfo = mantaPacificConfig) => {
  const ethereum = window?.ethereum
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chainInfo.chainId }],
    })
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: chainInfo.chainId,
              chainName: chainInfo.chainName,
              rpcUrls: chainInfo.rpcUrls,
            },
          ],
        })
      } catch (addError) {
        console.log('addError', addError)
        // handle "add" error
      }
    }
    // handle other "switch" errors
  }
}
