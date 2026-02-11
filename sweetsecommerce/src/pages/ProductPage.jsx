import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import { CATEGORY_OPTIONS, PRODUCTS } from '../data/products'

const PAGE_SIZE = 9

const ProductPage = () => {
  const products = PRODUCTS

  const [qty, setQty] = useState({})

  useEffect(() => {
    setQty((prev) => {
      const next = { ...prev }
      for (const p of products) {
        if (next[p.id] == null) next[p.id] = 1
      }
      return next
    })
  }, [products])

  const [selectedCategories, setSelectedCategories] = useState([])
  const [availability, setAvailability] = useState('all')
  const [page, setPage] = useState(1)

  const setProductQty = (id, nextQty) => {
    setQty((prev) => ({
      ...prev,
      [id]: Math.max(1, Number.isFinite(nextQty) ? nextQty : 1),
    }))
  }

  const filteredProducts = useMemo(() => {
    let list = products

    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category))
    }

    if (availability === 'in') {
      list = list.filter((p) => p.available)
    }

    if (availability === 'out') {
      list = list.filter((p) => !p.available)
    }

    return list
  }, [availability, products, selectedCategories])

  useEffect(() => {
    setPage(1)
  }, [availability, selectedCategories])

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageProducts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE
    return filteredProducts.slice(start, start + PAGE_SIZE)
  }, [currentPage, filteredProducts])

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const goToPage = (nextPage) => {
    const clamped = Math.max(1, Math.min(totalPages, nextPage))
    setPage(clamped)
  }

  return (
    <div className="sp-page">
      <div className="sp-topbar">FREE SHIPPING ABOVE RS.1500/- IN PAN INDIA</div>
      <Navbar />

      <main className="sp-main">
        <section className="sp-hero">
          <h1 className="sp-title">Sweets</h1>
          <div className="sp-breadcrumb">
            <span>Home</span>
            <span className="sp-sep">›</span>
            <span>Sweets</span>
          </div>
        </section>

        <section className="sp-content">
          <aside className="sp-filters">
            <h2 className="sp-filters-title">Filters</h2>

            <div className="sp-filter-block">
              <button type="button" className="sp-filter-header">
                <span>Shop by Category</span>
                <span className="sp-caret">^</span>
              </button>
              <ul className="sp-filter-list">
                {CATEGORY_OPTIONS.map((cat) => (
                  <li key={cat}>
                    <label className="sp-check">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                      />
                      <span className="sp-check-label">{cat}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sp-filter-block">
              <button type="button" className="sp-filter-header">
                <span>Availability</span>
                <span className="sp-caret">^</span>
              </button>
              <div className="sp-radio-group" role="group" aria-label="Availability">
                <label className="sp-radio">
                  <input
                    type="radio"
                    name="availability"
                    checked={availability === 'all'}
                    onChange={() => setAvailability('all')}
                  />
                  <span className="sp-check-label">All</span>
                </label>
                <label className="sp-radio">
                  <input
                    type="radio"
                    name="availability"
                    checked={availability === 'in'}
                    onChange={() => setAvailability('in')}
                  />
                  <span className="sp-check-label">In stock</span>
                </label>
                <label className="sp-radio">
                  <input
                    type="radio"
                    name="availability"
                    checked={availability === 'out'}
                    onChange={() => setAvailability('out')}
                  />
                  <span className="sp-check-label">Out of stock</span>
                </label>
              </div>
            </div>
          </aside>

          <div className="sp-products">
            <div className="sp-toolbar">
              <div className="sp-toolbar-left" />
              <div className="sp-toolbar-right">
                <button type="button" className="sp-sort">
                  Featured <span className="sp-sort-caret">˅</span>
                </button>
              </div>
            </div>

            <div className="sp-grid">
              {pageProducts.map((p) => (
                <article key={p.id} className="sp-card">
                  <Link className="sp-card-link" to={`/products/${p.slug}`} aria-label={p.name}>
                    <div className="sp-img-wrap">
                    {p.badge ? <div className="sp-badge">{p.badge}</div> : null}
                    <img className="sp-img" src={p.image} alt={p.name} />
                    </div>
                  </Link>
                  <div className="sp-card-body">
                    <Link className="sp-name sp-name-link" to={`/products/${p.slug}`}>
                      {p.name}
                    </Link>
                    <div className="sp-price">{p.price}</div>
                    <div className="sp-actions">
                      <div className="sp-qty">
                        <button
                          type="button"
                          className="sp-qty-btn"
                          onClick={() => setProductQty(p.id, (qty[p.id] || 1) - 1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <div className="sp-qty-value">{qty[p.id] || 1}</div>
                        <button
                          type="button"
                          className="sp-qty-btn"
                          onClick={() => setProductQty(p.id, (qty[p.id] || 1) + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button type="button" className="sp-add">ADD TO BAG</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="sp-pagination">
              <button
                type="button"
                className="sp-page-btn sp-page-btn--arrow"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage <= 1}
                aria-label="Previous page"
              >
                «
              </button>
              {Array.from({ length: totalPages }).slice(0, 7).map((_, idx) => {
                const p = idx + 1
                return (
                  <button
                    key={p}
                    type="button"
                    className={`sp-page-btn ${p === currentPage ? 'sp-page-btn--active' : ''}`}
                    onClick={() => goToPage(p)}
                    aria-current={p === currentPage ? 'page' : undefined}
                  >
                    {p}
                  </button>
                )
              })}
              {totalPages > 7 ? <span className="sp-page-ellipsis">…</span> : null}
              <button
                type="button"
                className="sp-page-btn sp-page-btn--arrow"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                aria-label="Next page"
              >
                »
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .sp-page {
          background: var(--bg-color);
          color: var(--text-color);
          min-height: 100vh;
        }

        .sp-page .navbar {
          top: 28px;
        }

        .sp-topbar {
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

        .sp-main {
          padding-top: calc(12vh + 28px);
        }

        .sp-hero {
          background: var(--bg-color);
          padding: 0;
          border-bottom: 1px solid var(--border-color);
        }

        .sp-title {
          text-align: center;
          font-family: "M-Heading-Font", Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: 44px;
          padding: 36px 0 22px;
          color: var(--heading-color);
        }

        .sp-breadcrumb {
          width: min(1100px, 90%);
          margin: 0 auto;
          font-size: 11px;
          color: var(--muted-text);
          padding: 10px 0 18px;
        }

        .sp-sep {
          margin: 0 10px;
        }

        .sp-content {
          width: min(1260px, 92%);
          margin: 0 auto;
          padding: 36px 0 70px;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 46px;
        }

        .sp-filters-title {
          font-family: "M-Heading-Font", Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: 28px;
          color: var(--heading-color);
          margin-bottom: 18px;
        }

        .sp-filter-block {
          border-top: 1px solid var(--border-color);
          padding-top: 14px;
          margin-top: 14px;
        }

        .sp-filter-header {
          width: 100%;
          background: transparent;
          border: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          font-size: 13px;
          color: color-mix(in srgb, var(--text-color) 75%, transparent);
          cursor: pointer;
        }

        .sp-caret {
          font-size: 14px;
          color: var(--muted-text);
          transform: translateY(-1px);
        }

        .sp-filter-list {
          list-style: none;
          padding: 4px 0 0;
          margin: 0;
        }

        .sp-filter-list li {
          padding: 6px 0;
          font-size: 12px;
          color: var(--muted-text);
          line-height: 1.15;
        }

        .sp-check,
        .sp-radio {
          display: flex;
          gap: 10px;
          align-items: center;
          cursor: pointer;
          user-select: none;
        }

        .sp-check input,
        .sp-radio input {
          width: 14px;
          height: 14px;
        }

        .sp-check-label {
          font-size: 12px;
          color: var(--muted-text);
        }

        .sp-radio-group {
          display: grid;
          gap: 10px;
          padding: 8px 0 2px;
        }

        .sp-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .sp-sort {
          background: transparent;
          border: 0;
          font-size: 12px;
          color: color-mix(in srgb, var(--text-color) 70%, transparent);
          cursor: pointer;
          padding: 8px 0;
        }

        .sp-sort-caret {
          margin-left: 6px;
          font-size: 12px;
        }

        .sp-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 26px 26px;
        }

        .sp-card {
          background: transparent;
          transition: transform 0.3s ease;
        }

        .sp-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .sp-card:hover {
          transform: translateY(-6px);
        }

        .sp-img-wrap {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          background: color-mix(in srgb, var(--text-color) 2%, transparent);
          transition: box-shadow 0.3s ease;
        }

        .sp-card:hover .sp-img-wrap {
          box-shadow: 0 10px 25px var(--shadow-color);
        }

        .sp-img {
          width: 100%;
          height: 255px;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .sp-card:hover .sp-img {
          transform: scale(1.03);
        }

        .sp-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: var(--primary-color);
          color: var(--button-text);
          font-size: 10px;
          padding: 4px 10px;
          border-radius: 999px;
          z-index: 1;
        }

        .sp-card-body {
          padding-top: 12px;
        }

        .sp-name {
          font-size: 12px;
          color: color-mix(in srgb, var(--text-color) 80%, transparent);
          margin-bottom: 8px;
        }

        .sp-name-link {
          text-decoration: none;
          color: color-mix(in srgb, var(--text-color) 80%, transparent);
          display: inline-block;
        }

        .sp-price {
          font-size: 12px;
          color: var(--primary-color);
          margin-bottom: 12px;
          font-weight: 600;
        }

        .sp-actions {
          display: grid;
          grid-template-columns: 92px 1fr;
          gap: 12px;
          align-items: center;
        }

        .sp-qty {
          height: 34px;
          border: 1px solid color-mix(in srgb, var(--text-color) 25%, transparent);
          border-radius: 999px;
          display: grid;
          grid-template-columns: 34px 1fr 34px;
          align-items: center;
          overflow: hidden;
          background: transparent;
        }

        .sp-qty-btn {
          height: 34px;
          border: 0;
          background: transparent;
          cursor: pointer;
          color: color-mix(in srgb, var(--text-color) 75%, transparent);
          font-size: 16px;
          line-height: 1;
        }

        .sp-qty-value {
          text-align: center;
          font-size: 12px;
          color: color-mix(in srgb, var(--text-color) 80%, transparent);
        }

        .sp-add {
          height: 34px;
          border: 0;
          border-radius: 999px;
          background: var(--button-bg);
          color: var(--button-text);
          font-size: 11px;
          letter-spacing: 0.7px;
          cursor: pointer;
        }

        .sp-pagination {
          display: flex;
          gap: 14px;
          justify-content: center;
          align-items: center;
          margin-top: 34px;
        }

        .sp-page-btn {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          border: 0;
          background: transparent;
          color: var(--muted-text);
          font-size: 12px;
          cursor: pointer;
        }

        .sp-page-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .sp-page-ellipsis {
          color: var(--muted-text);
          font-size: 12px;
          margin: 0 -6px;
        }

        .sp-page-btn--active {
          background: var(--button-bg);
          color: var(--button-text);
        }

        .sp-page-btn--arrow {
          width: 30px;
        }

        @media (max-width: 1100px) {
          .sp-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 820px) {
          .sp-content {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .sp-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default ProductPage