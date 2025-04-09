import React, { useState, useEffect } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [statusFilters, setStatusFilters] = useState(["All"]);
  const [priceRange, setPriceRange] = useState([40, 600]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const allBrands = ['Apple', 'Asus', 'Dell', 'LG', 'Samsung', 'Sony'];

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleStatusChange = (e, status) => {
    const isChecked = e.target.checked;

    if (status === "All") {
      setStatusFilters(["All"]);
    } else {
      const updated = isChecked
        ? [...statusFilters.filter(s => s !== "All"), status]
        : statusFilters.filter(s => s !== status);
      setStatusFilters(updated.length === 0 ? ["All"] : updated);
    }
  };

  const handleBrandChange = (e, brand) => {
    const isChecked = e.target.checked;
    setSelectedBrands((prev) =>
      isChecked ? [...prev, brand] : prev.filter((b) => b !== brand)
    );
  };

  const applyFilters = () => {
    console.log("Applying filters...");
    console.log("Original products:", products);
    console.log("Selected price range:", priceRange);
    console.log("Selected status filters:", statusFilters);
    console.log("Selected brands:", selectedBrands);

    let filtered = [...products];

    // Filter by price
    filtered = filtered.filter((product) => {
      const inRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      if (!inRange) {
        console.log(`Excluded by price: ${product.name} ($${product.price})`);
      }
      return inRange;
    });

    // Filter by status
    if (!statusFilters.includes("All")) {
      filtered = filtered.filter((product) => {
        const statusMatch = statusFilters.includes(product.tag);
        if (!statusMatch) {
          console.log(`Excluded by status: ${product.name} (tag: ${product.tag})`);
        }
        return statusMatch;
      });
    }

    // Filter by brand
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => {
        const brandMatch = selectedBrands.includes(product.brand);
        if (!brandMatch) {
          console.log(`Excluded by brand: ${product.name} (brand: ${product.brand})`);
        }
        return brandMatch;
      });
    }

    console.log("Final filtered products:", filtered);
    setFilteredProducts(filtered);
  };

  return (
    <div className="shop-page">
      <div className="shop-banner">
        <h1>Shop</h1>
        <p>Home &gt; Shop</p>
      </div>

      <div className="shop-content">
        <div className="filter-panel">
          <h3>Product status</h3>
          {["All", "Featured", "On Sale"].map((status, idx) => (
            <label key={idx}>
              <input
                type="checkbox"
                checked={statusFilters.includes(status)}
                onChange={(e) => handleStatusChange(e, status)}
              />{" "}
              {status}
            </label>
          ))}

          <hr />

          <h3>Filter by price</h3>
          <input
            type="range"
            min="40"
            max="1500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([40, Number(e.target.value)])}
          />
          <p>Price: ${priceRange[0]} — ${priceRange[1]}</p>
          <button className="filter-btn" onClick={applyFilters}>Filter</button>

          <hr />

          <h3>Product brands</h3>
          {allBrands.map((brand, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={(e) => handleBrandChange(e, brand)}
              />{" "}
              {brand}
            </label>
          ))}

          <hr />

          <h3>Filter by color</h3>
          {["Black", "Blue", "Brown", "Green", "Grey"].map((color, index) => (
            <div className="color-option" key={index}>
              <span className={`color-circle ${color.toLowerCase()}`}></span> {color}
            </div>
          ))}
        </div>

        <div className="shop-main">
          <div className="shop-toolbar">
            <div className="sort-dropdown">
              <label>Sort By :</label>
              <select>
                <option>Default sorting</option>
                <option>Price low to high</option>
                <option>Price high to low</option>
              </select>
            </div>
            <div className="show-dropdown">
              <label>Show :</label>
              <select>
                <option>12</option>
                <option>24</option>
                <option>36</option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.length === 0 ? (
              <p>No products found matching your filters.</p>
            ) : (
              filteredProducts.map((product, index) => (
                <div key={index} className="product-card">
                  {product.tag && (
                    <span className={`product-tag ${product.tag.toLowerCase()}`}>
                      {product.tag}
                    </span>
                  )}
                  <img src={product.image} alt={product.name} />
                  <p className="category">{product.category}</p>
                  <h4>{product.name}</h4>
                  <div className="price-section">
                    <p className="price">${product.price}</p>
                    {product.originalPrice && (
                      <span className="old-price">${product.originalPrice}</span>
                    )}
                  </div>
                  {product.colors && (
                    <div className="color-dots">
                      {product.colors.map((clr, i) => (
                        <span
                          key={i}
                          className="dot"
                          style={{ backgroundColor: clr }}
                        ></span>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;


