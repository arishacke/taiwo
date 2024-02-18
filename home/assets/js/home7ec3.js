const PUBLIC_DATA_PATH =
  'https://manta-pacific-analytics-mainnet.vercel.app/api/publicData'

const handleModalClose = () => {
  const modal = document.getElementsByClassName('manta-fest-modal')[0]
  modal.classList.add('display-none')
}

const handleModalIsShowNext = (e) => {
  if (!e.checked) {
    localStorage.setItem('isNotShowModalNext', false)
  } else {
    localStorage.setItem('isNotShowModalNext', true)
  }
}

const formatNumber = (value, decimalPlaces = 2) => {
  if (!value) return '--'
  if (value < 1000) {
    return value.toFixed(decimalPlaces)
  } else if (value < 1000000) {
    return (value / 1000).toFixed(decimalPlaces) + 'K'
  } else if (value < 1000000000) {
    return (value / 1000000).toFixed(decimalPlaces) + 'M'
  } else {
    return (value / 1000000000).toFixed(decimalPlaces) + 'B'
  }
}

// TODO: This code can be remained for next event
// const handleShowModal = () => {
//   const modal = document.getElementsByClassName('manta-fest-modal')[0]
//   const isNotShowModalNext = localStorage.getItem('isNotShowModalNext')
//   if (isNotShowModalNext == 'true') {
//     return
//   } else {
//     modal.classList.remove('display-none')
//   }
// }

const handleGetDData = async () => {
  let pacificTvl
  let pacificTrans
  let atlanticTvl
  let atlanticTrans
  let calamariTvl
  let calamariTrans

  const fetchPacificPublicData = async () => {
    try {
      const explorerData = await fetch(PUBLIC_DATA_PATH, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const responseJson = await explorerData.json()
      pacificTvl = responseJson.result.tvl

      pacificTrans = responseJson.result.transactions
      const formatTvl = formatNumber(pacificTvl)
      const formatTrans = formatNumber(pacificTrans)

      const tvlElement = document.getElementsByClassName('pacific-tvl')
      const transElement = document.getElementsByClassName('pacific-trans')
      for (let i = 0; i < tvlElement.length; i++) {
        tvlElement[i].innerText = '$' + formatTvl + '+'
      }
      for (let i = 0; i < transElement.length; i++) {
        transElement[i].innerText = formatTrans + '+'
      }
    } catch (error) {}
  }
  const fetchAtlanticPublicData = async () => {
    try {
      const explorerData = await fetch(`${PUBLIC_DATA_PATH}?chain=atlantic`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const responseJson = await explorerData.json()
      atlanticTvl = responseJson.result.assetsTvl

      atlanticTrans = responseJson.result.transactions
      const formatTvl = formatNumber(atlanticTvl)
      const formatTrans = formatNumber(atlanticTrans)

      const tvlElement = document.getElementsByClassName('atlantic-tvl')
      const transElement = document.getElementsByClassName('atlantic-trans')
      for (let i = 0; i < tvlElement.length; i++) {
        tvlElement[i].innerText = '$' + formatTvl + '+'
      }
      for (let i = 0; i < transElement.length; i++) {
        transElement[i].innerText = formatTrans + '+'
      }
    } catch (error) {}
  }

  const handleGetCalamariTVL = async () => {
    try {
      const response = await fetch(
        'https://calamari.api.subscan.io/api/scan/token',
      )
      const resJson = await response.json()
      const kmaInfo = resJson.data.detail.KMA
      const validator_bonded = kmaInfo.validator_bonded
      const nominator_bonded = kmaInfo.nominator_bonded
      const price = kmaInfo.price
      const total_bonded = new BigNumber(validator_bonded)
        .plus(nominator_bonded)
        .div(1e12)
      calamariTvl = total_bonded.multipliedBy(price).toString()
      const formatTvl = formatNumber(calamariTvl)

      const tvlElement = document.getElementsByClassName('calamari-tvl')
      for (let i = 0; i < tvlElement.length; i++) {
        tvlElement[i].innerText = '$' + formatTvl + '+'
      }
    } catch (error) {}
  }

  const handleGetCalamariTrans = async () => {
    try {
      const response = await fetch(
        'https://calamari.api.subscan.io/api/v2/scan/extrinsics',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ row: 1, signed: 'signed' }),
        },
      )
      const resJson = await response.json()
      calamariTrans = resJson.data.count
      const formatCount = formatNumber(calamariTrans)
      const transElement = document.getElementsByClassName('calamari-trans')
      for (let i = 0; i < transElement.length; i++) {
        transElement[i].innerText = formatCount + '+'
      }
    } catch (error) {}
  }

  const handleUpdateTotal = () => {
    const totalTvl = new BigNumber(pacificTvl)
      .plus(calamariTvl)
      .plus(atlanticTvl)
      .toString()
    const totalTrans = new BigNumber(pacificTrans)
      .plus(calamariTrans)
      .plus(atlanticTrans)
      .toString()
    const mantaTvl = new BigNumber(pacificTvl).plus(atlanticTvl).toString()

    const formatMantaTvl = formatNumber(mantaTvl)
    const formatTotalTvl = formatNumber(totalTvl)
    const formatTotalTrans = formatNumber(totalTrans)
    const mantaTvlElement = document.getElementsByClassName('manta-tvl')

    const tvlElement = document.getElementsByClassName('tvl-total')[0]
    const transElement = document.getElementsByClassName('trans-total')[0]

    for (let i = 0; i < mantaTvlElement.length; i++) {
      mantaTvlElement[i].innerText =
        pacificTvl && atlanticTvl ? '$' + formatMantaTvl + '+' : '--'
    }

    tvlElement.innerText =
      pacificTvl && calamariTvl && atlanticTvl
        ? '$' + formatTotalTvl + '+'
        : '--'
    transElement.innerText =
      pacificTrans && calamariTrans && atlanticTrans
        ? formatTotalTrans + '+'
        : '--'
  }

  await fetchPacificPublicData()
  await fetchAtlanticPublicData()
  await handleGetCalamariTVL()
  await handleGetCalamariTrans()
  handleUpdateTotal()
}

handleGetDData()
