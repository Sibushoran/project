import React from "react";
import "./Front.css";

// Banner Images
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

// Category Images
import headphone from "../assets/headphone.jpg";
import tv from "../assets/tv.jpg";
import watch from "../assets/watch.jpg";
import laptop from "../assets/laptop.jpg";
import speaker from "../assets/speaker.jpg";
import accessory from "../assets/usb.jpg";
import sound from "../assets/sound.jpg";

// Deal Images
import dealImage from "../assets/tv.jpg";
import phone1 from "../assets/phone1.jpg";
import phone2 from "../assets/phone2.jpg";
import mouse from "../assets/mouse.jpg";
import watch2 from "../assets/watch2.jpg";

const Front = () => {
  const categories = [
    { name: "HeadPhone", count: 3, img: headphone },
    { name: "TV & AV", count: 2, img: tv },
    { name: "Smart Watches", count: 2, img: watch },
    { name: "Laptops", count: 3, img: laptop },
    { name: "Sound Devices", count: 1, img: sound },
    { name: "Accessories", count: 4, img: accessory },
    { name: "Speakers", count: 1, img: speaker },
  ];

  return (
    <div className="front-page">
      {/* === Banner Section === */}
      <div className="hero-banner-section">
        <div className="large-banner">
          <img src={banner1} alt="Laptop Banner" />
          <div className="banner-content">
            <p className="tagline">UP TO 25% DISCOUNT</p>
            <h2>Great Deal Discount on all Laptops</h2>
            <p>Shop great deals on MacBook, iPad and more.</p>
            <button>SHOP NOW</button>
          </div>
        </div>

        <div className="side-banners">
          <div className="small-banner orange">
            <img src={headphone} alt="Best Seller Headphone" />
            <div className="banner-content">
              <span className="label blue">BIG SALE</span>
              <h4>Best Seller Headphone</h4>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
          <div className="small-banner dark">
            <img src={laptop} alt="New Laptop Selection" />
            <div className="banner-content">
              <span className="label red">GOOD PRICE</span>
              <h4>New Laptop Selection</h4>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>

      {/* === Categories Section === */}
      <div className="popular-categories">
        <h2 className="section-title">Popular Categories</h2>

        <div className="category-grid">
          {categories.map((cat, index) => (
            <div className="category-card" key={index}>
              <div className="category-image">
                <img src={cat.img} alt={cat.name} />
              </div>
              <div className="category-info">
                <h4>{cat.name}</h4>
                <p>{cat.count} Products</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Deal of the Day Section === */}
      <div className="deal-product-section">
        <div className="deal-box">
          <p className="deal-subtitle">ONLY FOR TODAY</p>
          <h2 className="deal-title">Deal of The Day</h2>
          <img src={dealImage} alt="Deal" className="deal-image" />
          <div className="countdown">
            <div className="time-box">
              <span>329</span>
              <p>Hrs</p>
            </div>
            <div className="time-box">
              <span>31</span>
              <p>Mins</p>
            </div>
            <div className="time-box">
              <span>28</span>
              <p>Secs</p>
            </div>
          </div>
        </div>

        <div className="product-cards">
          {[
            {
              img: phone1,
              tag: "HOT",
              category: "SmartPhone",
              title: "Anker PowerCore III Sense 18W 10000mAh",
              price: "$350.00",
              rating: 4,
            },
            {
              img: mouse,
              category: "Accessories",
              title: "Logitech MK540 Wireless Mouse",
              price: "$70.00–$80.00",
              rating: 4,
            },
            {
              img: watch2,
              tag: "10% OFF",
              category: "Smart Watches",
              title: "Skill Star White Leather Smart Watch",
              price: "$180.00",
              original: "$200.00",
              rating: 3,
            },
            {
              img: phone2,
              tag: "HOT",
              discount: "16% OFF",
              category: "SmartPhone",
              title: "Right Check Standard Smart Phone",
              price: "$210.00",
              original: "$250.00",
              rating: 0,
            },
          ].map((product, idx) => (
            <div className="product-card" key={idx}>
              <div className="product-image">
                {product.tag && (
                  <span className="tag blue">{product.tag}</span>
                )}
                {product.discount && (
                  <span className="tag red">{product.discount}</span>
                )}
                <img src={product.img} alt={product.title} />
              </div>
              <p className="category">{product.category}</p>
              <h4 className="title">{product.title}</h4>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < product.rating ? "★" : "☆"}</span>
                ))}
              </div>
              <p className="price">
                {product.price}
                {product.original && (
                  <span className="original">{product.original}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="promo-banners">
  <div className="promo-card" style={{ backgroundColor: '#fda085' }}>
    <div className="promo-text">
      <h3>The Best Selling Gamemode</h3>
      <p>GIFT CARD $150</p>
    </div>
    <img src="/path-to-controller.png" alt="Game Controller" />
  </div>
  <div className="promo-card" style={{ backgroundColor: '#1e293b' }}>
    <div className="promo-text light">
      <h3>Get Deal on Laptops</h3>
      <p>TODAY’S SUPER OFFER</p>
    </div>
    <img src="/path-to-laptop.png" alt="Laptop" />
  </div>
  <div className="promo-card" style={{ backgroundColor: '#6366f1' }}>
    <div className="promo-text light">
      <h3>Samsung Smartphones</h3>
      <p>UP TO 45% OFF</p>
    </div>
    <img src="/path-to-samsung.png" alt="Samsung Devices" />
  </div>
</div>
<div className="scrolling-banner">
  <marquee behavior="scroll" direction="left" scrollamount="6">
    <strong>NO MINIMUM PURCHASE FREE SHIPPING ON ALL ORDERS</strong> &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;
    <strong>NO MINIMUM PURCHASE FREE SHIPPING ON ALL ORDERS</strong> &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;
    <strong>NO MINIMUM PURCHASE FREE SHIPPING ON ALL ORDERS</strong>
  </marquee>
</div>

    </div>
  );
};

export default Front;
