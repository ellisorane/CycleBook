import { nanoid } from "nanoid";

import defaultUser from './imgs/user_default.png'
import sam1 from "./imgs/marketplace/sam-simm/1.jpg"
import sam2 from "./imgs/marketplace/sam-simm/2.jpg"
import sam3 from "./imgs/marketplace/sam-simm/3.jpg"
import sam4 from "./imgs/marketplace/sam-simm/4.jpg"
import manowar1 from "./imgs/marketplace/manowar/1.jpg"
import manowar2 from "./imgs/marketplace/manowar/2.jpg"
import manowar3 from "./imgs/marketplace/manowar/3.jpg"
import redkat1 from "./imgs/marketplace/redkat/1.jpg"
import redkat2 from "./imgs/marketplace/redkat/2.jpg"
import redkat3 from "./imgs/marketplace/redkat/3.jpg"
import redkat4 from "./imgs/marketplace/redkat/4.jpg"
import redkat5 from "./imgs/marketplace/redkat/5.jpg"
import willshirt1 from "./imgs/marketplace/willshirt/1.jpg"
import willshirt2 from "./imgs/marketplace/willshirt/2.jpg"
import willshirt3 from "./imgs/marketplace/willshirt/3.jpg"
import george1 from "./imgs/marketplace/george/1.jpg"
import george2 from "./imgs/marketplace/george/2.jpg"


const marketplaceData = [
    {
        id: nanoid(),
        seller: 'Sam Simm',
        year: 2006,
        brand: 'Suzuki',
        model: 'GSX-R 600',
        engine: "600cc",
        miles: 19000,
        price: 4000,
        desc: "Nice Gsxr600 great for a first time bike owner. Serious buyers only. No joy rides. No trades in",
        img: [sam1, sam2, sam3, sam4],
        userImg: defaultUser,
        imgIndex: 0
    },
    {
        id: nanoid(),
        seller: 'Manowar',
        year: 2014,
        brand: 'Honda',
        model: 'CBR500r',
        engine: "500cc",
        miles: 14574,
        price: 5200,
        desc: "2014 cbr500r with 14,500 miles. I’ve owned this bike for about 2 years now and have used it as a commuter during that time. Bike had fresh tires, chain, and oil change at the end of summer with minimal miles on it now. It’s mostly stock with the exception of the exhaust. I also have some spare parts to go with it like a full set of brake pads, oil filter, and a suspension lowing link. Asking $3,500. Feel free to message with any questions.",
        img: [manowar1, manowar2, manowar3],
        userImg: defaultUser,
        imgIndex: 0
    },
    {
        id: nanoid(),
        seller: 'reDkAt',
        year: 2013,
        brand: 'Honda',
        model: 'CBR500r',
        engine: "500cc",
        miles: 15500,
        price: 3200,
        desc: "Selling my CBR500R.New tires, new chain, new battery. Aftermarket shorty levers (both clutch and front brake), aftermarket shorty slip on exhaust. LED DRL’s with switchback blinkers. I have a Two Brothers slip on as well (costs $780) Very nice bike for starters, but it’s got some power to it, too. Well maintained and taken care of. Cash offers only, price is negotiable within reason.  Clean title in hand. ",
        img: [redkat1, redkat2, redkat3, redkat4, redkat5],
        userImg: defaultUser,
        imgIndex: 0
    },
    {
        id: nanoid(),
        seller: 'WillShirt',
        year: 2008,
        brand: 'Yamaha',
        model: 'Raider',
        engine: "1854cc",
        miles: 16000,
        price: 5000,
        desc: "Low mileage LOTS of power. No accidents, clean title.",
        img: [willshirt1, willshirt2, willshirt3],
        userImg: defaultUser,
        imgIndex: 0
    },
    {
        id: nanoid(),
        seller: 'George Gregory',
        year: 2003,
        brand: 'Kawasaki',
        model: 'Z1000SX',
        engine: "1000cc",
        miles: 17000,
        price: 3645,
        desc: "First come first served.",
        img: [george1, george2],
        userImg: defaultUser,
        imgIndex: 0
    },
]

export default marketplaceData