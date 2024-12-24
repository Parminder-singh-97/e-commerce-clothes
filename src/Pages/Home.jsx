import React from "react";
import Layout from "../Components/layouts/Layout.jsx";
import { allProducts } from "../Components/Utils/ProductData.js";
import { Link, useNavigate } from "react-router";
import Star from "../Components/CustomComponents/Star.jsx";
import { useDispatch } from "react-redux";
import { motion } from "motion/react";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function GotoSingleProduct(id) {
    console.log(id);

    navigate(`/sproduct/${id}`);
  }

  return (
    <>
      <Layout>
        <motion.div 
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 1.5 }}>

      
        <section id="hero">
          <div className="hero_left">
            <h4>Trade-in-offer</h4>
            <h2>Super value deals</h2>
            <h1>On all products</h1>
            <p>Save more with coupons &amp; 70% Off !</p>
            <Link to={"/shop"}>
              <button>Shop Now</button>
            </Link>
          </div>
        </section>
        <section id="feature">
          <div className="fe_box">
            <img src="/images/features/f1.png" alt="" />
            <h6>Free Shipping</h6>
          </div>
          <div className="fe_box">
            <img src="/images/features/f2.png" alt="" />
            <h6>Online Order</h6>
          </div>
          <div className="fe_box">
            <img src="/images/features/f3.png" alt="" />
            <h6>Save Money</h6>
          </div>
          <div className="fe_box">
            <img src="/images/features/f4.png" alt="" />
            <h6>Promotions</h6>
          </div>
          <div className="fe_box">
            <img src="/images/features/f5.png" alt="" />
            <h6>Happy Sell</h6>
          </div>
          <div className="fe_box">
            <img src="/images/features/f6.png" alt="" />
            <h6>F24/7 Support</h6>
          </div>
        </section>
        <section id="feature1" className=" py-[80px] px-[40px]">
          <div className="pro_head">
            <h2>featured Products</h2>
            <p>Summer collection New modern</p>
          </div>
          <div className="pro_container">
            {allProducts.slice(0, 8).map((product, id) => {
              return (
                <div
                  onClick={() => {
                    GotoSingleProduct(product.id);
                  }}
                  className="pro"
                  key={id - 0.1}
                >
                  <img src={product.image} alt="" />
                  <div className="des">
                    <span>{product.brand}</span>
                    <h5>{product.name}</h5>
                    <div className="star">
                      <Star rating={product.star} />
                    </div>
                    <div className="price_cart">
                      <h4> &#x20B9; {product.price}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section id="banner" className="section-m1">
          <h4 className="text-white">Repair Service</h4>
          <h2 className="text-white">
            Up to <span className="text-red-600">70% Off</span> - All t-Shirts
            &amp; Accessories
          </h2>
          <Link to={"/shop"}>
            <button className="normal_btn text-black">Explore More</button>
          </Link>
        </section>
        <section id="feature1" className=" py-[80px] px-[40px] ">
          <div className="pro_head">
            <h2>New Arrivals</h2>
            <p>Summer collection New modern</p>
          </div>
          <div className="pro_container">
            {allProducts.slice(8).map((product, id) => {
              return (
                <div
                  onClick={() => {
                    GotoSingleProduct(product.id);
                  }}
                  className="pro"
                  key={id - 0.2}
                >
                  <img src={product.image} alt="" />
                  <div className="des">
                    <span>{product.brand}</span>
                    <h5>{product.name}</h5>
                    <div className="star">
                      <Star rating={product.star} />
                    </div>
                    <div className="price_cart">
                      <h4>&#x20B9; {product.price}</h4>
                    </div>
                    <div className=" m-auto w-[50%]"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section id="sm_banner" className="section-p1">
          {/* <div class="banner_container"> */}
          <div className="banner_box1">
            <h4>Crazy Deal</h4>
            <h2>buy 1 get 1 free</h2>
            <p>The best classic dress is on sale at Cara</p>
            <button className="btn_transP">Learn More</button>
          </div>
          <div className="banner_box2">
            <h4>Spring/Summer</h4>
            <h2>Upcomming season</h2>
            <p>The best classic dress is on sale at Cara</p>
            <button className="btn_transP">Collection</button>
            {/* </div> */}
          </div>
        </section>
        <section id="banner3">
          <div className="banner3_container">
            <div className="banner3_1">
              <h2 className="text-white">SEASONAL SALE</h2>
              <h3 className="text-white">Winter Collection -50% OFF</h3>
            </div>
            <div className="banner3_2">
              <h2 className="text-white">NEW FOOTWEAR COLLECTION</h2>
              <h3>Spring/Summer 2024</h3>
            </div>
            <div className="banner3_3">
              <h2 className="text-white">T-SHIRTS</h2>
              <h3>New Trendy Prints</h3>
            </div>
          </div>
        </section>
        <section id="newsletters">
          <img src="img/banner/b14.png" alt="" />
          <div className="left">
            <h4>Sign Up For Newsletters</h4>
            <p>
              Get E-mails updates about our latest shop and{" "}
              <span>Special offers</span>
            </p>
          </div>
          <div className="right">
            <input
              type="text"
              name="search"
              id="searchBar"
              placeholder="Enter your E-mail "
            />
            <button
              type="submit"
              className="normal_btn"
              style={{ backgroundColor: "#088178", color: "white" }}
            >
              Sign Up
            </button>
          </div>
        </section>
        </motion.div>
      </Layout>
    </>
  );
};

export default Home;
