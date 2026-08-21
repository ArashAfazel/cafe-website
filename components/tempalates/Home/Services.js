export default function Services() {
  return (
    <>
      <div className="w-full flex justify-center pt-3">
        <span className="bg-amber-500 w-0.5 h-15 md:h-25"></span>
      </div>
      <div className="flex justify-center">
        <span className="text-[15px] md:text-[30px] text-amber-500">
          Why choose us
        </span>
      </div>

      <div className="relative mt-7 w-full max-sm:h-130 md:h-230 lg:h-115">
        <div className=" w-full h-full servic-bg  sm:bg-contain absolute opacity-60 "></div>
        <div className="absolute z-10 w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center justify-items-center content-center gap-x-0  gap-y-7 ">
            <div className=" w-50 h-25  sm:w-120 sm:h-50 bg-white/50 backdrop-blur-[2px] shadow-2xl shadow-gray-600 jusse">
              <div className="flex h-full items-center justify-center px-2">
                <img
                  src="/images/services/service-1.jpg "
                  className="h-[80%]"
                />
                <div className="px-2">
                  <span className="font-bold">Fast Door Delivery</span>
                  <p className="max-sm:hidden">
                    Enjoy your favorite coffee and treats without leaving your
                    home. We prepare your order fresh and deliver it quickly and
                    safely right to your door.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-50 h-25  sm:w-120 sm:h-50 bg-white/50 backdrop-blur-[2px] shadow-2xl shadow-gray-600">
              <div className="flex h-full items-center justify-center px-2">
                <img
                  src="/images/services/service-2.jpg "
                  className="h-[80%]"
                />
                <div className=" px-2 ">
                  <span className="font-bold">Feresh Coffee Beans</span>
                  <p className="max-sm:hidden">
                    We use freshly roasted, high-quality coffee beans to bring
                    out a rich aroma and smooth flavor in every cup. Carefully
                    selected beans ensure a fresh and satisfying coffee
                    experience
                  </p>
                </div>
              </div>
            </div>
            <div className="w-50 h-25  sm:w-120 sm:h-50 bg-white/50 backdrop-blur-[2px] shadow-2xl shadow-gray-600">
              <div className="flex h-full items-center justify-center px-2">
                <img
                  src="/images/services/service-3.jpg "
                  className="h-[80%]"
                />
                <div className="px-2">
                  <span className="font-bold">Best Quality Coffee</span>
                  <p className="max-sm:hidden">
                    We carefully select premium coffee beans to deliver rich
                    flavor and a smooth aroma. Every cup is crafted with quality
                    and passion for the perfect coffee experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-50 h-25  sm:w-120 sm:h-50 bg-white/50 backdrop-blur-[2px] shadow-2xl shadow-gray-600">
              <div className="flex h-full items-center justify-center px-2">
                <img
                  src="/images/services/service-4.jpg "
                  className="h-[80%]"
                />
                <div className="px-2">
                  <span className="font-bold">Online Table Booking</span>
                  <p className="max-sm:hidden">Reserve your table easily and conveniently from anywhere, anytime. Choose your preferred date and time, and we'll have your table ready for you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
