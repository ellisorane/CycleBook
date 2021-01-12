import { sub } from 'date-fns'
import { nanoid } from 'nanoid'

import r6 from './imgs/2020-yamaha-r6.jpg'
import busa from './imgs/2020-suzuki-hyabusa.jpg'
import honda from './imgs/2019-honda-cb300r.jpg'
import defaultUser from './imgs/user_default.png'

const postData = [
    {
      id: nanoid(),
      username: 'JakeYchans',
      userImg: defaultUser,
      img: r6,
      title: 'New R6',
      content: 'Just bought my new 2020 Yamaha R6 so excited to share!😜😜',
      date: sub(new Date(), { minutes: 5 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        thumbsDown: 0,
        favorite: 0,
      },
    },
    {
      id: nanoid(),
      username: 'RainMan67',
      img: busa,
      userImg: defaultUser,
      title: 'Took it to the track today',
      content: 'Took my Hyabusa to the track today....almost died lol💀. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        thumbsDown: 0,
        favorite: 0,
      },
    },
    {
      id: nanoid(),
      username: 'Finn Jacobs',
      img: honda,
      userImg: defaultUser,
      title: 'Beginner here',
      content: 'Beginner rider here. Hi guys🙋‍♂️',
      date: sub(new Date(), { minutes: 15 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        thumbsDown: 0,
        favorite: 0,
      },
    },
]
  
export default postData
  