import React from "react";
import Layout from "../Components/layouts/Layout";
import { allProducts } from "../Components/Utils/ProductData";
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { addtoCart } from "../Redux/Slicer/CartSlicer";
import Star from "../Components/CustomComponents/Star";
import { motion } from "motion/react";

const Shop = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function GotoSingleProduct(id) {
    console.log(id);

    navigate(`/sproduct/${id}`);
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Layout>
        <motion.div
        initial={{ opacity: 0,scale : 0.98 }}
        animate={{ opacity: 1, scale : 1 }}
        transition={{ duration: 1 }}>

       
        <section id="feature1" className="section-p1 relative">
          <div className=" font-extrabold text-[30px] pro_head">
            Our Products
          </div>
          <div className="pro_container">
            {allProducts.map((product) => {
              return (
                <div
                  onClick={() => {
                    GotoSingleProduct(product.id);
                    scrollToTop();
                  }}
                  className="pro"
                  key={product.id}
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
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="pagination" className="section-p1 container mx-auto">
          <div className="join grid grid-cols-2 w-full">
            <button className="join-item btn btn-outline">Previous page</button>
            <button className="join-item btn btn-outline">Next</button>
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

export default Shop;
