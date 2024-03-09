"use client";

import React from "react";
import Link from "next/link";

import BlogCard from "@/components/cards/BlogCard";
import Button from "@/components/widgets/Button";
import MyImage from "@/components/widgets/MyImage";
import { blogs } from "@/libs/constants/blog.constants";
import { IBlog } from "@/libs/interfaces/blog.interfaces";

type Props = { params: { slug: string[] } };

const Page: React.FC<Props> = ({ params: { slug } }): JSX.Element => {
  const id = slug[0];
  const title = slug[1];
  const blog: IBlog | undefined = blogs.find(
    (blog) => blog.title?.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase() === title
  );

  if (!blog) {
    return (
      <div className="w-10/12 min-h-80 flex flex-col space-y-10 py-10 justify-center items-center mx-auto h-full pb-20">
        <div className="text-sm lg:w-1/2 text-center">
          We{"'"}re sorry, but the content you{"'"}re looking for is not found.
          It may have been moved or deleted. Please try searching for something
          else or return to the homepage.
        </div>
        <Link href={"/"}>
          <Button className="border text-black text-xs px-5 py-3 rounded-md hover:bg-secondary">
            {"Home Page"}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-10/12 space-y-5 mx-auto h-full pb-20 pt-10">
      <div className="w-full mx-auto lg:w-3/4 xl:w-1/2 space-y-8">
        <div className="space-y-">
          <p className="text-sm">{blog.title}</p>
          <p className="text-2xl xl:text-3xl font-bold">{blog.title}</p>
        </div>
        <div className="w-full mx-auto h-64 lg:h-96">
          <MyImage
            src={blog.image}
            alt={blog.title}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col space-y-3 lg:space-y-5">
          <div className="text-sm md:text-base">
            <div
              className="text-base"
              dangerouslySetInnerHTML={{ __html: blog.blog }}
            />
          </div>
        </div>
      </div>
      <div className="pt-10">
        <p className="text-2xl lg:text-4xl font-">Recommanded</p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {blogs
          ?.slice()
          .sort(() => 0.5 - Math.random())
          .slice(0, 4)
          .map((blog) => {
            return <BlogCard key={blog._id} {...blog} />;
          })}
      </div>
    </div>
  );
};

export default Page;
