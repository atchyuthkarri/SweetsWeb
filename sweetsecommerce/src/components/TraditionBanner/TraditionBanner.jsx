import React from 'react'
import "./TraditionBanner.css"
import traditional from "../../assets/Traditional.svg"
import purity from "../../assets/Purity.svg"
import socialresponsibility from "../../assets/Social_Responsibility.svg"

const TraditionBanner = () => {
  return (
    <>
    <div className='banner'>
            <h1>Our Sweet Traditions</h1>
        <div className='banner-content'>
            <div className='content-items'>
                <img src={traditional} alt="" />
                <div className='content-description'>
                    <h1>Traditional</h1>
                    <p>From humble beginnings in a small town to a beloved household name, We have been crafting traditional Indian delicacies with love and expertise for generations. Each sweet tells a story of heritage, flavor, and sweet memories shared across families.</p>
                </div>
            </div>

            <div className='content-items'>
                <img src={purity} alt="" />
                <div className='content-description'>
                    <h1>Purity</h1>

                    <p>Crafted with purity and tradition, our sweets are made with our finest cattle ghee, ensuring each bite is a taste of pure bliss.</p>
                </div>
            </div>

            <div className='content-items'>
                <img src={socialresponsibility} alt="" />
                <div className='content-description'>
                    <h1>Social Responsibility</h1>
                    <p>We not only delighted taste buds but also nurtured minds. By establishing schools and colleges for students, we embody a commitment to uplift the community and pave the way for a brighter future.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TraditionBanner