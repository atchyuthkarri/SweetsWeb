import React from 'react'
import "./Blogs.css"
import blogimg1 from "../../assets/blog_image.webp"
import blogimg2 from "../../assets/blogimg2.webp"
import blogimg3 from "../../assets/blogimg3.webp"
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
                    <h3>Bellam Sunnundalu: Naturally Sweetened Goodness with Timeless Flavor</h3>
                    <p>Read More</p>
                </div>

                <div>
                    <img src={blogimg3} alt="" />
                    <h3> The Sweet Symbol of Joy, Ritual, and Celebration</h3>
                    <p>Read More</p>
                </div>
            </div>
            {/* <ReviewBanner/> */}
        </div>
  )
}

export default Blogs