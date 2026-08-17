export default function Categories() {
  return (
    <>
      <div>
        <div className="w-full md:my-10">
          <div className="w-full flex justify-center pt-3">
            <span className="bg-amber-500 w-0.5 h-15 md:h-25"></span>
          </div>
          <div className="flex justify-center">
            <span className="text-[15px] md:text-[30px] text-amber-500">
              Categories
            </span>
          </div>
        </div>
        {/* Categorie cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1.5  justify-items-center w-[90%] mx-auto mt-2.5">
          <div className=" w-25 h-35 sm:w-35 sm:h-45  md:w-45 md:h-62.5 bg-white/40 shadow-2xl relative hover:scale-105">
            <img
              className="w-full h-full"
              src="/images/categories/hot-coffee.jpg"
            />
            <div className=" opacity-0 hover:opacity-100  absolute inset-0 w-full h-full  backdrop-blur-[2px] flex justify-center items-center text-[25px]  text-white font-bold">
              Hot Coffee
            </div>
          </div>
          <div className="w-25 h-35 sm:w-35 sm:h-45   md:w-45 md:h-62.5 bg-white/40 shadow-2xl relative hover:scale-105">
            <img
              className="w-full h-full"
              src="/images/categories/cold-drink.jpg"
            />
            <div className=" opacity-0 hover:opacity-100  absolute inset-0 w-full h-full  backdrop-blur-[2px] flex justify-center items-center text-[25px]  text-white font-bold">
              Cold Drinks
            </div>
          </div>
          <div className="w-25 h-35 sm:w-35 sm:h-45 md:w-45 md:h-62.5 bg-white/40 shadow-2xl relative hover:scale-105">
            <img className="w-full h-full" src="/images/categories/cake.jpg" />
            <div className=" opacity-0 hover:opacity-100  absolute inset-0 w-full h-full  backdrop-blur-[2px] flex justify-center items-center text-[22px]  text-white font-bold">
              Cakes & Desserts
            </div>
          </div>
          <div className="w-25 h-35  sm:w-35 sm:h-45 md:w-45 md:h-62.5 bg-white/40 shadow-2xl relative hover:scale-105">
            <img className="w-full h-full" src="/images/categories/shake.jpg" />
            <div className=" opacity-0 hover:opacity-100  absolute inset-0 w-full h-full  backdrop-blur-[2px] flex justify-center items-center text-[25px]  text-white font-bold">
              Shakes
            </div>
          </div>
          <div className="w-25 h-35 sm:w-35 sm:h-45   md:w-45 md:h-62.5 bg-white/40 shadow-2xl relative hover:scale-105">
            <img className="w-full h-full" src="/images/categories/food.jpg" />
            <div className=" opacity-0 hover:opacity-100  absolute inset-0 w-full h-full  backdrop-blur-[2px] flex justify-center items-center text-[25px]  text-white font-bold">
              Food
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
