export default function Footer() {
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full Footer-bg sm:h-75 h-120 md:bg-cover  mt-20 relative">
          <div className="w-full  absolute h-full top-0 bg-black/85 backdrop-blur-[1px]"></div>
          <div className="absolute z-10 -top-1 w-full ">
            <img className="w-full  " src="/images/overlay-bottom.png" />
          </div>

          <div className="flex max-sm:flex-col max-sm:space-y-9 max-sm:justify-center absolute z-20 pt-[60px] justify-between  w-full lg:w-[80%] px-[20px] ">
            <div className="flex flex-col justify-center text-white gap-y-1">
              <span className=" md:text-[25px] ">GET IN TOUCH</span>
              <span className="">123 Street,Esfahan,Iran</span>
              <span className="">+9812345678</span>
              <span className="">coffee@yahoo.com</span>
            </div>
            <div className="flex flex-col justify-center text-white gap-y-1">
              <span className=" md:text-[25px] ">OPEN HOURS</span>
              <span className="">MONDAY-FRIDAY</span>
              <span className="">8.00AM-8.00PM</span>
              <span className="">SATURDAY-SUNDAY</span>
              <span className="">2.00PM-8.00PM</span>
            </div>
            <div className="flex flex-col justify-center  text-white gap-y-1">
              <span className=" md:text-[25px] ">GET NEWS & OFFERS</span>
              <div className="flex">
                <input
                  placeholder="Enter your number"
                  className="sm:w-50 w-30  bg-white h-11.25 p-1 text-[12px] sm:text-[18px] placeholder-black text-black"
                />
                <button className="h-11.25 bg-amber-500 p-0.5">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
