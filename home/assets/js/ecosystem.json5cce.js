const categoryMap = {
  Mainnet: {
    class: 'card-dot-Mainnet',
    text: 'Live on Mainnet',
  },
  ComingSoon: {
    class: 'card-dot-ComingSoon',
    text: 'Coming Soon',
  },
  Atlantic: {
    class: 'card-dot-Atlantic',
    text: 'Live on Atlantic',
  },
  Pacific: {
    class: 'card-dot-Pacific',
    text: 'Live on Pacific',
  },
}

let arr = [
  {
    link: 'https://www.zonff.partners/aceleap/?lang=en',
    tag: 'ecosystem-tag-incubator',
    img: 'assets/img/ecosystem/logos/aceleap-logo.png',
    title: 'Aceleap',
    description:
      'Aceleap is a Web3 accelerator led by Zonff Partners for mandarin-speaking Web3 entrepreneurs all over the world, gathering top Web3 entrepreneurs and investors, developers, academics, etc.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.alchemypay.org/',
    tag: 'ecosystem-tag-defi',
    img: 'assets/img/ecosystem/logos/alchemypay-logo.jpg',
    title: 'Alchemy Pay',
    description:
      'Alchemy Pay (ACH) is a payment solutions provider that seamlessly connects fiat and crypto economies for global consumers, merchants, developers, and institutions.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://alliance.xyz/',
    tag: 'ecosystem-tag-incubator',
    img: 'assets/img/ecosystem/logos/alliance-dao-logo.png',
    title: 'Alliance DAO',
    description:
      'Alliance is the leading Web3 accelerator and founder community.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://app.aperture.finance/',
    tag: 'ecosystem-tag-defi',
    img: 'assets/img/ecosystem/logos/Aperture.png',
    title: 'Aperture',
    description:
      'Pioneering LP management w/ intent-based architectures on @uniswap V3.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/Aperture.png',
  },

  {
    link: 'https://omni.network',
    tag: 'ecosystem-tag-partner',
    img: 'assets/img/ecosystem/logos/omni-network-logo.png',
    title: 'Omni Network',
    description:
      'Omni is a layer 1 blockchain built to connect all rollups. Using Omni, developers can build global applications that are available across all rollups.',
    category: ['Pacific'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://opbnb.bnbchain.org/en',
    tag: 'ecosystem-tag-partner',
    img: 'assets/img/ecosystem/logos/bnb-chain-logo.png',
    title: 'BNB chain',
    description:
      'BNB Chain is a global, decentralized network with developers, validators, users, HODLers and enthusiasts.',
    category: ['Pacific'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.asmatch.app/',
    tag: 'ecosystem-tag-social',
    img: 'assets/img/ecosystem/logos/AsMatch.png',
    title: 'AsMatch',
    description:
      'AsMatch is a Web3 Socialfi matching app that brings a whole new level of security, authenticity, and fun to making friends.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/AsMatch.png',
  },
  {
    link: 'https://aspecta.id/',
    tag: 'ecosystem-tag-identity',
    img: 'assets/img/ecosystem/logos/aspecta-logo.jpeg',
    title: 'Aspecta',
    description:
      'Transform Web2 & Web3 footprints into AI-generated identity for BUILDERS and BEYOND',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.0xbeacon.com/',
    tag: 'ecosystem-tag-incubator',
    img: 'assets/img/ecosystem/logos/beacon-logo.png',
    title: 'Beacon',
    description:
      'Beacon is an accelerator built by web3 founders for web3 founders.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://xcelerator.berkeley.edu/',
    tag: 'ecosystem-tag-incubator',
    img: 'assets/img/ecosystem/logos/berkeley-x-logo.png',
    title: 'Berkeley Xcelerator',
    description:
      'Berkeley Blockchain Xcelerator is the newest lab at the Center for Entrepreneurship in the School of Engineering.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://bifrost.finance/',
    tag: 'ecosystem-tag-parachain',
    img: 'assets/img/ecosystem/logos/bifrost-logo.png',
    title: 'Bifrost',
    description: 'Bifrost is a cross-chain liquidity for Staking',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://academy.binance.com/',
    tag: 'ecosystem-tag-media',
    img: 'assets/img/ecosystem/logos/binance-academy-logo.png',
    title: 'Binance Academy',
    description:
      'Binance Academy is on a mission to educate the masses on the transformative potential of cryptocurrency and blockchain technology.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://labs.binance.com/',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/binance-labs-logo.png',
    title: 'Binance Labs',
    description:
      'Binance Labs identifies, invests, and empowers viable blockchain entrepreneurs, startups, and communities, providing financing to industry projects that help grow the wider blockchain ecosystem.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.7xvc.com/',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/seven-x-logo.jpeg',
    title: 'SevenX Ventures',
    description:
      'SevenX Ventures is a Research-driven Crypto Venture Capital founded in 2020.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.qimingvc.com/',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/qiming-logo.jpeg',
    title: 'Qiming Venture',
    description:
      'Qiming Venture Partners is a top-tier VC firm with outstanding reputation. ',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.bingo0x.com/',
    tag: 'ecosystem-tag-gaming',
    img: 'assets/img/ecosystem/logos/Bingo0x.png',
    title: 'Bingo0x',
    description:
      'A casual competition platform where players can compete with each other and win stablecoins and other cryptocurrencies.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://carv.io/home',
    tag: 'ecosystem-tag-identity',
    img: 'assets/img/ecosystem/logos/carv-logo.png',
    title: 'CARV',
    description:
      'Building ID infrastructure focused on gaming, enabling players with achievement display, semantic social, and access to gaming premiums.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://caldera.xyz/',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/Caldera.png',
    title: 'Caldera',
    description:
      'The modular blockchain platform: deploy a rollup in one click.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://celer.network/',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/CelerNetwork.png',
    title: 'Celer Network',
    description:
      'Building the best inter-blockchain and cross-layer communication platform.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://celestia.org/',
    tag: 'ecosystem-tag-infrastructure',
    img: 'assets/img/ecosystem/logos/celestia-logo.png',
    title: 'Celestia',
    description:
      'Celestia is a modular consensus and data network, built to enable anyone to easily deploy their own blockchain with minimal overhead.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://clover.finance/',
    tag: 'ecosystem-tag-wallet',
    img: 'assets/img/ecosystem/logos/clover-logo.png',
    title: 'Clover',
    description:
      'A wallet created for the next 100M crypto users with user privacy as a cornerstone. Provides a full range of multi-chain & cross-chain solutions.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'http://cmsholdings.io/',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/cms-logo.png',
    title: 'CMS Holdings',
    description:
      'CMS is a principal investment firm focused on making investments across the cryptoasset ecosystem. We look to deploy capital in liquid and illiquid crypto tokens, as well as, equity stakes in selective companies.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://coinfund.io/',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/coinfund-logo.png',
    title: 'CoinFund',
    description:
      'CoinFund is a cryptonative investment firm and registered investment advisor. The team specializes in portfolio management, token design, decentralized networks, research, trading, market structure, engineering, brand strategy, law, and regulation.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://cointelegraph.com/',
    tag: 'ecosystem-tag-media',
    img: 'assets/img/ecosystem/logos/cointelegraph-logo.png',
    title: 'Cointelegraph',
    description:
      'Cointelegraph is the leading independent digital media resource covering a wide range of news on blockchain technology, crypto assets, and emerging fintech trends.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://continue.capital/',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/continuecapital-logo.png',
    title: 'Continue Capital',
    description:
      'We invest in crypto startups that will bring the next 1 billion users to the web 3.0 economy.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.cradles.io/',
    tag: 'ecosystem-tag-gaming,ecosystem-tag-partner',
    img: 'assets/img/ecosystem/logos/cradles-logo.jpeg',
    title: 'Cradles',
    description:
      'Cradles is the first time-lapsing metaverse game – a living, breathing virtual world that continues to evolve and progress, simulating the laws of time.',
    category: ['Atlantic'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.credprotocol.com/',
    tag: 'ecosystem-tag-identity',
    img: 'assets/img/ecosystem/logos/cred-logo.jpg',
    title: 'Cred Protocol',
    description:
      'Cred Protocol is a decentralized credit score that quantifies lending risk at scale, bringing trust and transparency to web3',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://cyberconnect.me/',
    tag: 'ecosystem-tag-social,ecosystem-tag-partner',
    img: 'assets/img/ecosystem/logos/cyberconnect-logo.jpg',
    title: 'CyberConnect',
    description:
      "CyberConnect is web3's earliest and biggest decentralized social network.",
    category: ['Atlantic'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.cysic.com/',
    tag: 'ecosystem-tag-research',
    img: 'assets/img/ecosystem/logos/cysic-logo.png',
    title: 'Cysic',
    description:
      'Cysic, incorporated in August 2022, focuses on hardware acceleration for zero-knowledge proof (ZKP).',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://dappback.com/',
    tag: 'ecosystem-tag-social',
    img: 'assets/img/ecosystem/logos/dappback-logo.jpeg',
    title: 'Dappback',
    description:
      'Rewards for Discovering New Brands. Get cash, crypto, and NFTs with perks for trying all types of products!',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.div.vc/',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/divergence-logo.png',
    title: 'Divergence',
    description:
      'Divergence Ventures is a the crypto operator fund founded in 2020 by George Lambeth.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://dmail.ai/',
    tag: 'ecosystem-tag-social,ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/Dmail.png',
    title: 'Dmail',
    description:
      'Dmail Network is building an AI-powered decentralized infrastructure which provides seamless, anonymous messaging and notification services across multiple chain',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://equilibrium.io/',
    tag: 'ecosystem-tag-parachain',
    img: 'assets/img/ecosystem/logos/equilibrium-logo.png',
    title: 'Equilibrium',
    description: 'All-in-one DeFi hub of Polkadot',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.firstbatch.xyz/',
    tag: 'ecosystem-tag-identity',
    img: 'assets/img/ecosystem/logos/firstbatch-logo.jpeg',
    title: 'Firstbatch',
    description:
      'Enabling AI to personalize and democratically store its Long-Term Memory.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://rbozman.medium.com/introducing-free-company-85368545ca1d',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/freecompany-logo.png',
    title: 'Free Company',
    description:
      'Free Company is a syndicate of experienced crypto operators deploying capital into early stage companies.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://gafin.io/',
    tag: 'ecosystem-tag-gaming',
    img: 'assets/img/ecosystem/logos/gafin-logo.jpeg',
    title: 'Gafin',
    description:
      'Gafin is a platform that provides a suite of solutions covering the entire lifecycle of a product for Metaverse and Gamefi',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://galxe.com/',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/Galxe.png',
    title: 'Galxe',
    description: 'SocialFi platform to build and grow web3 community',
    category: ['Mainnet'],
    isHighLight: true,
    isNative: false,
    highLightImg: 'assets/img/ecosystem/highlights/Galxe.png',
  },
  {
    tag: 'ecosystem-tag-gaming,ecosystem-tag-partner',
    link: 'https://getaverses.com/',
    img: 'assets/img/ecosystem/logos/getaverse-logo.jpg',
    title: 'Getaverse',
    description:
      'Getaverse is a metaverse ecological service platform based on the Web3 digital authentication engine protocol.',
    category: ['Atlantic'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://globalcoinresearch.com/',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/gcr-logo.png',
    title: 'Global Coin Ventures',
    description:
      'Global Coin Research (GCR) is a Community of Investors & Researchers in Web3.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://gosleep.pro/',
    tag: 'ecosystem-tag-social',
    img: 'assets/img/ecosystem/logos/gosleep-logo.jpeg',
    title: 'GoSleep',
    description:
      'Your future depends on your dreams. So GoSleep. Sleep, Earn, Repeat.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://halborn.com/',
    tag: 'ecosystem-tag-auditor',
    img: 'assets/img/ecosystem/logos/halborn-logo.png',
    title: 'Halborn',
    description:
      'Elite Blockchain Security Solutions trusted by Solona, Avalanche, and more.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://hypersphere.ventures/',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/hypersphere-logo.png',
    title: 'Hypersphere',
    description:
      'Hypersphere is an investment group leveraging on-chain treasuries, decentralized organizations, and governance to increase the utility of the blockchain networks in which we invest.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://instap.co/',
    tag: 'ecosystem-tag-social',
    img: 'assets/img/ecosystem/logos/instap-logo.png',
    title: 'Instap',
    description:
      'Make friends, Earn Crypto. The fastest and easiest way to connect. Make Cryptos and NFTs back whenever you meet someone new.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://jumpcrypto.com/',
    tag: 'ecosystem-tag-research',
    img: 'assets/img/ecosystem/logos/jump-crypto-logo.png',
    title: 'Jump Crypto',
    description:
      'Jump Crypto, a division of the Jump Trading Group, is a global leader in web3 infrastructure development and investment.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    tag: 'ecosystem-tag-identity,ecosystem-tag-partner',
    link: 'https://www.karatdao.com/',
    img: 'assets/img/ecosystem/logos/karatdao-logo.png',
    title: 'KaratDAO',
    description:
      'KaratDAO is leveraging on its proprietary on-chain indexing to build the most precise user behavior tagging and conversion tools on the market.',
    category: ['Atlantic'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://ae.linkedin.com/in/kevin-hu-46a03343',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/kevinhu-logo.png',
    title: 'Kevin Hu (BH Digital)',
    description: 'Angel investor at BH Digital. Formerly at Dragonfly Capital.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://t.xyz/',
    tag: 'ecosystem-tag-social',
    img: 'assets/img/ecosystem/logos/letsmeme-logo.png',
    title: "Let's Meme",
    description: "Let's MeMe is a degen web3 community management tool.",
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },

  {
    link: 'https://www.longhash.vc/',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/long-hash-logo.png',
    title: 'Longhash Ventures',
    description:
      'LongHash Ventures specializes in bootstrapping Web3 ecosystems.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.longhash.vc/accelerator/',
    tag: 'ecosystem-tag-incubator',
    img: 'assets/img/ecosystem/logos/longhash-logo.png',
    title: 'LongHashX',
    description:
      'LongHash Ventures specializes in bootstrapping Web3 ecosystems.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://twitter.com/mapleleafcap',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/mapleleaf-logo.png',
    title: 'Maple Leaf Capital',
    description: 'Founder of Folius Ventures.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.metamerge.xyz/',
    tag: 'ecosystem-tag-gaming',
    img: 'assets/img/ecosystem/logos/metamerge-logo.jpg',
    title: 'Meta Merge',
    description: 'A universe combining AIGC, NFTs, DeFi and Gaming.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://moonbeam.network/',
    tag: 'ecosystem-tag-parachain',
    img: 'assets/img/ecosystem/logos/moonbeam-logo.png',
    title: 'Moonbeam',
    description:
      'Moonbeam, an Ethereum-compatible smart contract parachain on Polkadot.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.moonrockcapital.io/',
    tag: 'ecosystem-tag-incubator',
    img: 'assets/img/ecosystem/logos/moonrock-logo.png',
    title: 'Moonrock Capital',
    description:
      'Moonrock Capital is a crypto native advisory and venture capital firm incubating and accelerating blockchain and web3 startups.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://moonshotcommons.com/',
    tag: 'ecosystem-tag-incubator',
    img: 'assets/img/ecosystem/logos/moonshot-logo.png',
    title: 'Moonshot Commons',
    description:
      'Where top Gen-Z engineers learn, build, and scale from 0 to ∞.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.virtual.tech/',
    tag: 'ecosystem-tag-infrastructure',
    img: 'assets/img/ecosystem/logos/ontropy-logo.png',
    title: 'Virtual Labs',
    description:
      '"Virtual Rollups: Instant, Seamless Transactions on Any Chain. Welcome to the future of web3 data transactions and the end of oracles and bridges! Virtual Labs allows users to validate their own data through an off-chain consensus client called Proof of Result. Proof of Result will decentralize information in the same way that Proof of Stake decentralized financial transactions."',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://openzl.org/',
    tag: 'ecosystem-tag-research',
    img: 'assets/img/ecosystem/logos/openzl-logo.png',
    title: 'OpenZL',
    description:
      'OpenZL is an open-source library for development of secure, high-performance, zero-knowledge applications.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.optimism.io/',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-partner',
    img: 'assets/img/ecosystem/logos/optimism-logo.jpg',
    title: 'Optimism',
    description:
      'OP Mainnet is a Layer 2 Optimistic Rollup network designed to utilize the strong security guarantees of Ethereum while reducing its cost and latency.',
    category: ['Atlantic'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.azuki.com/',
    tag: 'ecosystem-tag-partner',
    img: 'assets/img/ecosystem/logos/azuki-logo.jpeg',
    title: 'Azuki',
    description: 'A brand for the metaverse, built by the community.',
    category: ['Atlantic'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://twitter.com/0xMaki',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/0xmaki-logo.png',
    title: '0xMaki',
    description:
      'あなたの繁栄に捧げる戦士 @LayerZero_labs @Aurafinance @dcv_capital | Contemplating from time to time ⌐◨-◨',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.parafi.capital/',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/parafi-capital-logo.png',
    title: 'ParaFi',
    description:
      'ParaFi is a leading crypto-native investment and technology firm founded in 2018, focused on token, venture, and quantitative strategies.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://twitter.com/peterhaymond',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/peter-logo.png',
    title: 'Peter Haymond',
    description: 'Partnerships @Offchainlabs. Scaling Ethereum with @Arbitrum.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://phala.network/',
    tag: 'ecosystem-tag-parachain',
    img: 'assets/img/ecosystem/logos/phala-logo.png',
    title: 'Phala',
    description:
      'The Phala Network is a decentralized cloud computing protocol that aims to rival traditional cloud computing services such as Amazon AWS or Google Cloud.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://polkadex.trade/',
    tag: 'ecosystem-tag-parachain',
    img: 'assets/img/ecosystem/logos/polkadex-logo.png',
    title: 'Polkadex',
    description:
      'Polkadex is a fully non-custodial peer-to-peer orderbook-based cryptocurrency exchange for the DeFi ecosystem built on Substrate.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://polkadot.js.org/',
    tag: 'ecosystem-tag-wallet',
    img: 'assets/img/ecosystem/logos/polkadot-logo.png',
    title: 'Polkadot.js',
    description:
      'The Polkadot-JS is a browser-based vault as a wallet and an account management tool.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://polychain.capital/',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/polychain-capital-logo.png',
    title: 'Polychain',
    description:
      'Polychain Capital is the world’s premier digital asset investment fund. Based in San Francisco, we actively manage global blockchain assets to achieve exceptional returns for our investors. We value long-term vision, fierce intelligence, quantitative reasoning, and low-ego open-minded people.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://mantapacific.pomp.money',
    tag: 'ecosystem-tag-identity,ecosystem-tag-partner,ecosystem-tag-parachain',
    img: 'assets/img/ecosystem/logos/pomp-logo.jpeg',
    title: 'POMP',
    description:
      'POMP allows to verify your on-chain activity and assets while keeping wallet address and sensitive information private.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/POMP.png',
  },
  {
    link: 'https://protocol.ai/',
    tag: 'ecosystem-tag-research',
    img: 'assets/img/ecosystem/logos/protocol-labs-logo.png',
    title: 'Protocol Labs',
    description: 'Protocol Labs is an open-source R&D lab.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://questn.com/',
    tag: 'ecosystem-tag-social,ecosystem-tag-partner',
    img: 'assets/img/ecosystem/logos/questn-logo.jpeg',
    title: 'QuestN',
    description:
      'QuestN connects web3 gamers and projects with high quality interaction, and also offer substantial growth to projects by leveling up the engagement from the community.',
    category: ['Atlantic'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.risczero.com/',
    tag: 'ecosystem-tag-research',
    img: 'assets/img/ecosystem/logos/risc-zero-logo.png',
    title: 'Risc Zero',
    description: 'Risc Zero is the General Purpose Zero-Knowledge VM.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://twitter.com/sandeepnailwal',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/sandeepnailwal-logo.png',
    title: 'Sandeep Nailwal',
    description: 'Co-founder of Polygon.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://twitter.com/santiagoroel',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/santiagoroel-logo.png',
    title: 'Santiago Roel',
    description:
      'I like crypto & Harry Potter⚡️ | Sometimes write http://obviously.substack.com | Hosting @theempirepod | Tweets not investment advice',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.secure3.io/',
    tag: 'ecosystem-tag-auditor',
    img: 'assets/img/ecosystem/logos/secure3-logo.png',
    title: 'Secure3',
    description:
      'Secure3 is an intelligent audit contest platform designed to reinvent Web3 security.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.substrate.io/builders-program',
    tag: 'ecosystem-tag-incubator',
    img: 'assets/img/ecosystem/logos/sbp-logo.png',
    title: 'Substrate Builders Program',
    description:
      'The Substrate Builders Program directly supports you by connecting you with Parity’s extensive resources, taking your Substrate project to the next level.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://subwallet.app/',
    tag: 'ecosystem-tag-wallet',
    img: 'assets/img/ecosystem/logos/subwallet-logo.png',
    title: 'Subwallet',
    description:
      'SubWallet is a user-friendly Web3 Multiverse Gateway for Polkadot and Kusama ecosystem.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.talentale.net/',
    tag: 'ecosystem-tag-social',
    img: 'assets/img/ecosystem/logos/talentale-logo.png',
    title: 'TalenTale',
    description:
      'Everyone can become an influencer. Gain fans and values through Web3.0',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.talisman.xyz/',
    tag: 'ecosystem-tag-wallet',
    img: 'assets/img/ecosystem/logos/talisman-logo.png',
    title: 'Talisman',
    description:
      'Talisman is a non-custodial wallet for Polkadot and Ethereum.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://taskon.xyz/',
    tag: 'ecosystem-tag-social,ecosystem-tag-partner',
    img: 'assets/img/ecosystem/logos/taskon-logo.png',
    title: 'TaskOn',
    description:
      'TaskOn is a platform that boosts the completion for various Web3 tasks in a decentralized way.',
    category: ['Atlantic'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://twitter.com/tekinsalimi',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/tekinsalimi-logo.png',
    title: 'Tekin Salimi',
    description:
      'Founder @daofive // past: GP @polychain, co-founder & advisor @blockchainassn',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.typeit.net/',
    tag: 'ecosystem-tag-social',
    img: 'assets/img/ecosystem/logos/typeit-logo.jpg',
    title: 'TypeIt',
    description:
      'The first ever Web3 keyboard that enables users to earn passive income by conducting day-to-day typing activities.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://privacyalliance.com/',
    tag: 'ecosystem-tag-research',
    img: 'assets/img/ecosystem/logos/upa-logo.png',
    title: 'UPA',
    description:
      'The Universal Privacy Alliance seeks to advance the understanding of privacy as the very basis of free and flourishing digital societies.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://ultiverse.io/',
    tag: 'ecosystem-tag-gaming,ecosystem-tag-partner',
    img: 'assets/img/ecosystem/logos/ultiverse.png',
    title: 'Ultiverse',
    description:
      'Built on Unreal Engine 5, Ultiverse brings AAA-gaming to blockchain with an immersive social virtual world and native Web3 technology to usher in the future.',
    category: ['Atlantic'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://veridise.com/',
    tag: 'ecosystem-tag-auditor',
    img: 'assets/img/ecosystem/logos/veridise-logo.png',
    title: 'Veridise',
    description:
      'Veridise is a blockchain security company founded by a team of world-class researchers.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://web3.foundation/grants/',
    tag: 'ecosystem-tag-incubator',
    img: 'assets/img/ecosystem/logos/web3-grants-program-logo.png',
    title: 'Web3 Grants Program',
    description:
      'The Web3 Foundation grants program funds software development and research in the field of decentralized software protocols. Web3 Foundation awards grants for specific projects and pieces of development work.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://web3go.xyz/home',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/Web3Go.png',
    title: 'Web3Go',
    description: 'Data Intelligence Network',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.yuliverse.com/',
    tag: 'ecosystem-tag-gaming',
    img: 'assets/img/ecosystem/logos/yuliverse-logo.png',
    title: 'Yuliverse',
    description:
      'Yuliverse is not just a Role-playing game, but it represent a new way of socializing. Players will meet with other players while playing Yuliverse and connect with like-minded people in the same city.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://zeeprime.capital/',
    tag: 'ecosystem-tag-investor',
    img: 'assets/img/ecosystem/logos/zeeprime-logo.png',
    title: 'Zee Prime Capital',
    description:
      'Totally supercool and chilled VC investing in programmable assets, collaborative intelligence and other buzzwords',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://zkex.com/',
    tag: 'ecosystem-tag-defi',
    img: 'assets/img/ecosystem/logos/ZKEX.png',
    title: 'ZKEX',
    description: 'Secure crypto trading without limits: Spot + Perps.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://zk.me/',
    tag: 'ecosystem-tag-identity',
    img: 'assets/img/ecosystem/logos/zkMe.png',
    title: 'zkMe',
    description:
      "The world's first zk Identity Oracle, providing anonymous user verifications on-chain for increased security and privacy.",
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://zkholdem.xyz/',
    tag: 'ecosystem-tag-gaming',
    img: 'assets/img/ecosystem/logos/zkHoldem.png',
    title: 'zkHoldem',
    description:
      "On-chain Texas Hold'em, powered by #ZKP and #HomomorphicEncryption",
    category: ['Mainnet'],
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/zkHoldem.png',
  },
  {
    link: 'https://zprize.org/',
    tag: 'ecosystem-tag-research',
    img: 'assets/img/ecosystem/logos/zprize-logo.png',
    title: 'ZPrize',
    description:
      'ZPrize is a collaborative effort across the blockchain industry that includes over 32 partners and sponsors contributing time, effort, and resources to make this initiative a success.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    tag: 'ecosystem-tag-toolings,ecosystem-tag-infrastructure',
    img: 'assets/img/ecosystem/logos/red-stone-logo.svg',
    title: 'RedStone',
    link: 'https://redstone.finance/',
    description:
      'RedStone is an Oracle that delivers frequently updated, reliable, and diverse data feeds for your dApp and smart contracts on multiple L1s & L2s.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    tag: 'ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/analytix-logo.png',
    title: 'Analytix',
    link: 'https://analytix.web3go.xyz/layout/home',
    description:
      'Analytix is an open data platform built based on Web3Go that focuses on the formatting, visualization, sharing, and collaborative analysis of the on-chain data generated in the Polkadot & BNB ecosystem.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.layerswap.io/',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/Layerswap.png',
    title: 'Layerswap',
    description: 'Move crypto across exchanges, blockchains, and wallets.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://meson.fi/',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/Meson.png',
    title: 'Meson',
    description:
      'Meson provides minute-fast swaps with almost-zero fee & slippage across all chains',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.noramp.io/',
    tag: 'ecosystem-tag-defi',
    img: 'assets/img/ecosystem/logos/NoRamp.png',
    title: 'NoRamp',
    description:
      'Building Web2’s favorite Web3 apps on our lightning-fast payment infra',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://app.zypher.game/',
    tag: 'ecosystem-tag-gaming',
    img: 'assets/img/ecosystem/logos/ZypherGames.png',
    title: 'Zypher Games',
    description: 'Your portal to AI & ZKP powered fully on-chain games.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/Zypher.png',
  },
  {
    tag: 'ecosystem-tag-defi',
    img: 'assets/img/ecosystem/logos/impossible-finance.png',
    title: 'Impossible Finance',
    link: 'https://impossible.finance/',
    description:
      'Impossible Finance is the go-to crypto investment platform that empowers you with high-quality, fair and accessible crypto opportunities.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://double.one/',
    tag: 'ecosystem-tag-gaming',
    img: 'assets/img/ecosystem/logos/DoubleProtocol.png',
    title: 'Double Protocol',
    description:
      'Double Protocol is a fully decentralized and open-source NFT rental protocol and marketplace for Metaverse and GameFi assets.',
    category: ['ComingSoon'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://dodoex.io/en',
    tag: 'ecosystem-tag-defi',
    img: 'assets/img/ecosystem/logos/DODO.png',
    title: 'DODO',
    description:
      'Decentralized Trading Protocol for Web3, Powered by the DODO PMM algorithm; aggregator with deep on-chain liquidity.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://l2beat.com/scaling/summary',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/L2BEAT.png',
    title: 'L2BEAT',
    description:
      'L2BEAT is a public goods company dedicated to providing on-chain transparency.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    tag: 'ecosystem-tag-gaming',
    img: 'assets/img/ecosystem/logos/plant-crossing-logo.png',
    title: 'Plant Crossing ',
    link: 'https://plant-crossing.com/',
    description:
      'Plant Crossing is the first and flagship product of Avalon, providing a showcase of how the world of Avalon would present itself.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.metale.world/',
    tag: 'ecosystem-tag-social',
    img: 'assets/img/ecosystem/logos/Read2N.png',
    title: 'Read2N',
    description:
      'The first #web3 global publishing platform powered by #ChatGPT',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    tag: 'ecosystem-tag-gaming,ecosystem-tag-partner',
    img: 'assets/img/ecosystem/logos/blade-dao-logo.jpeg',
    title: 'BladeDAO',
    link: 'https://rolluproyale.netlify.app/',
    description: 'On-chain game studio building across the L2 stacks',
    category: ['Atlantic'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },

  {
    tag: 'ecosystem-tag-gaming,ecosystem-tag-partner',
    img: 'assets/img/ecosystem/logos/burger-cities-logo.jpeg',
    title: 'BurgerCities',
    link: 'https://burgercities.org/',
    description: 'BurgerCities is a one-stop play & earn MetaFi platform.',
    category: ['Atlantic'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    tag: 'ecosystem-tag-gaming',
    img: 'assets/img/ecosystem/logos/hooked-logo.png',
    title: 'Hooked Protocol',
    link: 'https://hooked.io/',
    description:
      'Hooked Protocol is building the on-ramp layer for massive Web3 adoption, providing tailored Learn and Earn products and onboarding infrastructures for users and businesses to enter the new world of web3.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://tellor.io/',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/Tellor.png',
    title: 'Tellor',
    description:
      'Tellor is a transparent and permissionless way for smart contracts to easily get any data whenever they need it',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    tag: 'ecosystem-tag-defi,ecosystem-tag-parachain',
    img: 'assets/img/ecosystem/logos/jumbo-shrimps-logo.jpeg',
    title: 'JumboShrimps',
    link: 'https://twitter.com/JumboShrimps__',
    description:
      'The revolutionary staking project. Deposit your tokens for a chance to win the entire staking reward pool.',
    category: [],
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/JumboShrimps.png',
  },
  {
    tag: 'ecosystem-tag-defi,ecosystem-tag-parachain',
    img: 'assets/img/ecosystem/logos/manta-dex-logo.jpeg',
    title: 'Manta DEX',
    link: 'https://twitter.com/MantaDex',
    description: 'The Decentralized Exchange for Manta Altlantic',
    category: [],
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/MantaDEX.png',
  },
  {
    tag: 'ecosystem-tag-wallet,ecosystem-tag-parachain',
    img: 'assets/img/ecosystem/logos/manta-network-logo.jpeg',
    title: 'Manta Wallet',
    link: 'https://chrome.google.com/webstore/detail/manta-wallet/enabgbdfcbaehmbigakijjabdpdnimlg',
    description:
      'A crypto wallet on Manta network. Manta wallet is an extension that lets you explore the Manta ecosystem in your browser.',
    category: [],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://dappos.com/',
    tag: 'ecosystem-tag-defi,ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/DappOS.png',
    title: 'DappOS',
    description: 'dappOS is the first intent-centric operating protocol.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/dappOS.png',
  },
  {
    link: 'https://defillama.com/',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/DefiLlama.png',
    title: 'DefiLlama',
    description: 'Open and transparent DeFi analytics.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://foxwallet.com/',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/FoxWallet.png',
    title: 'Fox Wallet',
    description:
      'An easy Web3 entrance built in multi-chain ecosystems. #ZKP prioritized',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://izumi.finance/home',
    tag: 'ecosystem-tag-defi',
    img: 'assets/img/ecosystem/logos/Izumi.png',
    title: 'Izumi',
    description:
      'Liquidity Redefined - A multi-chain DeFi protocol providing One-Stop Liquidity as a Service (LaaS).',
    category: ['Mainnet'],
    isHighLight: true,
    isNative: false,
    highLightImg: 'assets/img/ecosystem/highlights/iZUMi.png',
  },
  {
    link: 'https://moonfit.xyz/',
    tag: 'ecosystem-tag-social,ecosystem-tag-gaming',
    img: 'assets/img/ecosystem/logos/Moonfit.png',
    title: 'MoonFit',
    description: 'The #1 Cross-chain Social Fitness App',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://mysticswap.io/',
    tag: 'ecosystem-tag-defi',
    img: 'assets/img/ecosystem/logos/Mysticswap.png',
    title: 'Mysticswap',
    description: 'The safest way to swap NFTs & tokens',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.orbiter.finance/?source=Ethereum&dest=Arbitrum&token=ETH',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/Orbiter.png',
    title: 'Orbiter',
    description:
      'Orbiter Finance is a decentralized cross-rollup Layer 2 bridge',
    category: ['Mainnet'],
    isHighLight: true,
    isNative: false,
    highLightImg: 'assets/img/ecosystem/highlights/orbiter.png',
  },
  {
    link: 'https://owlto.finance/bridge',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/Owlto.png',
    title: 'Owlto',
    description:
      'Owlto Finance is a decentralized cross-rollup bridge that focuses on L2',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.padolabs.org/',
    tag: 'ecosystem-tag-social',
    img: 'assets/img/ecosystem/logos/PADOLabs.png',
    title: 'PADO Labs',
    description:
      'IZK Attestation to bring all Internet data to smart contract.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://readon.me/',
    tag: 'ecosystem-tag-social,ecosystem-tag-partner',
    img: 'assets/img/ecosystem/logos/readon-logo.png',
    title: 'ReadON',
    description: 'ReadON is the First “Read-FI” Program for General Users.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://app.rhino.fi/bridge',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/Rhino.png',
    title: 'Rhino',
    description:
      'The worlds best multichain DeFi aggregator, from one self-custodial layer 2 wallet. Bridge. Trade. Swap. Invest. Earn.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://sending.me/',
    tag: 'ecosystem-tag-social',
    img: 'assets/img/ecosystem/logos/SendingMe.png',
    title: 'Sending Me',
    description:
      'SendingMe is a decentralized instant messenger that brings together protocols and dApps in a one-stop solution.',
    category: ['ComingSoon'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.surfermonkey.io/',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/SurferMonkey.png',
    title: 'SurferMonkey',
    description:
      'Blockchain privacy and compliance via ZKP Plug-And-Play integration. Live in +20 net',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://www.metamerge.xyz/',
    tag: 'ecosystem-tag-gaming',
    img: 'assets/img/ecosystem/logos/TheMetaMerge.png',
    title: 'The Meta Merge',
    description:
      'Collect AIGC pets w/unique behavior & personality, adapting to ur gaming style for an individualized experience.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    link: 'https://zk.link/',
    tag: 'ecosystem-tag-defi',
    img: 'assets/img/ecosystem/logos/zklink.png',
    title: 'zk.Link',
    description: 'The first zkRollup-centric, multi-chain execution layer.',
    category: ['Mainnet'],
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'Blaize',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Blaize.png',
    link: 'https://blaize.tech/',
    description:
      'Software development company with an emphasis on blockchain technology ',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'Mes Protocol',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/MesProtocol.png',
    link: 'https://mesprotocol.com/',
    description:
      'A Cross-Rollup Orderbook DEX - supporting trades on multiple rollups in one single orderbook.',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'Revoke.Cash',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    img: 'assets/img/ecosystem/logos/Revoke.Cash.png',
    category: ['Mainnet'],
    link: 'https://revoke.cash/',
    description:
      'Manage your token approvals and protect yourself from scams on 60+ networks',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'Omnisea',
    tag: 'ecosystem-tag-gaming',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/OmniSea.png',
    link: 'https://omnisea.org/',
    description: 'Building The Future of NFTs.',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'Zendex',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Zendex.png',
    link: 'https://zendex.finance/',
    description: 'Trade tokens in an instant',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'Ezswap',
    tag: 'ecosystem-tag-gaming',
    img: 'assets/img/ecosystem/logos/Ezswap.png',
    category: ['Mainnet'],
    link: 'https://ezswap.io/#/index',
    description:
      'Multi-Chain NFT DEX Protocol (Polygon, ETH, zkSync, Arbitrum, Manta) - Game Infra & Art Launchpad',
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/EZswap.png',
  },
  {
    title: 'OpenOcean',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/OpenOcean.png',
    link: 'https://openocean.finance/',
    description: 'The leading Defi aggregator ',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'PacificSwap',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/PacificSwap.png',
    link: 'https://pacificswap.xyz/',
    description:
      'An innovative CLAMM using incentive-alignment to keep the liquidity flywheel moving on Manta Pacific.',
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/pavificSwap.png',
  },
  {
    title: 'StakeStone',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/StakeStone.png',
    link: 'https://app.stakestone.io/u/stake',
    description:
      'The fastest way to grow your ETH balance through LSD and DeFi strategies.',
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/Stakestone.png',
  },
  {
    title: 'SoQuest',
    tag: 'ecosystem-tag-social',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/SoQuest.png',
    link: 'https://soquest.xyz/',
    description: 'SoQuest is a GTM web3 quest platform with BQL and QaaS. ',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'DEX Screener',
    tag: 'ecosystem-tag-toolings',
    category: ['Mainnet'],
    img: 'assets/img/DEXScreener.png',
    link: 'https://dexscreener.com/manta',
    description:
      'Realtime price charts and trading history on DEXes across Ethereum, BSC, Polygon, Avalanche, Fantom, Harmony, Cronos, Arbitrum, Optimism and more.',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'LayerBank',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/layerbank.png',
    link: 'https://layerbank.finance/',
    description:
      'A universal permissionless on-chain bank designed to thrive across the omni-chain ecosystem.',
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/layerbank.png',
  },
  {
    title: 'Heroes Battle',
    tag: 'ecosystem-tag-gaming',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/HeroesBattle.png',
    link: 'https://www.heroesbattlearena.online/?utm_source=facebook&utm_medium=cpc&utm_campaign=target_linktr',
    description:
      'Multichain Playandearn Strategic RPG with zero start investments based on NFTs for army, magic stones, Gods!',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'K3K',
    tag: 'ecosystem-tag-gaming',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/K3K.png',
    link: 'https://playkingdom.io/',
    description: 'Play Kingdom - Blockchain Application Onboarding Platform',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'Kreatorland',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Kreatorland.png',
    link: 'https://kreatorland.com/',
    description: 'NFT Marketplace for Layer 2',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'Intract',
    tag: 'ecosystem-tag-identity',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Intract.png',
    link: 'https://business.intract.io/',
    description:
      'Your go-to platform to learn web3, participate in quests, earn rewards, and have fun - all in one place.',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'Battledog',
    tag: 'ecosystem-tag-gaming',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Battledog.png',
    x: 'https://twitter.com/BattledogsArena',
    link: 'https://play.battledogs.fun/',
    description:
      'An EVM Agnostic Battle Card Game developed by OxSorcerers for the multichain omniverse. ',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'Motodex',
    tag: 'ecosystem-tag-gaming',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Motodex.png',
    link: 'https://openbisea.io/motodex',
    description:
      'MotoDEX is a Blockchain Game, in which users participate in motorcycle races, develop their riders and improve high-speed tracks.',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'Gabby World',
    tag: 'ecosystem-tag-gaming',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/GabbyWorld.png',
    link: 'https://beta.gabby.world/gabby',
    description: 'AIGC Autonomous World.',
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/GabbyWorld.png',
  },
  {
    title: 'OpenPad',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/OpenPad.png',
    link: 'https://openpad.io/homepage',
    description:
      'One-stop portal to expedite innovative concepts and transform them into tangible projects.',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'AlienSwap',
    tag: 'ecosystem-tag-gaming',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/AlienSwap.png',
    link: 'https://alienswap.xyz/',
    description:
      'AlienSwap is the first membership-based NFT marketplace for the community.',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'Element',
    tag: 'ecosystem-tag-gaming',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Element.png',
    link: 'https://element.market/',
    description: 'Aggregator&MKP, the most gas-saving trading place for NFTs.',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'Rubic',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Rubic.png',
    link: 'https://rubic.exchange/',
    description:
      'Rubic is a Cross-Chain Tech Aggregator for users + tools for dApps. Trade 15,500+ tokens across 70+ networks, through the aggregation of 90+ DEXs and bridges!',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'RIvera.money',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/RIveramoney.png',
    link: 'https://rivera.money/',
    description:
      'Simplifying concentrated liquidity for market-makers & Web3 builders.',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'Pyth Network',
    tag: 'ecosystem-tag-infrastructure,ecosystem-tag-toolings',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/PythNetwork.png',
    link: 'https://pyth.network/',
    description:
      'Pyth delivers real-time market data from institutions to smart contracts on any blockchain.',
    isHighLight: true,
    isNative: false,
    highLightImg: 'assets/img/ecosystem/highlights/Pyth.png',
  },
  {
    title: 'ApolloX',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/ApolloX.png',
    link: 'https://www.apollox.finance/en',
    description:
      'Top Crypto Derivatives DEX. Trade On-Chain & Orderbook Futures with leverage',
    isHighLight: true,
    isNative: false,
    highLightImg: 'assets/img/ecosystem/highlights/ApolloX.png',
  },
  {
    title: 'Aori',
    tag: 'ecosystem-tag-defi',
    category: ['ComingSoon'],
    img: 'assets/img/ecosystem/logos/PythNetwork.png',
    link: 'https://www.aori.io/',
    description:
      'non-custodial, high performance order book trading infrastructure for on-chain spot trading, and otc settlement.',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
  },
  {
    title: 'GeckoTerminal',
    tag: 'ecosystem-tag-toolings',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/GeckoTerminal.png',
    link: 'https://www.geckoterminal.com/manta-pacific/pools',
    description: 'Real-time DEX Tracker and the other half-blood of CoinGecko.',
  },
  {
    title: 'RedStone',
    tag: 'ecosystem-tag-toolings',
    category: ['Mainnet'],
    link: 'https://redstone.finance/',
    img: 'assets/img/ecosystem/logos/RedStone.png',
    description:
      'Modular Oracles delivering cost-efficient data for DeFi to EVM L1s&L2s',
  },
  {
    title: 'Okx Wallet/Oklink',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Okx-Wallet.png',
    link: 'https://www.okx.com/',
    isHighLight: true,
    isNative: false,
    highLightImg: 'assets/img/ecosystem/highlights/okxwallet.png',
    description: 'Your Portal To Web3!',
  },
  {
    title: 'Rubydex',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Rubydex.png',
    link: 'https://rubydex.com/en',
    description:
      'RubyDex is a multi-chain perpetuals DEX offering crypto, commodities, and forex contracts',
  },
  {
    title: 'Mountain Protocol',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/MountainProtocol.png',
    link: 'https://mountainprotocol.com/',
    description: 'The first nationally regulated yield bearing stablecoin.',
  },
  {
    title: 'NFTb',
    tag: 'ecosystem-tag-gaming',
    category: ['Mainnet'],
    link: 'https://nftb.io/',
    img: 'assets/img/ecosystem/logos/NFTb.png',
    description:
      'NFTb is the 1st ever social Gaming Hub backed by Binance Labs ',
  },
  {
    title: 'DappGate',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/DappGate.png',
    link: 'https://dappgate.io/apps/dappgate',
    description:
      'Your gateway to web3. The heart of onchain social interaction, uniting users across projects & chains. ',
  },
  {
    title: 'Capx',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Capx.png',
    link: 'https://app.capx.fi/explore',
    description: 'Building the Incentive Layer of the Internet',
  },
  {
    title: 'PixelSwap',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Pixelswap.png',
    link: 'https://app.pixelswap.xyz/#/swap',
    description:
      'Pioneering the Future of Decentralized Exchange with Seamless Multichain Support and Enhanced User Experience.',
  },
  {
    title: 'Onramp Money',
    tag: 'ecosystem-tag-toolings',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/onrampMoney.png',
    link: 'https://onramp-money.freshdesk.com/support/home',
    description: 'A convenient & secure way to convert your FIAT to web3 money',
  },
  {
    title: 'OmniBTC',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/OmniBTC.png',
    link: 'https://www.omnibtc.finance/',
    description:
      'A decentralized cross-chain swap and lend/borrow platform, aiming to connect and unify all the on-chain liquidity.',
  },
  {
    title: 'Goku.money',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/gokumoney.png',
    link: 'https://goku.money/',
    description:
      'Goku.Money is the decentralized reserve bank on Manta Network. Borrow GAI high-capital efficiency stablecoin, using your favorite cryptos!',
  },
  {
    title: 'StationX',
    tag: 'ecosystem-tag-social',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/stationX.png',
    link: 'https://www.stationx.network/',
    description: 'A protocol to automate workflows for communities.',
  },
  {
    title: 'KiloEX',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/KiloEX.png',
    link: 'https://app.kiloex.io/#/trade',
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/KiloEx.png',
    description:
      'Next generation perp DEX. Lightning-fast trades,risk-neutral positions and LP-friendly solutions.',
  },
  {
    title: 'Hyperlane',
    tag: 'ecosystem-tag-toolings,ecosystem-tag-infrastructure',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Hyperlane.png',
    link: 'https://www.hyperlane.xyz/',
    description:
      'The Permissionless Interoperability layer built for the modular future.',
  },
  {
    title: 'SpaceID',
    tag: 'ecosystem-tag-social',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/SpaceID.png',
    link: 'https://space.id/',
    isHighLight: true,
    isNative: false,
    highLightImg: 'assets/img/ecosystem/highlights/spaceid.png',
    description:
      'One Place for Digital Identities: SPACE ID is building a hub for you to discover, register, trade, & manage .eth, .bnb, & .arb web3 domains in one stop.',
  },
  {
    title: 'KEOM',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/KEOM.png',
    link: 'https://app.0vix.com/',
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/KEOM.png',
    description:
      'KEOM is a Decentralized Finance (DeFi) liquidity market protocol, built on Polygon and Manta.',
  },
  {
    title: 'Realperp',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/realPerp.png',
    link: 'https://realperp.com/#/',
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/realperp.png',
    description:
      'Decentralized Derivatives and Social Trading Platform. Trade and earn with the lowest fee and up to 50x leverage.',
  },
  {
    title: 'ApolloX',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/ApolloX.png',
    link: 'https://www.apollox.finance/en',
    description:
      'Top Crypto Derivatives DEX. Trade On-Chain & Orderbook Futures with leverage',
  },
  {
    title: 'QuickSwap',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/QuickSwap.png',
    link: 'https://quickswap.exchange/',
    isNative: false,
    isHighLight: true,
    highLightImg: 'assets/img/ecosystem/highlights/quickswap.png',
    description:
      'QuickSwap is a next-gen #DEX for #DeFi. Trade at lightning-fast speeds with near-zero gas fees.',
  },
  {
    title: 'Star',
    tag: 'ecosystem-tag-identity',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Star.png',
    link: 'https://star.co/',
    description:
      'Building social network aggregator and omni-chain name services.',
  },
  {
    title: 'Symbiosis',
    tag: 'ecosystem-tag-infrastructure',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Symbiosis.png',
    link: 'https://app.symbiosis.finance/swap?chainIn=Ethereum&tokenIn=ETH',
    description: 'A cross-chain engine and liquidity protocol.',
  },
  {
    title: 'LayerZero',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/LayerZero.png',
    link: 'https://layerzero.network/',
    isHighLight: true,
    isNative: false,
    highLightImg: 'assets/img/ecosystem/highlights/layerzero.png',
    description:
      "We're building LayerZero, an omnichain interoperability protocol.",
  },
  {
    title: 'Yooldo',
    tag: 'ecosystem-tag-gaming',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Yooldo.png',
    link: 'https://app.yooldo.gg/',
    isHighLight: false,
    isNative: false,
    highLightImg: 'assets/img/ecosystem/highlights/layerzero.png',
    description:
      'Sustainable blockchain game platform with superb game quality, enticing rewards and innovative abuser filtering solution',
  },
  {
    title: 'Boba Brewery',
    tag: 'ecosystem-tag-gaming',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/BobaBrewery.png',
    link: 'https://bobabrewery.com/',
    isHighLight: false,
    isNative: false,
    highLightImg: '',
    description:
      'A fully decentralized cross-chain launchpad supports #SUI #BSC, #ETH, #Arbitrum, #Aptos and #Boba. ',
  },
  {
    title: 'Blaize.Security',
    tag: 'ecosystem-tag-auditor',
    category: [],
    img: 'assets/img/ecosystem/logos/BlaizeSecurity.png',
    link: 'https://blaize.tech/security/',
    description:
      'Web3 ecosystem security provider for more than 20 blockchain networks',
  },
  {
    title: 'Debank',
    tag: 'ecosystem-tag-infrastructure',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/debank.png',
    link: 'https://debank.com/',
    description:
      'The real Web3-native messenger and the best web3 portfolio tracker that covers all your tokens, DeFi protocols, NFTs across all EVM chains.',
  },
  {
    title: 'Safe',
    tag: 'ecosystem-tag-infrastructure',
    category: ['Pacific'],
    isHighLight: false,
    isNative: true,
    highLightImg: 'assets/img/ecosystem/native/safe.png',
    img: 'assets/img/ecosystem/logos/safe.png',
    link: 'https://safe.manta.network/welcome',
    description:
      'The most trusted decentralized custody protocol and collective asset management platform on Manta Pacific.',
  },
  {
    title: 'NerveNetwork',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/NerveNetwork.png',
    link: 'https://nerve.network/',
    description: 'Decentralized Digital Asset Service Network',
  },
  {
    title: 'Rehide',
    tag: 'ecosystem-tag-identity',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Rehide.png',
    link: 'https://app.rehide.io/',
    description:
      'Private, zero-knowledge password manager and vault. Encrypt your data with your web3 wallet. Your data, your control. ',
  },
  {
    title: 'Steer Protocol',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/SteerProtocol.png',
    link: 'https://steer.finance/',
    description:
      'Multi-chain compute protocol with next-gen automated liquidity management.',
  },
  {
    title: 'Nabox',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Nabox.png',
    link: 'https://nabox.io/',
    description: 'The Multi-Chain DID Gateway to Web3',
  },
  {
    title: 'AllsTo',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/AllsTo.png',
    link: 'https://alls.to/',
    description: 'Simplify Your Stablecoin Life in Web3.',
  },
  {
    title: 'Token Terminal',
    tag: 'ecosystem-tag-infrastructure',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/TokenTerminal.png',
    link: 'https://tokenterminal.com/',
    description:
      'Fundamentals for crypto. Available also on the Bloomberg Terminal App Portal at APPS TOKEN GO.',
  },
  {
    title: 'Shoebill Finance',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/ShoebillFinance.png',
    link: 'https://shoebill.finance/',
    description:
      'LST Collaterizable Lending on Wemix & Klaytn & Manta Pacific network',
  },
  {
    title: 'SocialScan',
    tag: 'ecosystem-tag-infrastructure',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/SocialScan.png',
    link: 'https://socialscan.io/dashboard',
    description:
      'Your next-gen blockchain explorer: 20X+ cost savings, 10X+ faster, superior performance.',
  },
  {
    title: 'Amet Finance',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/AmetFinance.png',
    link: 'https://amet.finance',
    description: 'Empowering Your Financial Future in DeFi',
  },
  {
    title: 'OnchainBlock',
    tag: 'ecosystem-tag-infrastructure',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/OnchainBlock.png',
    link: 'https://onchainblock.xyz/',
    description:
      'Exploring Stablecoins, Ethereum, and blockchain assets. Excited about Layer 2 innovations: @Starknet, @zksync, @arbitrum, @optimismFND, @MantaNetwork and more!',
  },
  {
    title: 'AIT Protocol',
    tag: 'ecosystem-tag-infrastructure',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/AITProtocol.png',
    link: 'https://ait.tech/',
    description:
      "World's first AI data infrastructure. Providing #Web3 AI solution & creating millions of jobs with the Train-To-Earn model. Incubated by @PaalMind & @Metabroshq",
  },
  {
    title: 'Binance Web3 Wallet',
    tag: 'ecosystem-tag-wallet',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/binance.png',
    link: 'www.binance.com',
    description: 'Your Gateway into Web3',
  },
  {
    title: 'Trust Wallet',
    tag: 'ecosystem-tag-wallet',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/trustwallet.png',
    link: 'https://trustwallet.com/',
    description:
      'The worlds most trusted & secure #crypto wallet & #Web3 gateway, with 70 million+ users ',
  },
  {
    title: 'Bitget Wallet',
    tag: 'ecosystem-tag-wallet',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Bitget.png',
    link: 'https://linktr.ee/bitgetwallet',
    description:
      'Join 12M users in seamlessly navigating the Web3 space with Bitget Wallet - the best Web3 trading wallet today. ',
  },
  {
    title: 'Bybit Wallet',
    tag: 'ecosystem-tag-wallet',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/bybit.png',
    link: 'www.bybit.com',
    description: 'The most reliable cryptocurrency exchange. ',
  },
  {
    title: 'imToken',
    tag: 'ecosystem-tag-wallet',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/imtoken.png',
    link: 'https://token.im',
    description:
      'imToken, a reliable non-custodial mobile wallet for tokens you own - cryptocurrencies, stable coins, NFTs, and more. We are inspired to make digital life equally accessible to everyone.',
  },
  {
    title: 'OKLink',
    tag: 'ecosystem-tag-infrastructure',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/oklink.png',
    link: 'https://www.oklink.com/',
    description:
      'OKLink Manta explorer allows users to search through transactions, blocks, wallet addresses, smart contracts and other on-chain data. It is a one-stop data platform covering a wide range of on-chain metrics and data analysis of Manta networks. OKLink also supports nearly 40 mainstream blockchain networks.',
  },
  {
    title: 'LORE',
    tag: 'ecosystem-tag-infrastructure',
    img: 'assets/img/ecosystem/logos/LORE.png',
    category: ['Mainnet'],
    link: 'https://searchcrypto.com/',
    description: 'AI-Powered Explorers',
  },
  {
    title: 'Parsec',
    tag: 'ecosystem-tag-infrastructure',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Parsec.png',
    link: 'https://parsec.fi/',
    description: 'Block Explorer & Pro Terminal for onchain Markets',
  },
  {
    title: 'Unmarshal',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Unmarshal.png',
    link: 'https://unmarshal.io/',
    description: 'The Most Advanced Blockchain Data Infrastructure',
  },
  {
    title: 'BakerySwap',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/BakerySwap.png',
    link: 'https://www.bakeryswap.org/#/swap',
    description: 'BakerySwap is an all-in-one AMM+NFT platform.',
  },
  {
    title: 'Bella Protocol',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Bella-Protocol.png',
    link: 'https://www.bella.fi/',
    description:
      'A suite of streamlined tools to unleash your liquidity potential and maximize crypto yields.',
  },
  {
    title: 'Range Protocol',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Range-Protocol.png',
    link: 'https://www.rangeprotocol.com/',
    description: 'Universal Gateway to Defi Asset Management',
  },
  {
    title: 'ZeroSwap',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/ZeroSwap.png',
    link: 'https://zeroswap.io/',
    description:
      'Save Money every time you trade on ZeroSwap; Compare Prices, Gas-Costs and Protocol Fee across all DEXs.',
  },
  {
    title: 'Gamma',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Gamma.png',
    link: 'https://www.gamma.xyz/',
    description:
      'A protocol for active liquidity management and market making strategies. ',
  },
  {
    title: 'YaspFi',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/YaspFi.png',
    link: 'https://yasp.fi//',
    description: 'One-stop experience for everything DeFi ',
  },
  {
    title: 'BLIO',
    tag: 'ecosystem-tag-infrastructure',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/BLIO.png',
    link: 'https://blio.xyz/',
    description:
      'Tired of clunky Block Explorers? We make it sleek and insightful. ',
  },
  {
    title: 'Coin98 Super Wallet',
    tag: 'ecosystem-tag-wallet',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Coin98-Super-Wallet.png',
    link: 'https://coin98.com/',
    description:
      'Your Gateway to Web3 | Built by @ninetyeight_hq | http://coin98.com',
  },
  {
    title: 'ZeroLend',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/ZeroLend.png',
    link: 'https://zerolend.xyz/',
    description: 'The leading lending market on @zkSync and @MantaNetwork.',
  },
  {
    title: 'LendLord',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/LendLord.png',
    link: 'https://lendlord.org/',
    description: 'Low Risk & Capital Efficient Lending Hub on Manta Network',
  },
  {
    title: 'LogX',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/LogX.png',
    link: 'https://www.logx.trade/',
    description:
      'Perp DEX with deepest liquidity: Arbitrum, Mantle, Kroma, Linea, Manta, Telos',
  },
  {
    title: 'Fetcch',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/fetcch.png',
    link: 'https://writings.fetcch.xyz/',
    description: 'Pull payments layer for blockchain',
  },
  {
    title: 'Deri Protocol',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Deri-Protocol.png',
    link: 'https://deri.io/',
    description: 'Decentralized derivatives protocol for Web3 ',
  },
  {
    title: 'Gate Wallet',
    tag: 'ecosystem-tag-wallet',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Gate-Wallet.png',
    link: 'https://www.gate.io/web3',
    description:
      'Your Gateway to Web3 - Dex, Wallets, Trading, Cross-chain, NFTs, and DApps all in http://Gate.io Web3',
  },
  {
    title: 'ReHold',
    tag: 'ecosystem-tag-defi',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/ReHold.png',
    link: 'https://rehold.io/zh?utm_source=twitter&utm_medium=about',
    description:
      'Your #DeFi Earnings with ReHold. Up to 400% APR Dual Investments Unlock CLMM High Returns for Everyone',
  },
  {
    title: 'L2scan',
    tag: 'ecosystem-tag-infrastructure',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/L2scan.png',
    link: 'https://unifra.io/',
    description: 'The first native block explorer for cross Layer2s.',
  },
  {
    title: 'MONOCERUS',
    tag: 'ecosystem-tag-gaming',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/MONOCERUS.png',
    link: 'https://monocerus.world/',
    description: 'The World of High-yield GameFi and Dynamic NFT',
  },
  {
    title: 'TrustGo',
    tag: 'ecosystem-tag-infrastructure',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/TrustGo.png',
    link: 'https://www.trustalabs.ai/',
    description: 'Building on-chain reputation layer for Web3. ',
  },
  {
    title: 'Goldsky',
    tag: 'ecosystem-tag-infrastructure',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Goldsky.png',
    link: 'https://goldsky.com/',
    description: "Web3's Realtime Data Platform.",
  },
  {
    title: 'Metale Protocol',
    tag: 'ecosystem-tag-gaming',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Metale-Protocol.png',
    link: 'https://www.metale.world/',
    description:
      'A new-era global content distribution protocol that provides on-chain services for content subscription, transparent profit-sharing, and asset transactions.',
  },
  {
    title: 'Webmi',
    tag: 'ecosystem-tag-gaming',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Webmi.png',
    link: 'https://webmi.pro/',
    description: 'Build the infrastructure on @MantaNetwork. ',
  },
  {
    title: 'Footprint Analytics',
    tag: 'ecosystem-tag-infrastructure',
    category: ['Mainnet'],
    img: 'assets/img/ecosystem/logos/Footprint-Analytics.png',
    link: 'https://www.footprint.network/',
    description:
      'Footprint Analytics is a data platform blending web2 and web3 data with abstractions',
  },
  // {
  //   title: 'StellaSwap',
  //   tag: 'ecosystem-tag-defi',
  //   category: ['Mainnet'],
  //   img: 'assets/img/ecosystem/logos/StellaSwap.png',
  //   link: 'https://stellaswap.com/',
  //   description: 'Top DeFi Hub: Trade, Earn, Bridge, XCM, Onramp',
  // },
  // {
  //   title: 'Tria',
  //   tag: 'ecosystem-tag-infrastructure',
  //   category: ['Mainnet'],
  //   img: 'assets/img/ecosystem/logos/Tria.png',
  //   link: 'https://www.tria.so/',
  //   description:
  //     'Onboarding the world to Web3 with names, instead of clunky crypto wallets.',
  // },
  // {
  //   title: 'Cookbook.dev',
  //   tag: 'ecosystem-tag-infrastructure',
  //   category: ['Mainnet'],
  //   img: 'assets/img/ecosystem/logos/Tria.png',
  //   link: 'https://www.cookbook.dev/?utm=t',
  //   description:
  //     'Find smart contracts, solidity libraries, and discover protocols.',
  // },
  // {
  //   title: 'Minu the Manta',
  //   tag: 'ecosystem-tag-defi',
  //   category: ['Mainnet'],
  //   img: 'https://twitter.com/minumanta',
  //   link: 'https://www.minuthemanta.com/?i=1',
  //   description: 'he First meme coin on @mantanetwork 0 tax',
  // },
  // {
  //   title: 'Demex',
  //   tag: 'ecosystem-tag-defi',
  //   category: ['Mainnet'],
  //   img: 'https://twitter.com/demexchange',
  //   link: 'https://dem.exchange/',
  //   description: 'The Only DEX You Need',
  // },
  // {
  //   title: '0xPPL',
  //   tag: 'ecosystem-tag-infrastructure',
  //   category: ['Mainnet'],
  //   img: 'https://twitter.com/0xppl_',
  //   link: 'https://0xppl.com/home',
  //   description: 'Social network for crypto-natives.',
  // },
  // {
  //   title: 'Redacted',
  //   tag: 'ecosystem-tag-defi',
  //   category: ['Mainnet'],
  //   img: 'https://twitter.com/redactedcartel',
  //   link: 'https://redacted.finance/',
  //   description: 'Stake with the highest yielding $ETH LST',
  // },
  // {
  //   title: 'Macaw',
  //   tag: 'Gaming',
  //   category: ['Mainnet'],
  // },
  // {
  //   title: 'GokeRace',
  //   tag: 'social',
  //   category: ['Mainnet'],
  //   img: 'https://twitter.com/jokerace_io',
  //   link: 'https://jokerace.xyz/',
  //   description:
  //     'The best way for communities to make, execute, and reward decisions. ',
  // },
  // {
  //   title: 'Stellar Gate',
  //   tag: 'Gaming',
  //   category: ['Mainnet'],
  //   img: 'https://twitter.com/stellargate_io',
  //   link: 'https://stellargate.io/',
  //   description:
  //     'Embark on a futuristic space journey in our epic FPS/RTS Crypto Game. Get ready for the ultimate space adventure!',
  // },
  // {
  //   title: 'SAKABA',
  //   tag: 'Identity',
  //   category: ['Mainnet'],
  //   img: 'https://twitter.com/SAKABA_xyz',
  //   link: 'https://beta.sakaba.xyz/',
  //   description:
  //     'Loyalty platform for web3 gaming projects. Quest-based interoperable ID for web3 gamers on EVM ecosystem.',
  // },
  // {
  //   title: 'Nexter',
  //   tag: 'ecosystem-tag-defi',
  //   category: ['Mainnet'],
  //   img: 'https://twitter.com/NexterDotFi',
  //   link: 'https://app.nexter.fi/',
  //   description: 'The Only Multi-chain No-Loss Prediction Market ',
  // },
  // {
  //   title: 'XOX Labs',
  //   tag: 'ecosystem-tag-defi',
  //   category: ['Mainnet'],
  //   img: 'https://twitter.com/Xox_Labs',
  //   link: 'https://xoxlabs.io/pre-sales',
  //   description:
  //     'Scaling Defi: The Next Gen Multichain DeFi Dapps & Web3 Solutions Provider',
  // },
  // {
  //   title: 'WOWMAX.Exchange',
  //   tag: 'ecosystem-tag-defi',
  //   category: 'coming soon',
  //   img: 'https://twitter.com/WowmaxExchange',
  //   link: 'https://wowmax.exchange/',
  //   description:
  //     'WOWMAX is the next generation DEX aggregation protocol that uses slippage as an additional source of optimization. ',
  // },
  // {
  //   title: 'TProtocol',
  //   tag: 'ecosystem-tag-defi',
  //   category: ['Mainnet'],
  //   img: 'https://twitter.com/TProtocol_',
  //   link: 'https://www.tprotocol.io/',
  //   description: 'RWA Ecosystem Hub: The first-ever DeFi ecosystem. ',
  // },
  // {
  //   title: 'Ispolink',
  //   tag: 'ecosystem-tag-defi',
  //   category: ['Mainnet'],
  //   img: 'https://twitter.com/ispolink',
  //   link: 'https://www.ispolink.com/',
  //   description: '$AI-driven Platform for #Web3 Devs | $ISP',
  // },
  // {
  //   title: 'Project Twelve',
  //   tag: 'Gaming',
  //   category: ['Mainnet'],
  //   img: 'https://twitter.com/_p12_?lang=en',
  //   link: 'https://p12.network/',
  //   description:
  //     'Building the first and only GUI Onchain Engine for onchain games and autonomous worlds.',
  // },
  // {
  //   title: 'Particle Network',
  //   tag: 'Infra/Tooling',
  //   category: ['Mainnet'],
  //   img: 'https://twitter.com/ParticleNtwrk',
  //   link: 'https://particle.network/',
  //   description: 'The Intent-Centric Access Layer of Web3.',
  // },
]
let colorsMap = {
  'ecosystem-tag-partner': {
    label: 'zkSBT Partner',
    bg: 'linear-gradient(230.8deg, #51cd76 12.76%, #2ea898 91.45%)',
  },
  'ecosystem-tag-toolings': {
    label: 'Toolings',
    bg: 'linear-gradient(230.8deg, #68b7ff -32.76%, #aaff81 91.45%)',
  },

  'ecosystem-tag-wallet': {
    label: 'Wallets',
    bg: 'linear-gradient(230.8deg, #68b7ff -12.76%, #aaff81 121.45%)',
  },

  'ecosystem-tag-research': {
    label: 'Research Partners',
    bg: 'linear-gradient(313.94deg, #24ebaf -3.5%, #37bce6 111.86%)',
  },

  'ecosystem-tag-parachain': {
    label: 'Atlantic Ecosystem',
    bg: 'linear-gradient(313.94deg, #cae940 -3.5%, #78e672 111.86%)',
  },

  'ecosystem-tag-media': {
    label: 'Media/Education',
    bg: 'linear-gradient(49.74deg, #d13eff -26.13%, #e0b5ff 44.22%, #88ff72 94.47%)',
  },

  'ecosystem-tag-investor': {
    label: 'Investors',
    bg: 'linear-gradient(48.59deg, #5096ff -28.68%, #d59fff 112.73%)',
  },
  'ecosystem-tag-incubator': {
    label: 'Incubator/Accelerators',
    bg: 'linear-gradient(310.2deg, #e4f482 -28.96%, #fcc721 119.97%)',
  },
  'ecosystem-tag-auditor': {
    label: 'Auditors',
    bg: 'linear-gradient(132.08deg, #41ffbc -7.6%, #707fff 73.02%, #ff61f9 108.78%)',
  },
  'ecosystem-tag-gaming': {
    label: 'Gaming/Metaverse',
    bg: 'linear-gradient(131.01deg, #5566ff -7.58%, #9fffff 115.81%)',
  },
  'ecosystem-tag-identity': {
    label: 'Identity',
    bg: 'linear-gradient(131.01deg, #5566ff -7.58%, #9fffff 115.81%)',
  },
  'ecosystem-tag-social': {
    label: 'Social',
    bg: 'linear-gradient(131.01deg, #5566ff -7.58%, #9fffff 115.81%)',
  },
  'ecosystem-tag-infrastructure': {
    label: 'Infrastructure/Bridges',
    bg: 'linear-gradient(131.01deg, #5566ff -7.58%, #9fffff 115.81%)',
  },

  'ecosystem-tag-defi': {
    label: 'DeFi/Payments',
    bg: 'linear-gradient(131.01deg, #5566ff -7.58%, #9fffff 115.81%)',
  },
}

const updateEcosystemProjectsNum = () => {
  const dom = document.getElementById('ecosystem-projects-num')
  if (!dom) return
  dom.innerHTML = arr.length
}

const highlightArr = arr.filter((item) => item.isHighLight)
const nativeArr = arr.filter((item) => item.isNative)

var renderHighlightCard = () => {
  let htmlBank = ''
  const highlightSwiperWrapper = document.getElementById(
    'highlights-swiper-wrapper',
  )
  for (let i = 0; i < highlightArr.length; i++) {
    let item = highlightArr[i]

    htmlBank += `<div class="swiper-slide">
    <a
      class="article-card"
      href=${item.link}
      target="_blank"
    >
      <span class="img-wrap">
        <img
          src=${item.highLightImg}
          alt=${item.title}
        />
      </span>
      <span class="text-wrap">
        <p>
         ${item.description}
        </p>
      </span>
    </a>
  </div>
   `
  }

  if (highlightSwiperWrapper) {
    highlightSwiperWrapper.innerHTML = htmlBank
  }
}

var renderNativeCard = () => {
  let htmlBank = ''
  const nativeSwiperWrapper = document.getElementById('native-swiper-wrapper')
  for (let i = 0; i < nativeArr.length; i++) {
    let item = nativeArr[i]

    htmlBank += `<div class="swiper-slide">
    <a
      class="article-card"
      href=${item.link}
      target="_blank"
    >
      <span class="img-wrap">
        <img
          src=${item.highLightImg}
          alt=${item.title}
        />
      </span>
      <span class="text-wrap">
        <p>
         ${item.description}
        </p>
      </span>
    </a>
  </div>
   `
  }

  if (nativeSwiperWrapper) {
    nativeSwiperWrapper.innerHTML = htmlBank
  }
}

var renderCard = () => {
  let htmlBank = ''

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    const tagArr = item.tag.split(',')

    htmlBank += `<a href="${
      item.link
    }" target="_blank" class="tags-card" data-ecosystem-tag="${item.tag}">
    <div class="card-branch-container">
    ${item.category
      .map((c) => {
        return `<div class="card-branch card-${c}">
            <div class="card-dot ${categoryMap[c].class}"></div>
            <span class="card-branch-text">${categoryMap[c].text}</span>
          </div>`
      })
      .join('')}
          </div>
          <span class="img-wrap img-wrap-center">
              <img src="${item.img}" alt="Logo" width="48" height="48">
          </span>
          <div class="card-tags"> ${tagArr
            .map((tag) => {
              return `<div class="card-tag" style="background:${colorsMap[tag].bg};">${colorsMap[tag].label}</div>`
            })
            .join('')}</div>
         
          <h5>${item.title}</h5>
          <h6>${item.description}</h6>
      </a>`
  }

  if (document.getElementsByClassName('tags-cards-wrap')[0]) {
    document.getElementsByClassName('tags-cards-wrap')[0].innerHTML = htmlBank
  }
}

renderCard()
renderHighlightCard()
renderNativeCard()
updateEcosystemProjectsNum()
