import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SidebarMenu = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="w-[275px] h-full border border-r-2 bg-slate-50">
      <div className="flex flex-row items-center justify-between h-30 p-4">
        <div className="flex flex-row items-center">
          <h1 className="font-semibold text-3xl text-blue-600">Split</h1>
          <h1 className="font-semibold text-3xl text-gray-800">Share</h1>
        </div>
        <img src="src\img\logo.svg" className="w-8"></img>
      </div>
      <div className="mt-2 pl-4 pr-1">
        <div
          className={`w-full h-12 mt-2 border ${
            activeTab === "overview" ? "border-blue-500 border-2" : "border-slate-300"
          } rounded-xl hover:bg-blue-500 hover:bg-opacity-15 cursor-pointer`}
          onClick={() => {
            setActiveTab("overview");
            navigate("/overview");
          }}>
          <h1 className="w-full h-full pl-5 content-center font-medium rounded-xl">Overview</h1>
        </div>
        <div
          className={`w-full h-12 mt-2 border ${
            activeTab === "groups" ? "border-blue-500 border-2" : "border-slate-300"
          } rounded-xl hover:bg-blue-500 hover:bg-opacity-15 cursor-pointer`}
          onClick={() => {
            setActiveTab("groups");
            navigate("/groups");
          }}>
          <h1 className="w-full h-full pl-5 content-center font-medium rounded-xl">Groups</h1>
        </div>
        <div
          className={`w-full h-12 mt-2 border border-slate-300 bg-gray-200 rounded-xl cursor-not-allowed`}>
          <h1 className="w-full h-full pl-5 content-center font-medium rounded-xl text-gray-500">
            Expenses
          </h1>
        </div>
      </div>
      <div>{/* <SidebarMenu2 /> */}</div>
    </div>
  );
};
