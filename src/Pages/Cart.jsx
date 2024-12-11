// import React from "react";
// import Layout from "../Components/layouts/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import Star from "../Components/CustomComponents/Star";
// import { removeFromCart } from "../Redux/Slicer/CartSlicer";

// const Cart = () => {
//  let dispatch = useDispatch()
//   const cartItems = useSelector((state) => state.cartSlicer.cartItems);
//   console.log(cartItems);
//   // const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

//   return (
//     <>
//       <Layout>
//         <h1 className="text-3xl font-extrabold text-center py-12 text-red-900">
//           Shopping Cart
//         </h1>

//         {cartItems.length === 0 ? (
//           <div className="font-extrabold m-6 text-center text-[30px]">Cart is empty</div>
//         ) : (
//           <div>
//             {cartItems.map((items) => {

//               return (
//                 <div
//                   key={items.id}
//                   className="cart-item flex items-center justify-between border-b py-4 m-5"
//                 >
//                   {/* Product Image and Details */}
//                   <div className="item-details flex items-center gap-4">
//                     <img
//                       src={items.image}
//                       alt="Product Name"
//                       className="w-40 h-40 object-contain rounded-md"
//                     />
//                     <div>
//                       <h3 className="text-lg font-semibold">{items.name}</h3>
//                       <p className="text-gray-600">{items.price}</p>
//                       <Star rating={items.star}/>
//                     </div>
//                   </div>

//                   {/* Quantity Section */}
//                   <div className="quantity-controls flex items-center gap-2">
//                     <span className="font-medium">{items.quantity} qt.</span>
//                   </div>

//                   {/* Total Price */}
//                   <p className="text-gray-800 font-semibold">{}</p>

//                   {/* Remove Button */}
//                   <p onClick={() => dispatch(removeFromCart(items.id))} className="cursor-pointer text-red-500 hover:text-red-700 font-extrabold">
//                     Remove
//                   </p>
//                   <p className=" cursor-pointer font-extrabold blue-red-500 hover:text-blue-700">
//                     Edit Product
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         )}

//         {/* -------------------------------------------------------------------------------- */}
//       </Layout>
//     </>
//   );
// };

// export default Cart;

import React, { useState } from "react";
import Layout from "../Components/layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import Star from "../Components/CustomComponents/Star";
import {
  removeFromCart,
  clearCart,
  quantityplus,
  quantityMinus,
} from "../Redux/Slicer/CartSlicer";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

const Cart = () => {
  const [cartAmount, setCartAmount] = useState();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartSlicer.cartItems);
  console.log(cartItems);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Layout>
        <h1 className="text-4xl font-bold text-center py-10 text-blue-800">
          Shopping Cart
        </h1>
        <div className="w-full flex justify-center">
          <button
            onClick={() => {
              if (cartItems.length == 0) {
                navigate("/Shop");
              } else {
                if (window.confirm("Are you sure you want to delete")) {
                  dispatch(clearCart());
                }
              }
            }}
            className=" text-end bg-blue-500 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-blue-600 transition duration-200"
          >
            {cartItems.length === 0 ? "Add Product" : "Clear Cart"}
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="font-bold text-center text-2xl py-20 text-gray-700">
            Your cart is empty
          </div>
        ) : (
          <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            {cartItems.map((items) => {
              return (
                <div
                  key={items.id}
                  className=" container flex flex-col lg:flex-row items-center justify-between gap-4 border-b border-gray-200 py-6 px-4 hover:bg-gray-50 transition duration-200"
                >
                  {/* Product Image and Details */}
                  <div className="flex items-center gap-6 ">
                    <img
                      src={items.image}
                      alt={items.name}
                      className="w-32 h-32 object-contain rounded-lg shadow-md"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {items.name}
                      </h3>
                      <p className="text-gray-600 text-lg font-medium">
                        ${items.price}
                      </p>
                      <div className="mt-2">
                        <Star rating={items.star} />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-7 lg:pt-0 flex-col sm:flex-row  ">
                    {/* Quantity Section */}
                    <div className="flex justify-center items-center gap-2 select-none  ">
                      <span className="font-medium text-lg text-gray-800">
                        Quantity:
                      </span>
                      <span className="font-semibold border p-2 rounded-3xl text-gray-900 text-lg">
                        <span
                          onClick={() => dispatch(quantityMinus(items.id))}
                          className=" font-extrabold cursor-pointer border-e-2 p-3 bg-gsray-300"
                        >
                          -
                        </span>{" "}
                        <span className="p-2">{items.quantity}</span>{" "}
                        <span
                          onClick={() => dispatch(quantityplus(items.id))}
                          className="font-extrabold border-s-2 p-3 bg-gsray-300 cursor-pointer "
                        >
                          +
                        </span>
                      </span>
                    </div>
                    {/* Total Price */}
                    <div className="flex items-center gap-2 justify-center">
                      <span className="font-medium text-lg text-gray-800">
                        Total:
                      </span>
                      <span className="font-semibold px-3 text-gray-900 text-lg">
                        &#x20B9; {items.quantity * items.price}
                      </span>
                    </div>

                    {/* Remove and Edit Buttons */}
                    <div className="flex gap-4 justify-center">
                      <button
                        onClick={() => dispatch(removeFromCart(items.id))}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-red-600 transition duration-200"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <button
                        onClick={() => {
                          navigate(`/sproduct/${items.id}`);
                          dispatch(removeFromCart(items.id));
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-blue-600 transition duration-200"
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Total Price */}
            {cartItems.length == 0 ? null : (
              <div className="flex justify-center sm:justify-between gap-4 mt-8 flex-wrap">
                <div className="flex order-2 sm:order-1">
                  <button
                    onClick={() => navigate("/WorkInProgress")}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-red-600 transition duration-200"
                  >
                    Checkout
                  </button>
                </div>
                <div className="order-1 sm:order-2">
                  <span className="font-bold text-lg text-gray-900">
                    Total Amount:
                  </span>
                  <span className="font-semibold text-lg text-blue-800">
                    &#x20B9; {totalAmount} /-{" "}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </Layout>
    </>
  );
};

export default Cart;
