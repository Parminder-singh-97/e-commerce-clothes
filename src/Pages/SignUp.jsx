import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { message } from "antd";
import { app } from "../FireBase/FireBaseApp";
import { saveCartToFirestore } from "../FireBase/FireBaseApp";
import { useSelector } from "react-redux";

const auth = getAuth(app);

const SignUp = () => {
  let Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "SignUp successful!",
    });
    setTimeout(() => {
      Navigate("/login");
    }, 2000);
  };

  const signUpUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name
      );
      console.log("User SignUp:", userCredential.user.uid);
      console.log("User SignUp:", userCredential.user);
      let user = userCredential.user;
      await updateProfile(user, { displayName: name });

      saveCartToFirestore(userCredential.user.uid, user.displayName);

      success();
    } catch (err) {
      console.error("Error signup in:", err.message);
    }
  };

  const FormSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {contextHolder}
      <div className="login-bg bg-green-700 w-full h-screen justify-center items-center flex">
        <div className="w-[90%] max-w-lg drop-shadow-xl backdrop-blur-xl p-8 flex flex-col justify-center items-center rounded-3xl shadow-2xl">
          <h1 className="font-extrabold text-center pb-6 text-4xl text-black uppercase tracking-wide">
            Sign Up
          </h1>

          <form onClick={FormSubmitHandler} className="w-full space-y-6">
            {/* Name*/}
            <div>
              <label
                htmlFor="Name"
                className="block font-semibold text-lg text-white mb-2"
              >
                Name:
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                type="name"
                id="Name"
                className=" mb-4 w-full p-3 rounded-2xl bg-white/20 text-black font-extrabold  placeholder-white/70 focus:ring-2 focus:ring-teal-300 focus:outline-none transition"
                placeholder="Full Name"
              />
              {/* Email Address */}
              <label
                htmlFor="Email"
                className="block font-semibold text-lg text-white mb-2"
              >
                Email Address:
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                type="email"
                id="Email"
                className="w-full p-3 rounded-2xl bg-white/20 text-black font-extrabold  placeholder-white/70 focus:ring-2 focus:ring-teal-300 focus:outline-none transition"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="Password"
                className="block font-semibold text-lg text-white mb-2"
              >
                Password:
              </label>
              <input
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="Password"
                className="w-full p-3 rounded-2xl bg-white/20 text-black font-extrabold  placeholder-white/70 focus:ring-2 focus:ring-teal-300 focus:outline-none transition"
                placeholder="Create a password"
              />
            </div>

            {/* Confirm Password */}
            <div>
 
            </div>

            {/* Submit Button */}
            <button
              onClick={signUpUser}
              type="submit"
              className="w-full bg-teal-700 text-white text-lg font-semibold py-3 rounded-2xl hover:bg-teal-800 transition duration-300 ease-in-out shadow-lg"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-white/80 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-white font-semibold hover:underline hover:text-teal-300"
            >
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
