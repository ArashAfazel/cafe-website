import Slider from "@/components/tempalates/Home/Slider";
import About from "@/components/tempalates/Home/About";
import Categories from "@/components/tempalates/Home/Categories";
import Products from "@/components/tempalates/Home/Products";
import Services from "@/components/tempalates/Home/Services";
import Instagram from "@/components/tempalates/Home/Instagram";
import Footer from "@/components/modules/Footer/Footer";
export default function Home({ data }) {
  return (
    <>
      <Slider />
      <div className="relative">
        <div className="w-full absolute -top-3 sm:-top-11 z-10">
          <img className="w-full h-full" src="/images/overlay-top.png" />
        </div>
        <div className="w-full flex justify-center pt-12.5 ">
          <div className="w-[80%] containercolor shadow-2xl backdrop-blur-[1px] rounded-2xl">
            <About />
            <Categories />
            <Products data={data} />
            <Services />
            <Instagram />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
