import React from "react";
import Button from "./widgets/Button";
import { blogs } from "@/libs/constants/blog.constants";
import BlogCard from "./cards/BlogCard";

const OtherBlogs = () => {
  return (
    <div className="w-10/12 mx-auto space-y-5">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Eco-Friendly Design Topics</p>
        <Button
          className="bg-black text-gray-200 whitespace-nowrap rounded-full px-3 py-2 text-xs hover:bg-gray-800 transition-colors"
          title="see all posts"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {blogs.slice(2).map((blog) => (
            <BlogCard key={blog._id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default OtherBlogs;
