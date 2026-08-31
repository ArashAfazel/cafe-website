export default function ProductCard({ item }) {
  console.log(item);
  return (
    <>
      <div className="w-full flex justify-center containercolor p-3 rounded-2xl">
        <div className="flex flex-col justify-center w-50 md:w-60  relative ">
          <img className=" w-50 h-55 md:w-60 md:h-70" src={item.img} />
          <div className="flex justify-center font-bold">{item.title}</div>
          <div className="flex justify-center pt-1">
            <button className="border-2 border-gray-500 w-[70%] text-[15px] md:text-[17px] p-1.5 hover:bg-amber-600 hover:text-white">
              View Details
            </button>
          </div>
          <div className=" w-15 px-1 py-1.5 bg-amber-600 text-white font-bold rounded-4xl text-center absolute top-0 right-5">
            ${item.price}
          </div>
        </div>
      </div>
    </>
  );
}
