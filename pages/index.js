import Slider from "@/components/modules/Slider/Slider";
import About from "@/components/modules/About/About";
import Categories from "@/components/modules/Categories/Categories";
import Products from "@/components/modules/Products/Products";
import Services from "@/components/modules/Services/Services";
import Instagram from "@/components/modules/Instagram/Instgram";
import Footer from "@/components/modules/Footer/Footer";
export default function Home() {
  return (
    <>
      <Slider />
      <div className="w-full flex justify-center mt-12.5 ">
      <div className="w-[80%] containercolor shadow-2xl backdrop-blur-[1px] rounded-2xl">
      <About />
      <Categories />
      <Products />

        <Services />
        <Instagram />
              </div>
      </div>
      <Footer/>
    </>
  );
}
