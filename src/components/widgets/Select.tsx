"use client";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Button from "./Button";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
  index?: number;
  isDropDownOpen?: boolean;
  toggle?: (index: number) => void;
}

interface Props {
  item: MenuItem;
}

const Select = ({ item }: Props) => {
  const menuItems = item?.children ? item.children : [];

  const transClass = item.isDropDownOpen ? " flex " : "hidden";
  return (
    <>
      <div className="relative">
        <Button
          className={`hover:text-dp-4 flex items-center font-normal justify-center gap-2 ${
            item.isDropDownOpen ? " text-dp-5 " : " "
          }`}
          onClick={() => item.toggle && item.toggle(item.index as number)}
        >
          {item.title}
          {item.isDropDownOpen ? (
            <FaChevronUp
              className={`text-dp-1 font-thin text-xs hover:text-dp-4 ${
                item.isDropDownOpen ? " text-dp-5 " : " "
              }`}
            />
          ) : (
            <FaChevronDown
              className={`text-dp-1 font-thin text-xs hover:text-dp-4 ${
                item.isDropDownOpen ? " text-dp-5 " : " "
              }`}
            />
          )}
        </Button>
        <div
          id={`${item.index}`}
          className={`absolute top-8 z-30 w-[250px] h-[300px] flex flex-col py-4 bg-dp-5 text-white ${transClass}`}
        >
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.route || ""}
              className="hover:bg-orange-200/20  hover:text-z-500 tx-4 py-1 px-4"
              onClick={() => item?.toggle && item.toggle(item.index as number)}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
      {item.isDropDownOpen && (
        <div
          className="fixed top right-0 bottom-0 left-0 z-20 b-dp-1/50"
          onClick={() => item.toggle && item.toggle(item.index as number)}
        ></div>
      )}
    </>
  );
};

export default Select;
