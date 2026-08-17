import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram}from"@fortawesome/free-brands-svg-icons"
export default function Instagram() {
  return (
    <>
      <div className="w-full flex justify-center pt-3">
        <span className="bg-amber-500 w-0.5 h-15 md:h-25"></span>
      </div>
      <div className="text-center w-full">
        <span className="text-[15px] md:text-[30px] text-amber-500">
          Follow Us On
        </span>
        <p className="text-[15px] md:text-[30px] text-amber-500">
          Instagram
        </p>
      </div>
      <div className="w-full text-center">
        <FontAwesomeIcon className=" text-[150px] md:text-[250px] text-amber-700" icon={faInstagram}/>
      </div>
    </>
  );
}
