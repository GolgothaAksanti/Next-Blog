import React from "react";
import Image, { ImageProps } from "next/image";

interface MyImageProps extends ImageProps {
  alt: string;
  className?: string;
}

const MyImage: React.FC<MyImageProps> = ({ alt, className, ...props }) => {
  return (
    <div className={`relative w-full h-full ${className || " "}`}>
      <Image
        alt={alt}
        {...props}
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
    </div>
  );
};

export default MyImage;
