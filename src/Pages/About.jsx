import React from "react";
import Layout from "../Components/layouts/Layout";
import { useSelector } from "react-redux";
import { motion } from "motion/react"


const About = () => {
  const isauth = useSelector((State) => State.AuthSlicer.isAuthenticated)
  console.log(isauth)
  return (
    <>
      <Layout>
        <motion.div 
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 1.5 }}

        className="about-container bg-gray-100 py-10 px-4 sm:px-8 lg:px-16">
          <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              {/* About Text */}
              <div className="text-gray-700">
                <h2 className="text-2xl font-semibold mb-4">
                  Hello, we Are Cara
                </h2>
                <p className="mb-4">
                  Hello, we're The Fashion Hub! We are your ultimate destination
                  for the latest and greatest in stylish clothing. Our mission
                  is to provide high-quality, affordable fashion that combines
                  comfort and style for every occasion. At The Fashion Hub, we
                  believe in delivering a personalized shopping experience. Our
                  dedicated team works tirelessly to bring you the latest
                  trends, timeless pieces, and clothing that complements your
                  unique style. Whether you're looking for casual wear or
                  sophisticated evening attire, we've got you covered. But we’re
                  not just about clothes. We’re about creating a community where
                  fashion meets sustainability, creativity, and quality. We are
                  committed to offering pieces that help you feel confident,
                  empowered, and always fashion-forward. When we're not
                  designing or curating collections, we enjoy exploring the
                  latest fashion trends, seeking inspiration, and enjoying
                  coffee at the trendiest spots. Join us on our journey as we
                  make fashion fun, functional, and fabulous!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default About;
