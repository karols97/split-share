// import { PiChalkboardSimple } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { TbPigMoney } from "react-icons/tb";
// import { useParams } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  // const a = useParams();

  return (
    <div className="w-[300px] h-full border border-r-2 bg-slate-50">
      <div className="flex flex-row items-center justify-between h-30 p-4">
        <div className="flex flex-row items-center">
          <h1 className="font-semibold text-3xl text-blue-800">Split</h1>
          <h1 className="font-semibold text-3xl text-gray-800">Share</h1>
        </div>
        <TbPigMoney size={40} color="gray" />
      </div>
      <div className="mt-2 pl-4 pr-1">
        <div
          className="w-full h-12 mt-2 border border-slate-300 rounded-xl hover:bg-blue-700 cursor-pointer"
          onClick={() => navigate("/overview")}>
          <h1 className="w-full h-full pl-5 content-center font-medium rounded-xl">Overview</h1>
        </div>
        <div
          className="w-full h-12 mt-2 border border-slate-300 rounded-xl hover:bg-blue-700 cursor-pointer"
          onClick={() => navigate("/groups")}>
          <h1 className="w-full h-full pl-5 content-center font-medium rounded-xl">Groups</h1>
        </div>
        <div
          className="w-full h-12 mt-2 border border-slate-300 rounded-xl hover:bg-blue-700 cursor-pointer"
          onClick={() => navigate("/group-details")}>
          <h1 className="w-full h-full pl-5 content-center font-medium rounded-xl">Expenses</h1>
        </div>
      </div>
      <div></div>
    </div>
  );
};
