import MenuCard from "@/components/modules/MenuCard/MenuCard";
import { useState } from "react";

export default function menu({ data }) {
  const [category, setCategory] = useState("hot-coffee");
  const filterProducts = data.filter((item) => item.category == category);
  console.log(filterProducts);
  return (
    <>
      <div className="w-full min-h-screen menu-bg">
        <div className="pt-23 sm:pt-27 w-full flex justify-center">
          <div className="   w-full ">
            <div className="flex justify-center  ">
              <ul className=" flex justify-center max-sm:w-full h-[80px] items-center gap-x-5 sm:gap-x-8 bg-black/50 text-white  backdrop-blur-2xl sm:px-5  pt-3.5 sm:rounded-4xl  sm:text-[17px] text-[17px] font-bold  text-center px-1">
                <li
                  className={`${category == "hot-coffee" ? "border-b-2 border-b-amber-600 " : ""} pb-3 cursor-pointer`}
                  onClick={() => setCategory("hot-coffee")}
                >
                  Hot Coffee
                </li>
                <li
                  className={`${category == "cold-drinks" ? "border-b-2 border-b-amber-600 " : ""} pb-3 cursor-pointer`}
                  onClick={() => setCategory("cold-drinks")}
                >
                  Cold Drinks
                </li>
                <li
                  className={`${category == "cakes&desserts" ? "border-b-2 border-b-amber-600 " : ""} pb-3 cursor-pointer`}
                  onClick={() => setCategory("cakes&desserts")}
                >
                  Cakes & Desserts
                </li>
                <li
                  className={`${category == "shakes" ? "border-b-2 border-b-amber-600 " : ""} pb-3 cursor-pointer`}
                  onClick={() => setCategory("shakes")}
                >
                  Shakes
                </li>
                <li
                  className={`${category == "food" ? "border-b-2 border-b-amber-600 " : ""} pb-3 cursor-pointer`}
                  onClick={() => setCategory("food")}
                >
                  Food
                </li>
              </ul>
            </div>
            <div className="w-full flex justify-center ">
              <div className=" h-auto bg-black/40 backdrop-blur-[2px] rounded-2xl shadow-2xl grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-2.5 p-2 sm:p-5 mt-3.5">
                {filterProducts.map((item) => (
                  <MenuCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/menu");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
