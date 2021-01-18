import React from 'react'

import styles from './Marketplace.module.css'

import PostImg from '../Feed/PostImg/PostImg'

function Marketplace({marketplacePosts, changeImg, postImgIndex, mkFilter, mkCategories}) {
    return (
        <div className={styles.marketplace}>
            <h2>Marketplace</h2>

            <div className={styles.btnContainer}>
                {
                    mkCategories.map((category, index) => {
                        return (
                            <button key={index} className={styles.mkBtn} onClick={() => mkFilter(category)}>{category}</button>
                        )
                    })
                }
            </div>

            {
                marketplacePosts.map(post => {
                    const { id, seller, year, brand, model, engine, miles, price, desc, img, userImg } = post

                    return (
                        <div className={styles.itemForSale} key={id}>
                            <PostImg img={img} changeImg={changeImg} postImgIndex={postImgIndex} />
                            <h4>{year} {brand} {model} <span className={styles.price}>${price}</span></h4>
                            <h5>Mileage: {miles}</h5>
                            <h5>Engine displacement: {engine}</h5>
                            <p>{desc}</p>
                            <div className={styles.userInfo}>
                                <p>{seller}</p>
                                <img src={userImg} alt={seller} className={styles.userImg} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}



export default Marketplace