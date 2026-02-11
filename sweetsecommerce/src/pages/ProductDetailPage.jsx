import React, { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import { getProductBySlug, PRODUCTS } from '../data/products'

import HappinessShips from '../assets/Happiness_ships_within_in_1-2_days.svg'
import LovedBy from '../assets/Loved_by_5_lakh_customers.svg'
import MadeWithLove from '../assets/Every_piece_is_made_with_love.svg'
import NoPreservatives from '../assets/No_Preservatives_and_naturally_fresh.svg'

const ProductDetailPage = () => {
  const { slug } = useParams()
  const product = useMemo(() => getProductBySlug(slug), [slug])

  const [qty, setQty] = useState(1)
  const [weight, setWeight] = useState(product?.weights?.[1] || product?.weights?.[0] || '400gm')

  const recommended = useMemo(() => {
    if (!product) return []
    const sameCategory = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug)
    const fallback = PRODUCTS.filter((p) => p.slug !== product.slug)
    return (sameCategory.length > 0 ? sameCategory : fallback).slice(0, 4)
  }, [product])

  if (!product) return <Navigate to="/products" replace />

  return (
    <div className="pd-page">
      <div className="pd-topbar">FREE SHIPPING ABOVE RS.1500/- IN PAN INDIA</div>
      <Navbar />

      <main className="pd-main">
        <section className="pd-wrap">
          <div className="pd-grid">
            <div className="pd-left">
              <div className="pd-img-wrap">
                <img className="pd-img" src={product.image} alt={product.name} />
              </div>
            </div>

            <div className="pd-right">
              <div className="pd-meta">
                <div className="pd-chip">{product.category.toUpperCase()}</div>
                <h1 className="pd-title">{product.name}</h1>
                <p className="pd-desc">{product.shortDescription}</p>

                <div className="pd-price">{product.price}</div>
                <div className="pd-tax">Tax included.</div>

                <div className="pd-section">
                  <div className="pd-label">WEIGHT</div>
                  <div className="pd-weights">
                    {(product.weights || ['400gm']).map((w) => (
                      <button
                        key={w}
                        type="button"
                        className={`pd-weight ${w === weight ? 'pd-weight--active' : ''}`}
                        onClick={() => setWeight(w)}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pd-section">
                  <div className="pd-label">QUANTITY</div>
                  <div className="pd-qty-row">
                    <div className="pd-qty" role="group" aria-label="Quantity">
                      <button
                        type="button"
                        className="pd-qty-btn"
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <div className="pd-qty-value">{qty}</div>
                      <button
                        type="button"
                        className="pd-qty-btn"
                        onClick={() => setQty((q) => q + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button type="button" className="pd-add">ADD TO CART</button>
                  </div>
                </div>

                <div className="pd-note">For Faster Delivery Only In Hyderabad, Order Via Zomato Or Swiggy Or WhatsApp.</div>

                <div className="pd-cta-row">
                  <button type="button" className="pd-cta pd-cta--swiggy">SWIGGY</button>
                  <button type="button" className="pd-cta pd-cta--zomato">zomato</button>
                </div>
                <button type="button" className="pd-cta pd-cta--wa">ORDER ON | WHATSAPP</button>

                <div className="pd-icons">
                  <div className="pd-icon">10 Days Of Shelf Life</div>
                  <div className="pd-icon">Delivery Within 3-5 Days</div>
                  <div className="pd-icon">International Shipping</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pd-strip">
          <div className="pd-strip-item">
            <img src={HappinessShips} alt="Happiness ships within 1-2 days" />
            <div>Happiness ships within in 1-2 days</div>
          </div>
          <div className="pd-strip-item">
            <img src={LovedBy} alt="Loved by 5 lakh+ customers" />
            <div>Loved by 5 lakh+ customers</div>
          </div>
          <div className="pd-strip-item">
            <img src={MadeWithLove} alt="Every piece is made with love" />
            <div>Every piece is made with love</div>
          </div>
          <div className="pd-strip-item">
            <img src={NoPreservatives} alt="No preservatives and naturally fresh" />
            <div>No Preservatives and naturally fresh</div>
          </div>
        </section>

        <section className="pd-reco">
          <div className="pd-reco-title">We Think You'll Like These Too!</div>
          <div className="pd-reco-sub">These are some of our favorite treats too, add it to your cart to make it an extra sweet party!</div>

          <div className="pd-reco-grid">
            {recommended.map((p) => (
              <div key={p.slug} className="pd-reco-card">
                <Link className="pd-reco-img" to={`/products/${p.slug}`}>
                  <img src={p.image} alt={p.name} />
                </Link>
                <div className="pd-reco-body">
                  <div className="pd-reco-name">{p.name}</div>
                  <div className="pd-reco-price">{p.price}</div>
                  <div className="pd-reco-actions">
                    <div className="pd-mini-qty">
                      <button type="button" className="pd-mini-btn">−</button>
                      <div className="pd-mini-value">1</div>
                      <button type="button" className="pd-mini-btn">+</button>
                    </div>
                    <button type="button" className="pd-mini-add">ADD TO BAG</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pd-reviews">
          <div className="pd-reviews-inner">
            <div className="pd-reviews-title">Customer Reviews</div>

            <div className="pd-reviews-top">
              <div className="pd-score">
                <div className="pd-stars">★★★★☆</div>
                <div className="pd-score-text">4.15 out of 5</div>
                <div className="pd-score-sub">Based on 20 reviews</div>
              </div>

              <div className="pd-bars">
                {[5, 4, 3, 2, 1].map((s) => (
                  <div key={s} className="pd-bar-row">
                    <div className="pd-bar-stars">{'★'.repeat(s)}</div>
                    <div className="pd-bar">
                      <div className="pd-bar-fill" style={{ width: `${s === 5 ? 60 : s === 4 ? 25 : s === 3 ? 10 : 5}%` }} />
                    </div>
                    <div className="pd-bar-count">{s === 5 ? 13 : s === 4 ? 3 : s === 3 ? 2 : s === 2 ? 1 : 1}</div>
                  </div>
                ))}
              </div>

              <div className="pd-review-cta">
                <button type="button" className="pd-write">Write a review</button>
              </div>
            </div>

            <div className="pd-review-list">
              <div className="pd-review">
                <div className="pd-review-stars">★★☆☆☆</div>
                <div className="pd-review-name">Anonymous <span className="pd-verified">Verified</span></div>
                <div className="pd-review-title">Worst quality {product.name.toLowerCase()} I ever</div>
                <div className="pd-review-text">Worst quality {product.name.toLowerCase()} I ever had</div>
              </div>
              <div className="pd-review">
                <div className="pd-review-stars">★★★★★</div>
                <div className="pd-review-name">Supriya Acharya <span className="pd-verified">Verified</span></div>
                <div className="pd-review-title">Excellent taste and flavor</div>
                <div className="pd-review-text">Excellent taste and flavor. Not overwhelmingly sweet, just right for the taste buds to enjoy!</div>
              </div>
            </div>
          </div>
        </section>

        <section className="pd-back">
          <Link className="pd-back-link" to="/products">← Back to products</Link>
        </section>
      </main>

      <Footer />

      <style>{`
        .pd-page {
          background: var(--bg-color);
          color: var(--text-color);
          min-height: 100vh;
        }

        .pd-page .navbar {
          top: 28px;
        }

        .pd-topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 28px;
          background: var(--primary-color);
          color: var(--button-text);
          font-size: 11px;
          letter-spacing: 0.8px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1200;
        }

        .pd-main {
          padding-top: calc(12vh + 28px);
        }

        .pd-wrap {
          width: min(1260px, 92%);
          margin: 0 auto;
          padding: 40px 0 26px;
        }

        .pd-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 34px;
          align-items: start;
        }

        .pd-img-wrap {
          border-radius: 14px;
          overflow: hidden;
          background: color-mix(in srgb, var(--text-color) 2%, transparent);
        }

        .pd-img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          display: block;
        }

        .pd-chip {
          display: inline-flex;
          align-items: center;
          height: 24px;
          padding: 0 10px;
          border-radius: 999px;
          background: var(--primary-color);
          color: var(--button-text);
          font-size: 10px;
          letter-spacing: 0.8px;
          margin-bottom: 14px;
        }

        .pd-title {
          font-family: "M-Heading-Font", Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: 36px;
          color: var(--heading-color);
          margin: 0 0 8px;
        }

        .pd-desc {
          font-size: 12px;
          color: var(--muted-text);
          margin: 0 0 18px;
          line-height: 1.5;
        }

        .pd-price {
          font-size: 18px;
          color: var(--heading-color);
          font-weight: 700;
          margin-bottom: 6px;
        }

        .pd-tax {
          font-size: 11px;
          color: color-mix(in srgb, var(--text-color) 60%, transparent);
          margin-bottom: 20px;
        }

        .pd-section {
          margin-bottom: 18px;
        }

        .pd-label {
          font-size: 10px;
          letter-spacing: 1px;
          color: var(--muted-text);
          margin-bottom: 10px;
        }

        .pd-weights {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pd-weight {
          border: 1px solid color-mix(in srgb, var(--text-color) 25%, transparent);
          background: transparent;
          color: color-mix(in srgb, var(--text-color) 70%, transparent);
          height: 32px;
          padding: 0 14px;
          border-radius: 999px;
          cursor: pointer;
          font-size: 11px;
        }

        .pd-weight--active {
          background: var(--button-bg);
          color: var(--button-text);
          border-color: var(--button-bg);
        }

        .pd-qty-row {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 12px;
          align-items: center;
        }

        .pd-qty {
          height: 34px;
          border: 1px solid color-mix(in srgb, var(--text-color) 25%, transparent);
          border-radius: 999px;
          display: grid;
          grid-template-columns: 34px 1fr 34px;
          align-items: center;
          overflow: hidden;
        }

        .pd-qty-btn {
          height: 34px;
          border: 0;
          background: transparent;
          cursor: pointer;
          color: color-mix(in srgb, var(--text-color) 75%, transparent);
          font-size: 16px;
          line-height: 1;
        }

        .pd-qty-value {
          text-align: center;
          font-size: 12px;
          color: color-mix(in srgb, var(--text-color) 80%, transparent);
        }

        .pd-add {
          height: 34px;
          border: 0;
          border-radius: 999px;
          background: var(--button-bg);
          color: var(--button-text);
          font-size: 11px;
          letter-spacing: 0.7px;
          cursor: pointer;
        }

        .pd-note {
          margin-top: 10px;
          font-size: 11px;
          color: var(--muted-text);
        }

        .pd-cta-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 14px;
        }

        .pd-cta {
          height: 40px;
          border: 0;
          border-radius: 10px;
          color: var(--button-text);
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.6px;
        }

        .pd-cta--swiggy {
          background: var(--swiggy-color);
        }

        .pd-cta--zomato {
          background: var(--zomato-color);
          text-transform: lowercase;
          font-size: 18px;
          font-family: Arial, sans-serif;
        }

        .pd-cta--wa {
          width: 100%;
          margin-top: 10px;
          background: var(--whatsapp-color);
        }

        .pd-icons {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 18px;
        }

        .pd-icon {
          text-align: center;
          font-size: 10px;
          color: var(--muted-text);
          padding-top: 8px;
          border-top: 1px solid var(--border-color);
        }

        .pd-strip {
          width: min(1260px, 92%);
          margin: 18px auto 0;
          background: var(--primary-color);
          border-radius: 10px;
          color: var(--button-text);
          padding: 18px 20px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .pd-strip-item {
          display: grid;
          grid-template-columns: 22px 1fr;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          opacity: 0.95;
        }

        .pd-strip-item img {
          width: 22px;
          height: 22px;
          filter: brightness(0) invert(1);
        }

        .pd-reco {
          width: min(1260px, 92%);
          margin: 0 auto;
          padding: 42px 0;
          text-align: center;
        }

        .pd-reco-title {
          font-family: "M-Heading-Font", Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: 34px;
          color: var(--heading-color);
          margin-bottom: 8px;
        }

        .pd-reco-sub {
          font-size: 12px;
          color: var(--muted-text);
          margin-bottom: 24px;
        }

        .pd-reco-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
          text-align: left;
        }

        .pd-reco-card {
          background: transparent;
          transition: transform 0.3s ease;
        }

        .pd-reco-card:hover {
          transform: translateY(-6px);
        }

        .pd-reco-img {
          display: block;
          border-radius: 14px;
          overflow: hidden;
          background: color-mix(in srgb, var(--text-color) 2%, transparent);
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          transition: box-shadow 0.3s ease;
        }

        .pd-reco-card:hover .pd-reco-img {
          box-shadow: 0 10px 25px var(--shadow-color);
        }

        .pd-reco-img img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .pd-reco-card:hover .pd-reco-img img {
          transform: scale(1.03);
        }

        .pd-reco-body {
          padding-top: 10px;
        }

        .pd-reco-name {
          font-size: 12px;
          color: color-mix(in srgb, var(--text-color) 80%, transparent);
          margin-bottom: 8px;
        }

        .pd-reco-price {
          font-size: 12px;
          color: var(--primary-color);
          margin-bottom: 12px;
          font-weight: 600;
        }

        .pd-reco-actions {
          display: grid;
          grid-template-columns: 92px 1fr;
          gap: 12px;
          align-items: center;
        }

        .pd-mini-qty {
          height: 34px;
          border: 1px solid color-mix(in srgb, var(--text-color) 25%, transparent);
          border-radius: 999px;
          display: grid;
          grid-template-columns: 34px 1fr 34px;
          align-items: center;
          overflow: hidden;
        }

        .pd-mini-btn {
          height: 34px;
          border: 0;
          background: transparent;
          cursor: pointer;
          color: color-mix(in srgb, var(--text-color) 75%, transparent);
          font-size: 16px;
          line-height: 1;
        }

        .pd-mini-value {
          text-align: center;
          font-size: 12px;
          color: color-mix(in srgb, var(--text-color) 80%, transparent);
        }

        .pd-mini-add {
          height: 34px;
          border: 0;
          border-radius: 999px;
          background: var(--button-bg);
          color: var(--button-text);
          font-size: 11px;
          letter-spacing: 0.7px;
          cursor: pointer;
        }

        .pd-reviews {
          width: min(1260px, 92%);
          margin: 0 auto;
          padding-bottom: 48px;
        }

        .pd-reviews-inner {
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 26px 22px;
          background: rgba(255, 255, 255, 0.15);
        }

        .pd-reviews-title {
          text-align: center;
          font-family: "M-Heading-Font", Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: 26px;
          color: var(--heading-color);
          margin-bottom: 18px;
        }

        .pd-reviews-top {
          display: grid;
          grid-template-columns: 1fr 1.2fr 0.6fr;
          gap: 18px;
          align-items: start;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--border-color);
        }

        .pd-stars {
          color: var(--secondary-color);
          font-size: 14px;
          margin-bottom: 6px;
        }

        .pd-score-text {
          font-size: 12px;
          color: color-mix(in srgb, var(--text-color) 70%, transparent);
          margin-bottom: 4px;
        }

        .pd-score-sub {
          font-size: 11px;
          color: color-mix(in srgb, var(--text-color) 60%, transparent);
        }

        .pd-bar-row {
          display: grid;
          grid-template-columns: 70px 1fr 22px;
          gap: 10px;
          align-items: center;
          margin-bottom: 6px;
        }

        .pd-bar-stars {
          font-size: 10px;
          color: var(--secondary-color);
        }

        .pd-bar {
          height: 8px;
          border-radius: 999px;
          background: var(--border-color);
          overflow: hidden;
        }

        .pd-bar-fill {
          height: 100%;
          background: var(--secondary-color);
        }

        .pd-bar-count {
          font-size: 10px;
          color: var(--muted-text);
          text-align: right;
        }

        .pd-review-cta {
          display: flex;
          justify-content: flex-end;
        }

        .pd-write {
          height: 34px;
          border: 0;
          padding: 0 16px;
          border-radius: 4px;
          background: var(--secondary-color);
          color: var(--button-text);
          cursor: pointer;
          font-size: 11px;
        }

        .pd-review-list {
          padding-top: 16px;
          display: grid;
          gap: 16px;
        }

        .pd-review {
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
        }

        .pd-review-stars {
          color: var(--secondary-color);
          font-size: 12px;
          margin-bottom: 6px;
        }

        .pd-review-name {
          font-size: 11px;
          color: color-mix(in srgb, var(--text-color) 70%, transparent);
          margin-bottom: 8px;
        }

        .pd-verified {
          margin-left: 8px;
          padding: 2px 6px;
          background: var(--secondary-color);
          color: var(--button-text);
          border-radius: 4px;
          font-size: 9px;
        }

        .pd-review-title {
          font-size: 12px;
          font-weight: 700;
          color: color-mix(in srgb, var(--text-color) 75%, transparent);
          margin-bottom: 6px;
        }

        .pd-review-text {
          font-size: 11px;
          color: var(--muted-text);
          line-height: 1.5;
        }

        .pd-back {
          width: min(1260px, 92%);
          margin: 0 auto;
          padding: 0 0 44px;
        }

        .pd-back-link {
          text-decoration: none;
          color: color-mix(in srgb, var(--text-color) 70%, transparent);
          font-size: 12px;
        }

        @media (max-width: 1100px) {
          .pd-grid {
            grid-template-columns: 1fr;
          }

          .pd-img {
            height: 420px;
          }

          .pd-strip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pd-reco-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pd-reviews-top {
            grid-template-columns: 1fr;
          }

          .pd-review-cta {
            justify-content: flex-start;
          }
        }

        @media (max-width: 640px) {
          .pd-strip {
            grid-template-columns: 1fr;
          }

          .pd-reco-grid {
            grid-template-columns: 1fr;
          }

          .pd-qty-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default ProductDetailPage
