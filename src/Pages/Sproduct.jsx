import React, { useEffect, useState } from "react";
import Layout from "../Components/layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
import { allProducts } from "../Components/Utils/ProductData";

import { addtoCart } from "../Redux/Slicer/CartSlicer";
import { Warning } from "postcss";
import Star from "../Components/CustomComponents/Star";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

const Sproduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);

  console.log(size, quantity);

  const product = allProducts.find((item) => {
    return item.id == Number(id);
  });
  const { brand, description, image, name, price, star } = product;

  const handleCartSubmit = (e) => {
    e.preventDefault();

    if (!size) {
      alert("Please select a size before adding to the cart.");
      return;
    }
    dispatch(addtoCart({ ...product, id, size, quantity }));
  };

  return (
    <>
      <Layout>
        <motion.div 
         initial={{ opacity: 0,scale : 0.98 }}
         animate={{ opacity: 1, scale : 1 }}
         transition={{ duration: 1 }}
        className="container mx-auto my-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Product Image */}
            <div className="w-full md:w-1/2">
              <img
                src={image}
                alt={name}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
              <span className="text-lg text-gray-500">{brand}</span>
              <div className="flex items-center my-3">
                <div className="flex gap-1 text-yellow-500">
                  <Star rating={star} />
                </div>
              </div>
              <p className="text-gray-700 mb-4">{description}</p>
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-semibold text-gray-800">
                  &#x20B9; {price}
                </span>
              </div>

              <form action="" onSubmit={handleCartSubmit}>
                {/* Size Selector */}
                <div className="mb-6">
                  <label htmlFor="size" className="block text-gray-600 mb-2">
                    Select Size:
                  </label>
                  <select
                    value={size}
                    onChange={(e) => {
                      setSize(e.target.value);
                    }}
                    id="size"
                    className="w-full p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select Size</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                    <option value="small">Small</option>
                    <option value="large">Large</option>
                  </select>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <label
                    htmlFor="quantity"
                    className="block text-gray-600 mb-2"
                  >
                    Quantity:
                  </label>
                  <input
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    type="number"
                    id="quantity"
                    min={1}
                    max={5}
                    className="w-full p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                {/* Add to Cart Button */}
                <button className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                  Add to Cart
                </button>

                <Link to="/Cart" className="relative">
                  <button className="p-2 ms-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-xl text-white-800   cursor-pointer"
                    />
                  </button>
                </Link>
              </form>
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Product Details
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The {name} is made with premium quality fabric and designed for
              ultimate comfort. Whether you're out for a casual outing or just
              relaxing, this product will keep you stylish and cozy. With a
              unique design and durable material, it's the perfect addition to
              any wardrobe.
            </p>
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default Sproduct;
