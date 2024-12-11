import React, { useEffect } from "react";
import Layout from "../Components/layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../Redux/Slicer/BlogData";

const Blog = () => {
  const dispatch = useDispatch();
  const BlogData = useSelector((state) => state.BlogSlicer.data.articles);


  return (
    <>
      <Layout>
          <h1 className="text-center p-6">Blogs</h1>
        <div className="flex gap-4 flex-wrap justify-center p-6">
          {BlogData?.map((article, id) => {
            const { title, urlToImage, description, publishedAt } = article;

            return (
              <div
                key={id - 0.2}
                className="bg-white m-5p-6 rounded-lg shadow-lg w-[300px]"
              >
                <img
                  src={urlToImage}
                  alt={title}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default Blog;
