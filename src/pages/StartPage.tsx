import { Button } from "flowbite-react";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";

export const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col bg-start-page bg-cover">
      <div className="p-24 flex flex-row">
        <h1 className="font-semibold text-6xl text-blue-600">Split</h1>
        <h1 className="font-semibold text-6xl text-gray-800">Share</h1>
        <img src={logo} className="w-16 ml-4"></img>
      </div>
      <div className="flex h-full w-full justify-center">
        <Button
          onClick={() => navigate("/overview")}
          gradientDuoTone="purpleToBlue"
          className="flex flex-row self-end w-64 mb-40 gap-2 items-center px-4 py-1 rounded-md focus:ring-0 ">
          <div className="w-52">
            <p className="text-lg text-center">Try it!</p>
          </div>
          <div className="flex items-center">
            <RiArrowRightDoubleFill size={20} />
          </div>
        </Button>
      </div>
    </div>
  );
};
