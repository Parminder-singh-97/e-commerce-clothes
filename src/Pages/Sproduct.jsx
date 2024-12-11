import React, { useEffect, useState } from "react";
import Layout from "../Components/layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
import { allProducts } from "../Components/Utils/ProductData";
// import { addProduct } from "../Redux/Slicer/ClickProductSlicer";
import { addtoCart } from "../Redux/Slicer/CartSlicer";
import { Warning } from "postcss";
import Star from "../Components/CustomComponents/Star";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sproduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  //All States
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);

  console.log(size, quantity);

  //  funtions


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
        <div className="container mx-auto my-8 px-4">
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
                <button
                  // onClick={() => dispatch(addtoCart(product))}
                  className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
                >
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

        </div>
      </Layout>
    </>
  );
};

export default Sproduct;

// const Sproduct = () => {
//   const productclick = useSelector((state) => state.clickProductSlicer.product);
//   const [product, setProduct] = useState({});

// console.log(product)

// useEffect(() => {
//   // Check if there's a product saved in localStorage
//   const savedProduct = localStorage.getItem("product");
//   if (savedProduct) {
//     setProduct(JSON.parse(savedProduct));
//   } else {
//     setProduct(productclick); // If nothing in localStorage, use redux state
//   }
// }, [productclick]);

// useEffect(() => {
//   // Remove the product from localStorage before updating
//   if (product && Object.keys(product).length > 0) {
//     localStorage.removeItem("product");
//     localStorage.setItem("product", JSON.stringify(product));
//   }
// }, [product]);

//   return (
//     <>
//       <Layout>
//         <section id="product_details" className="section-p1">
//           <div className="single_pro_img">
//             <img
//               src={product.image}
//               width="100%"
//               alt=""
//               id="main_image"
//             />
//             <div className="small_img_group">
//               <div className="small_img_col">
//                 <img
//                   src="img/products/f1.jpg"
//                   width="100%"
//                   className="small_img"
//                   alt=""
//                 />
//               </div>
//               <div className="small_img_col">
//                 <img
//                   src="img/products/f2.jpg"
//                   width="100%"
//                   className="small_img"
//                   alt=""
//                 />
//               </div>
//               <div className="small_img_col">
//                 <img
//                   src="img/products/f3.jpg"
//                   width="100%"
//                   className="small_img"
//                   alt=""
//                 />
//               </div>
//               <div className="small_img_col">
//                 <img
//                   src="img/products/f4.jpg"
//                   width="100%"
//                   className="small_img"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="single_pro_details">
//             <h6>Home / T-shirt</h6>
//             <h4>Men's Fashion T-shirt</h4>
//             <h2>$139.00</h2>
//             <select name="" id="">
//               <option value="">select Size</option>
//               <option value="">XL</option>
//               <option value="">XXL</option>
//               <option value="">small</option>
//               <option value="">large</option>
//             </select>
//             <input type="number" name="" id="" defaultValue={1} />
//             <button className="btn_transP"> Add To Cart</button>
//             <h4>product Details</h4>
//             <span>
//               The Gildon Ultra Cotton T-shirt is made from a substantial 6.0 Oz.
//               per sq.yd. fabric constructed from 100% cotton, this classic fit
//               preshrunk jersey knit provide unmatched comfort with each wear.
//               Featurinf a tap nect and shoulder, and a seamless double-needle
//               coller, and available in a range of color, it offer ot all in the
//               ultimate head-turning package.
//             </span>
//           </div>
//         </section>
//         <section id="feature1" className="section-p1">
//           <div className="pro_head">
//             <h2>Featured Products</h2>
//             <p>Summer collection New modern</p>
//           </div>
//           <div className="pro_container">
//             <div className="pro">
//               <img src="img/products/n5.jpg" alt="" />
//               <div className="des">
//                 <span>Adidas</span>
//                 <h5>Cartoon Astronaut T-Shirts</h5>
//                 <div className="star">
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                 </div>
//                 <div className="price_cart">
//                   <h4>$79</h4>
//                   <a href="#" className="fal fa-shopping-cart" />
//                 </div>
//               </div>
//             </div>
//             <div className="pro">
//               <img src="img/products/n6.jpg" alt="" />
//               <div className="des">
//                 <span>Adidas</span>
//                 <h5>Cartoon Astronaut T-Shirts</h5>
//                 <div className="star">
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                 </div>
//                 <div className="price_cart">
//                   <h4>$75</h4>
//                   <a href="#" className="fal fa-shopping-cart" />
//                 </div>
//               </div>
//             </div>
//             <div className="pro">
//               <img src="img/products/n7.jpg" alt="" />
//               <div className="des">
//                 <span>Adidas</span>
//                 <h5>Cartoon Astronaut T-Shirts</h5>
//                 <div className="star">
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                 </div>
//                 <div className="price_cart">
//                   <h4>$70</h4>
//                   <a href="#" className="fal fa-shopping-cart" />
//                 </div>
//               </div>
//             </div>
//             <div className="pro">
//               <img src="img/products/n8.jpg" alt="" />
//               <div className="des">
//                 <span>Adidas</span>
//                 <h5>Cartoon Astronaut T-Shirts</h5>
//                 <div className="star">
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                   <i className="fas fa-star" />
//                 </div>
//                 <div className="price_cart">
//                   <h4>$60</h4>
//                   <a href="#" className="fal fa-shopping-cart" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section id="newsletters">
//           <img src="img/banner/b14.png" alt="" />
//           <div className="left">
//             <h4>Sign Up For Newsletters</h4>
//             <p>
//               Get E-mails updates about our latest shop and{" "}
//               <span>Special offers</span>
//             </p>
//           </div>
//           <div className="right">
//             <input
//               type="text"
//               name="search"
//               id="searchBar"
//               placeholder="Enter your E-mail "
//             />
//             <button
//               type="submit"
//               className="normal_btn"
//               style={{ backgroundColor: "#088178", color: "white" }}
//             >
//               Sign Up
//             </button>
//           </div>
//         </section>
//       </Layout>
//     </>
//   );

// };