import React from 'react'
import "./Blogs.css"
import blogimg1 from "../../assets/blog_image.webp"
import blogimg2 from "../../assets/blogimg2.webp"
import blogimg3 from "../../assets/blogimg3.webp"
import happinessShips from "../../assets/Happiness_ships_within_in_1-2_days.svg"
import Lovedby from "../../assets/Loved_by_5_lakh_customers.svg"
import NoPreservatives from "../../assets/No_Preservatives_and_naturally_fresh.svg"
import EveryPiece from "../../assets/Every_piece_is_made_with_love.svg"
// import ReviewBanner from "../ReviewBanner"

const Blogs = () => {
  return (
        <div className='blog-container'>
            <h1>Latest Blogs</h1>
            <div className='blog-content'>
                <div>
                    <img src={blogimg1} className='img' alt="" />
                    <h3>Bellam Sunnundalu: Traditional Indian Sweet with a Modern Twist</h3>
                    <p>Read More</p>
                </div>

                <div>
                    <img src={blogimg2} alt="" />
                    <h3>Satisfy your sweet tooth: Unveiling G.Pulla Reddy-Hyderabad's Top Most Sweet Shop</h3>
                    <p>Read More</p>
                </div>

                <div>
                    <img src={blogimg3} alt="" />
                    <h3>G Pulla Reddy Sweets Experience Tradition With Every Bite</h3>
                    <p>Read More</p>
                </div>
            </div>
            {/* <ReviewBanner/> */}
        </div>
  )
}

export default Blogs