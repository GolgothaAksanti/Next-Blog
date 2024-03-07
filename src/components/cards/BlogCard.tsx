"use client";

import React from "react";
import { MdUpdate } from "react-icons/md";

import MyImage from "../widgets/MyImage";
import SeeMore from "../widgets/SeeMore";
import Link from "next/link";
import { IBlog } from "@/libs/interfaces/blog.interfaces";

const BlogCard = ({ title, image, createdAt, blog }: IBlog) => {
  return (
    <Link
      href={`/blogs/${title?.replace(/[^a-zA-Z0-9]/g, "-")?.toLowerCase()}`}
      className="w-full space-y-1 lg:space-y-2"
    >
      <div className="w-full h-72 lg:rounded-xl shadow-main">
        <MyImage
          src={image}
          alt="title"
          className="overflow-hidden lg:rounded-xl "
        />
      </div>
      <p className="flex item-center text-gray-400 gap-2">
        <MdUpdate className="" />
        <span className="text-xs">
          {new Date(createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </p>
      <p className="font-semibold text-lg text-gray-700">{title}</p>
      <p
        className="text-xs text-gray-500 line-clamp-3"
        dangerouslySetInnerHTML={{ __html: blog }}
      />

      {/* <SeeMore
        onClick={() => {}}
        title="Lire la suite."
        className="rounded-none hover:bg-secondary"
      /> */}
    </Link>
  );
};

export default BlogCard;
