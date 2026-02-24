import React, { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import { CATEGORY_OPTIONS, PRODUCTS } from '../data/products'
import './ProductPage.css'

const ProductPage = ({
  pageProducts = PRODUCTS.slice(0, 8), // Use first 8 real products
  selectedCategories = [],
  toggleCategory = () => {},
  availability = 'all',
  setAvailability = () => {},
  goToPage = () => {},
  currentPage = 1,
  totalPages = 3,
}) => {
  const [page, setPage] = useState(currentPage)
  const [categories, setCategories] = useState(selectedCategories)
  const [availabilityFilter, setAvailabilityFilter] = useState(availability)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  
  const triggerAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 500)
  }
  
  const toggleMobileFilter = () => {
    setMobileFilterOpen(!mobileFilterOpen)
  }
  
  const closeMobileFilter = () => {
    setMobileFilterOpen(false)
  }
  
  const handlePageChange = (pageNumber) => {
    triggerAnimation()
    setPage(pageNumber)
    goToPage(pageNumber)
  }
  
  const handleCategoryToggle = (category) => {
    triggerAnimation()
    const newCategories = categories.includes(category)
      ? categories.filter(cat => cat !== category)
      : [...categories, category]
    setCategories(newCategories)
    toggleCategory(category)
    setPage(1) // Reset to first page when filter changes
    closeMobileFilter() // Close mobile filter on selection
  }
  
  const handleAvailabilityChange = (value) => {
    triggerAnimation()
    setAvailabilityFilter(value)
    setAvailability(value)
    setPage(1) // Reset to first page when filter changes
    closeMobileFilter() // Close mobile filter on selection
  }
  
  // Filter products based on selected categories and availability
  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS
    
    // Filter by categories
    if (categories.length > 0) {
      filtered = filtered.filter(product => 
        categories.includes(product.category)
      )
    }
    
    // Filter by availability
    if (availabilityFilter === 'in') {
      filtered = filtered.filter(product => product.available)
    } else if (availabilityFilter === 'out') {
      filtered = filtered.filter(product => !product.available)
    }
    
    return filtered
  }, [categories, availabilityFilter])
  
  const productsPerPage = 8
  const totalPagesCalculated = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (page - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

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
                        checked={categories.includes(cat)}
                        onChange={() => handleCategoryToggle(cat)}
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

              <div className="sp-radio-group">
                <label className="sp-radio">
                  <input
                    type="radio"
                    name="availability"
                    checked={availabilityFilter === 'all'}
                    onChange={() => handleAvailabilityChange('all')}
                  />
                  <span className="sp-check-label">All</span>
                </label>

                <label className="sp-radio">
                  <input
                    type="radio"
                    name="availability"
                    checked={availabilityFilter === 'in'}
                    onChange={() => handleAvailabilityChange('in')}
                  />
                  <span className="sp-check-label">In stock</span>
                </label>

                <label className="sp-radio">
                  <input
                    type="radio"
                    name="availability"
                    checked={availabilityFilter === 'out'}
                    onChange={() => handleAvailabilityChange('out')}
                  />
                  <span className="sp-check-label">Out of stock</span>
                </label>
              </div>
            </div>
          </aside>

          <div className="sp-products">
            <div className="sp-toolbar">
              <div />
              <button type="button" className="sp-sort">
                Featured <span className="sp-sort-caret">˅</span>
              </button>
            </div>

            <div className={`sp-grid ${isAnimating ? 'sp-grid-enter' : ''}`}>
              {currentProducts.map((p) => (
                <article key={p.id} className="sp-card">
                  <Link className="sp-card-link" to={`/products/${p.slug}`}>
                    <div className="sp-img-wrap">
                      {p.badge && <div className="sp-badge">{p.badge}</div>}
                      <img className="sp-img" src={p.image} alt={p.name} />
                    </div>
                  </Link>

                  <div className="sp-card-body">
                    <Link className="sp-name sp-name-link" to={`/products/${p.slug}`}>
                      {p.name}
                    </Link>

                    <div className="sp-price">{p.price}</div>

                    <div className="sp-actions">
                      <button className="sp-add">ADD TO BAG</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="sp-pagination">
              <button
                className="sp-page-btn sp-page-btn--arrow"
                onClick={() => handlePageChange(page - 1)}
                disabled={page <= 1}
              >
                «
              </button>

              {Array.from({ length: totalPagesCalculated }).slice(0, 7).map((_, idx) => {
                const p = idx + 1
                return (
                  <button
                    key={p}
                    className={`sp-page-btn ${p === page ? 'sp-page-btn--active' : ''}`}
                    onClick={() => handlePageChange(p)}
                  >
                    {p}
                  </button>
                )
              })}

              {totalPagesCalculated > 7 && <span className="sp-page-ellipsis">…</span>}

              <button
                className="sp-page-btn sp-page-btn--arrow"
                onClick={() => handlePageChange(page + 1)}
                disabled={page >= totalPagesCalculated}
              >
                »
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Filter Elements */}
      <button 
        className="sp-mobile-filter-toggle" 
        onClick={toggleMobileFilter}
        aria-label="Toggle filters"
      >
        ⚙
      </button>

      <div 
        className={`sp-mobile-filter-overlay ${mobileFilterOpen ? 'active' : ''}`}
        onClick={closeMobileFilter}
      />

      <div className={`sp-mobile-filter-sidebar ${mobileFilterOpen ? 'active' : ''}`}>
        <button 
          className="sp-mobile-filter-close" 
          onClick={closeMobileFilter}
          aria-label="Close filters"
        >
          ×
        </button>

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
                    checked={categories.includes(cat)}
                    onChange={() => handleCategoryToggle(cat)}
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

          <div className="sp-radio-group">
            <label className="sp-radio">
              <input
                type="radio"
                name="availability-mobile"
                checked={availabilityFilter === 'all'}
                onChange={() => handleAvailabilityChange('all')}
              />
              <span className="sp-check-label">All</span>
            </label>

            <label className="sp-radio">
              <input
                type="radio"
                name="availability-mobile"
                checked={availabilityFilter === 'in'}
                onChange={() => handleAvailabilityChange('in')}
              />
              <span className="sp-check-label">In stock</span>
            </label>

            <label className="sp-radio">
              <input
                type="radio"
                name="availability-mobile"
                checked={availabilityFilter === 'out'}
                onChange={() => handleAvailabilityChange('out')}
              />
              <span className="sp-check-label">Out of stock</span>
            </label>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductPage