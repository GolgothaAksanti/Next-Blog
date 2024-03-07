import React from 'react'
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] });

const Header = () => {
  return (
    <div className={`w-10/12 mx-auto space-y-4 mt-10`}>
        <div className={`text-6xl font-bold`}>Blog</div>
        <div>Reach out to us today and embark on a journey tailored to your vision and style</div>
    </div>
  )
}

export default Header