import { useState } from "react";

export default function Reservation() {
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 7);
  const maxDateFormatted = maxDate.toISOString().split("T")[0];
  const [time, setTime] = useState("");
  const [date, setDate] = useState(minDate);
  const [guests, setGuests] = useState(1);
  console.log(guests);
  return (
    <>
      <div className="w-full min-h-screen menu-bg flex justify-center items-center">
        <div className="w-100 h-100  bg-black/50 flex justify-center items-center  gap-y-3 text-white ">
          <form className="w-[80%] h-[90%] flex flex-col justify-between">
            <div className="text-center items-start">
              <h1 className="font-bold border-b-2 text-2xl">Reservation</h1>
            </div>
            <div className=" w-full flex justify-between items-center gap-x-2">
              <label htmlFor="date" className="font-bold text-[20px]">
                Select Date
              </label>
              <input
                id="date"
                className="h-10 w-40 px-1 sm:px-2 text-[17px] bg-amber-400 flex justify-center"
                type="date"
                min={minDate}
                max={maxDateFormatted}
                defaultValue={minDate}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className=" flex justify-between items-center gap-x-2">
              <label htmlFor="Time" className="font-bold text-[20px]">
                Select Time
              </label>
              <select
                className="w-28 h-8 sm:h-10 sm:w-35 px-1 sm:px-2 text-[17px] bg-amber-400 text-center"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value={"8-10"}>8-10</option>
                <option value={"10-12"}>10-12</option>
                <option value={"12-14"}>12-14</option>
                <option value={"14-16"}>14-16</option>
                <option value={"16-18"}>16-18</option>
                <option value={"18-20"}>18-20</option>
                <option value={"20-22"}>20-22</option>
              </select>
            </div>
            <div className=" flex justify-between items-center gap-x-2">
              <label htmlFor="Time" className="font-bold text-[20px]">
                Guests
              </label>
              <input
                id="time"
                className=" text-center w-28 h-8 sm:h-10 sm:w-35 px-1 sm:px-2 text-[17px] bg-amber-400"
                type="number"
                min={1}
                max={10}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <div>
              <button className="w-full bg-amber-400 cursor-pointer h-10">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
