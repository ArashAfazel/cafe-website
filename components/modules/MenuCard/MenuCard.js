import { useState } from "react";

export default function MenuCard({ data }) {
  console.log(data);
  const [count, setCount] = useState(0);
  const [size, setSize] = useState("small");
  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };

  return (
    <>
      <div className=" w-45 sm:w-55 h-80.5 sm:h-auto bg-white rounded-2xl">
        <div className="w-full p-1.5 flex flex-col h-full">
          <div className="w-full">
            <img src={data.img} className="w-full h-40 rounded-2xl" />
            <div className="flex justify-between py-1 font-bold">
              <span>{data.title}</span>
              <span>${data.price}</span>
            </div>
            <div className="w-full">
              <span className="break-all">{data.des}</span>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex flex-col gap-y-2.5">
              <span>Size</span>
              <div className="space-x-3.5">
                <span
                  className={`${size == "small" ? "bg-amber-500" : ""} py-1 px-2 border-2 border-gray-600 rounded-2xl`}
                  onClick={() => setSize("small")}
                >
                  small
                </span>
                <span
                  className={`${size == "large" ? "bg-amber-500" : ""} py-1 px-2 border-2 border-gray-600 rounded-2xl`}
                  onClick={() => setSize("large")}
                >
                  large
                </span>
              </div>
            </div>
            <div className="flex items-center mt-3 justify-between">
              <div className="flex border-2 border-black w-[40%] rounded-3xl justify-between  ">
                <span
                  onClick={increase}
                  className="border-r-2 border-amber-400 px-1 sm:px-2 bg-amber-500 rounded-l-3xl font-bold "
                >
                  +
                </span>
                <span>{count}</span>
                <span
                  onClick={decrease}
                  className="border-l-2 border-amber-400 px-1.5 sm:px-2.5 bg-amber-500 rounded-r-3xl font-bold "
                >
                  -
                </span>
              </div>
              <div className="bg-amber-500 py-0.5 px-2 rounded-3xl text-[14px]">
                Add To Card
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
