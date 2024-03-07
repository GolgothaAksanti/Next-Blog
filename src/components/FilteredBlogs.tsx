"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdSearch } from "react-icons/md";

import InputField from "./widgets/InputField";
import { blogs, categories } from "@/libs/constants/blog.constants";
import Button from "./widgets/Button";
import BlogCard from "./cards/BlogCard";

const FilteredBlogs = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].name);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchActive(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-10/12 mx-auto space-y-5 mt-5">
      <div className="xl:flex items-center justify-between space-y-5 xl:space-y-0">
        <div
          ref={searchRef}
          className={`flex px-4 col-span-4 py-0 w-full xl:w-1/4 items-center border bg-gray-200 rounded ${
            searchActive ? " border-gray-300" : " "
          }`}
        >
          <MdSearch className="text-lg text-gray-500 mr-2" />
          <InputField
            onClick={() => setSearchActive(true)}
            placeholder="Search for any blog article..."
            className="border-none py-2 w-full"
          />
        </div>

        <div className="flex items-center justify-end"> 
          <div className="w-full py-1 overflow-x-scroll no-scrollbars whitespace-nowrap scroll-smooth mx-auto flex gap-2 items-center justify-start xl:gap-4">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                title={cat.name}
                className={`hover:bg-gray-100 rounded-md p-1 px-2 ${
                  activeCategory === cat.name
                    ? " bg-gray-200 "
                    : " "
                }`}
                onClick={() => {
                  setActiveCategory(cat.name);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
             {blogs.slice(0,2).map((blog) => (
                <BlogCard key={blog._id} {...blog} />
             ))}   
        </div>
      </div>
    </div>
  );
};

export default FilteredBlogs;
