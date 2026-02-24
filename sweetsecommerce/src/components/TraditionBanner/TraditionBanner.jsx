import React from 'react'
import "./TraditionBanner.css"
import traditional from "../../assets/Traditional.svg"
import purity from "../../assets/Purity.svg"
import socialresponsibility from "../../assets/Social_Responsibility.svg"

const TraditionBanner = () => {
  const values = [
    {
      icon: traditional,
      title: "Traditional",
      description: "Crafting traditional Indian delicacies with love and expertise for generations. Each sweet tells a story of heritage, flavor, and sweet memories."
    },
    {
      icon: purity,
      title: "Purity",
      description: "Made with our finest cattle ghee, ensuring each bite is a taste of pure bliss and authentic tradition."
    },
    {
      icon: socialresponsibility,
      title: "Social Responsibility",
      description: "Establishing schools and colleges to nurture minds and uplift communities for a brighter future."
    }
  ];

  return (
    <section className="tradition-banner">
      <div className="banner-container">
        <header className="banner-header">
          <h1 className="banner-title">Our Values</h1>
          <p className="banner-subtitle">Tradition, purity, and community</p>
        </header>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">
                <img src={value.icon} alt={value.title} />
              </div>
              <div className="value-content">
                <h2 className="value-title">{value.title}</h2>
                <p className="value-description">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TraditionBanner