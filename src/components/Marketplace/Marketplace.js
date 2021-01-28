import React from 'react'

import styles from './Marketplace.module.css'

import PostImg from '../PostImg/PostImg'

function Marketplace({marketplacePosts, changeImg, mkFilter, mkCategories, id}) {
    return (
        <div className={styles.marketplace}>
            <h2>Marketplace</h2>

            <div className={styles.btnContainer}>
                {
                    mkCategories.map((category, index) => {
                        return (
                            <button key={index} className="btn" onClick={() => mkFilter(category)}>{category}</button>
                        )
                    })
                }
            </div>

            <div className={styles.innerMk}>
            {
                marketplacePosts.map(post => {
                    const { id, seller, year, brand, model, engine, miles, price, desc, img, userImg, imgIndex } = post

                    return (
                        <div className={styles.itemForSale} key={id}>
                            <PostImg id={id} img={img} changeImg={changeImg} imgIndex={imgIndex} postData={marketplacePosts} />
                            <h4>{year} {brand} {model} <span className={styles.price}>${price}</span></h4>
                            <h5>Mileage: {miles}</h5>
                            <h5>Engine displacement: {engine}</h5>
                            <p>{desc}</p>
                            <div className={styles.userInfo}>
                                <p>{seller}</p>
                                <img src={userImg} alt={seller} className={styles.userImg} />
                            </div>
                            <button className="btn">Contact Seller</button>
                        </div>
                    )
                })
            }
            </div>
        </div>

    )
}



export default Marketplace