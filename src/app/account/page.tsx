"use client";

import React from "react";
import Button from "@/components/widgets/Button";
import AccountContentWrapper from "@/components/AccountContentWrapper";
import InputField from "@/components/widgets/InputField";
import Input from "@/components/widgets/Input";
import TextArea from "@/components/widgets/TextArea";

const Page = () => {
  return (
    <AccountContentWrapper>
      <div className="space-y-10">
        <div className="flex gap-x-4 justify-start items-center flex-col md:flex-row gap-y-4 md:gap-y-0">
          <div className="w-32 h-32 p-1 rounded-full bg-white flex items-center justify-center">
            img
          </div>
          <Button
            title="Upload new picture"
            className="p-2 md:p-3 w-full md:w-auto md:px-6 lg:px-10 rounded-full font-semibold border text-sm lg:text-base whitespace-nowrap bg-white text-black"
          />
           <Button
            title="Delete"
            className="p-2  md:p-3 w-full md:w-auto md:px-6 lg:px-10 font-semibold rounded-full text-sm lg:text-base bg-gray-100 text-black"
          />
        </div>

        <div className="w-full lg:w-10/12 space-y-4">
          <div>
            <Input
              placeholder="YOUR FULL NAME"
              inputType="text"
              value="Golgotha"
              onChange={() => {}}
              className="py-4 focus:outline-none rounded-md shadow-sm w-full px-4 text-base font-normal"
            />
          </div>

          <div>
            <Input
              placeholder="EMAIL"
              disabled
              inputType="email"
              onChange={() => {}}
              value="goloking777@gmail.com"
              className="py-4 rounded-md shadow-sm w-full px-4 text-base font-normal"
            />
          </div>

          <div>
            <TextArea
              placeholder="Enter your bio"
              title="Bio"
              required
              onChange={() => {}}
              className="py-4 rounded-md shadow-sm w-full px-4 text-base font-normal"
            />
          </div>
        </div>
      </div>
    </AccountContentWrapper>
  );
};

export default Page;
