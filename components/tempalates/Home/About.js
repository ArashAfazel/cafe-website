export default function About() {
  return (
    <>
      {/* content */}
      <div  className="w-full ">
        <div className="w-full flex justify-center pt-3">
          <span className="bg-amber-500 w-0.5 h-15 md:h-25"></span>
        </div>
        <div className="flex justify-center">
          <span className="text-[30px]  text-amber-500">
            About Us
          </span>
        </div>
        <div className="lg:flex justify-between pt-4 items-center px-3.5 text-center">
          <span className="lg:w-[40%] lg:text-[17px] md:text-[15px] text-[14px]  text-center lg:font-bold">
            we believe that every cup of coffee tells a story. From the
            sun-drenched hills of Ethiopia to the farms in Colombia, we source
            the highest-quality beans from around the globe Our mission is
            simple to provide exceptional coffee experiences for every sip. 
          </span>
          <img className="max-sm:w-30 sm:w-100 max-lg:hidden" src="/images/cup.png" />
          <span className="lg:w-[40%] lg:text-[17px] md:text-[15px] text-[14px] text-center lg:font-bold">
             whether you're a seasoned espresso aficionado or a casual coffee
            drinker, we have a blend that's perfect for you. Our roasting
            process ensures that each batch is roasted to perfection, bringing
            out the unique flavors and aromas that make coffee such an exciting
            beverage
          </span>
        </div>
      </div>
    </>
  );
}
