const courses = [
    {
        name: 'Crypto from A to Z',
        desc: 'A fundamental course on cryptocurrencies for beginners',
        progress: 0,
        isStarted:false,
        img:'courses1'
    }, 
    {
        name: 'Crypto Arbitrage',
        desc: 'Basics of earning through P2P trading',
        progress: 20,
        isStarted:true,
        img:'courses2'
    }, 
    {
        name: 'Trading Basics',
        desc: 'Fundamental trading skills training',
        progress: 75,
        isStarted:true,
        img:'courses3'
    }
    
]
const projects = [
    {
        name: 'Ivendpay',
        active: null    ,
        isPublic: false,
        isMember:false,
        img:'projects1'
    }, 
    {
        name: 'SolarGrid',
        active: 3,
        isPublic: false,
        isMember:true,
        img:'projects2'
    }, 
    {
        name: 'Chain GPT',
        active: 2,
        isPublic: false,
        isMember:true,
        img:'projects3'
    }
]
const feeds = [
    {
        name: 'Ethan Campbell',
        avatar:'user1',
        date: 'Aug 1 10:57 pm',
        text: 'Which site should you start with to get acquainted with cryptocurrencies? Coinmarketcap.com is definitely the top choice. Here, you’ll find a vast list of cryptocurrencies with their real-time prices and trends. There’s also a wealth of statistics, analytics, charts, and more. You can create your own portfolio, access the latest news, join communities for specific projects, and much more. But let’s go through everything step by step.\n\n Which site should you start with to get acquainted with cryptocurrencies? Coinmarketcap.com is definitely the top choice. Here, you’ll find a vast list of cryptocurrencies with their real-time prices and trends. There’s also a wealth of statistics, analytics, charts, and more. You can create your own portfolio, access the latest news, join communities for specific projects, and much more. But let’s go through everything step by step.',
        likes: 1,
        comments:[
            {   name: 'Ava Roberts',
                avatar:'user2',
                date: 'Aug 1 10:57 pm',
                text: '💯 💯 💯',
            },
            {   name: 'Ethan Campbell',
                avatar:'user1',
                date: 'Aug 1 10:57 pm',
                text: 'hi!',
            },
            {   name: 'James Smith',
                avatar:'user3',
                date: 'Aug 1 10:57 pm',
                text: 'cool',
            }
        ],
        img:'projects1'
    },
    {
        name: 'Ava Roberts',
        avatar:'user2',
        date: 'Aug 1 10:59 pm',
        text: '2023 is shaping up to be an exciting year for cryptocurrency. Here are some key trends to watch:\n\n1. DeFi and Staking: Decentralized finance continues to gain traction. Staking options are becoming more accessible, allowing users to earn passive income on their assets.\n\n2. NFTs and Metaverses: Non-fungible tokens are expanding beyond art and collectibles into gaming and virtual real estate. New projects are emerging, creating unique...',
        likes: 162,
        comments:[
            {   name: 'James Smith',
                avatar:'user3',
                date: 'Aug 1 10:57 pm',
                text: 'GREAT!!!!',
            }
        ],
        img:'projects1'
    },
    {
        name: 'James Smith',
        avatar:'user3',
        date: 'Aug 1 10:57 pm',
        text: 'As we dive deeper into the world of cryptocurrency, let`s discuss why investing in this space could be a game-changer for your financial future.\n\n1. Diversification: Cryptocurrencies can be a great addition to your investment portfolio. They often behave differently than traditional assets, which can help reduce overall risk.\n\n2. Growth Potential: Many cryptocurrencies, like Bitcoin and Ethereum, have shown remarkable growth over the years. Getting in early can lead to substantial returns...',
        likes: 10,
        comments:[],
        img:'projects1'
    }
]
export { courses, projects, feeds };