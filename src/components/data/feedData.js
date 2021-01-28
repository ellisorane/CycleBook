import { sub } from 'date-fns'
import { nanoid } from 'nanoid'

import r6 from './imgs/feed/2020-yamaha-r6.jpg'
import busa from './imgs/feed/2020-suzuki-hyabusa.jpg'
import honda from './imgs/feed/2019-honda-cb300r.jpg'
import defaultUser from './imgs/user_default.png'
import mach20_1 from './imgs/feed/mach20_1.jpeg'
import mach20_2 from './imgs/feed/mach20_2.jpg'
import mach20_3 from './imgs/feed/mach20_3.jpg'
import mach20_4 from './imgs/feed/mach20_4.jpg'

const postData = [
    {
      id: nanoid(),
      username: 'JakeYchan',
      userImg: defaultUser,
      img: [r6],
      title: 'New R6',
      content: 'Just bought my new 2020 Yamaha R6 so excited to share!😜😜',
      // date: sub(new Date(), { minutes: 5 }).toISOString(),
      reactions: {
          clicked: false,
          likes: 153,
      },
      comments: [
        {
          user: 'WipItPhill',
          comment: 'Nice'
        },
        {
          user: 'Odaley65',
          comment: 'Where you buy that at? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ],
        imgIndex: 0,
    },
    {
      id: nanoid(),
      username: 'Mach20',
      img: [mach20_1, mach20_2, mach20_3, mach20_4],
      userImg: defaultUser,
      title: 'Motorcycle photographer',
      content: 'Hi guys🙋‍♂️, I\'m a professional motorcycle photographer. Let me know if you want some photos taken. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      // date: sub(new Date(), { minutes: 12 }).toISOString(),
      reactions: {
          clicked: false,
          likes: 5648,
      },
      comments: [
        {
          user: 'arema Allsers',
          comment: 'Nice shots! I\'m interested in your services.'
        }
      ],
        imgIndex: 0,
    },
    {
      id: nanoid(),
      username: 'RainMan67',
      img: [busa],
      userImg: defaultUser,
      title: 'Took it to the track today',
      content: 'Took my Hyabusa to the track today....almost died lol💀. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      // date: sub(new Date(), { minutes: 10 }).toISOString(),
      reactions: {
          clicked: false,
          likes: 4654,
      },
      comments: [
        {
          user: 'Busabrothe3rd',
          comment: 'Nice busa bro! We gotta race one of these days.'
        }
      ],
        imgIndex: 0,
    },
    {
      id: nanoid(),
      username: 'Finn Jacobs',
      img: [honda],
      userImg: defaultUser,
      title: 'Beginner here',
      content: 'Beginner rider here. Hi guys🙋‍♂️',
      // date: sub(new Date(), { minutes: 15 }).toISOString(),
      reactions: {
          clicked: false,
          likes: 110,
      },
      comments: [
        {
          user: 'therider065',
          comment: 'Hi welcome to the community.'
        }
      ],
        imgIndex: 0,
    },
    
]
  
export default postData
  