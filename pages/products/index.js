import ProductCard from "@/components/modules/ProductsCard/ProductsCard";

export default function products({ data }) {
  return (
    <>
      <div className="w-full min-h-screen menu-bg">
        <div className="w-full flex justify-center">
          <div className=" mt-28 bg-black/50 rounded-3xl p-3 sm:p-6">
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {data.map((item) => (
                <ProductCard item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
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
