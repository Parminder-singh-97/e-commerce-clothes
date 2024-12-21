import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../FireBase/FireBaseApp";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Slicer/AuthSlicer";
import { useDispatch, useSelector } from "react-redux";
import ProtectRoutes from "../Components/ProtectedRouter/ProtectRoutes";
import { loadCartFromFirestore } from "../FireBase/FireBaseApp";
import {
  setCartItemsFromFirebase,
  setLoginUserId,
  setLoginUserName,
} from "../Redux/Slicer/CartSlicer";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../FireBase/FireBaseApp";

const Login = () => {
  const dispatch = useDispatch();

  const userKey = useSelector((state) => state.AuthSlicer.isAuthenticated);

  const loadCartFromFirestore = async (userId, userName) => {
    try {
      const docRef = doc(db, "cartData", userName.split(" ").join("") + userId);

      const docSnap = await getDoc(docRef);

      localStorage.setItem(
        "cartItems",
        JSON.stringify(docSnap.data().cartItems)
      );
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      let cartItemsFromLocalStorage = JSON.parse(
        localStorage.getItem("cartItems")
      );

      dispatch(setCartItemsFromFirebase(cartItemsFromLocalStorage));

      if (docSnap.exists()) {
        return docSnap.data().cartitems || [];
      }
      return [];
    } catch (error) {
      console.error("Error loading cart items:", error.message);
      return [];
    }
  };

  const auth = getAuth(app);
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Login successfull !",
    });

    setTimeout(() => {
      dispatch(login(localStorage.getItem("isLoggedIn")));
      Navigate("/home");
    }, 2000);
  };

  const error = (msg) => {
    messageApi.open({
      type: "error",
      content: `Login failed: ${msg}`,
    });
  };

  const signInUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(
        "isUser signed in:",
        userCredential._tokenResponse.registered
      );

      let user = userCredential.user;

      localStorage.setItem("uid", userCredential.user.uid);
      loadCartFromFirestore(userCredential.user.uid, user.displayName);
      dispatch(setLoginUserId(userCredential.user.uid));
      dispatch(setLoginUserName(user.displayName));

      success();
    } catch (err) {
      console.error("Error signing in:", err.message);
      error("Invail Email or Password");
    }
  };

  const FormSubmitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      error("Please fill in all fields.");
    } else {
      signInUser();
    }
  };

  return (
    <>
      {/* Context Holder for Ant Design message */}
      {contextHolder}
      <div className="login-bg w-full h-screen justify-center items-center flex">
        {/* <ProtectRoutes/> */}
        <div className="w-[90%] max-w-lg drop-shadow-xl backdrop-blur-xl p-8 flex flex-col justify-center items-center rounded-3xl shadow-2xl">
          <h1 className="font-extrabold text-center pb-6 text-4xl text-black uppercase tracking-wide">
            Login
          </h1>
          <form onSubmit={FormSubmitHandler} className="w-full space-y-6">
            <div>
              <label
                htmlFor="UserName"
                className="block font-semibold text-lg text-white mb-2"
              >
                Email:
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="true"
                required
                type="email"
                id="UserName"
                className="w-full p-3 rounded-2xl bg-white/20 text-black font-extrabold placeholder-white/70 focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="Password"
                className="block font-semibold text-lg text-white mb-2"
              >
                Password:
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                type="password"
                id="Password"
                className="w-full p-3 rounded-2xl bg-white/20 text-black font-extrabold  placeholder-white/70 focus:ring-2 focus:ring-purple-300 focus:outline-none transition"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-700 text-white text-lg font-semibold py-3 rounded-2xl hover:bg-purple-800 transition duration-300 ease-in-out shadow-lg"
            >
              Log In
            </button>
          </form>

          <p className="mt-6 text-white/80 text-sm">
            Don't have an account?{" "}
            <Link
              to="/signUp"
              className="text-white font-semibold hover:underline hover:text-purple-300"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
