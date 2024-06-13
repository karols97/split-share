import { Sidebar } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { MdOutlineGroups2 } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";

export const SidebarMenu = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const customTheme = {
    item: {
      base: "h-13 w-full flex items-center justify-center rounded-xl p-3 text-base font-semibold text-gray-900 hover:bg-blue-500 hover:bg-opacity-15 dark:text-white dark:hover:bg-gray-700 border border-gray-300",
      active: "border-blue-500 border-2",
    },
  };

  return (
    <div className="flex flex-col w-[266px] h-screen border border-r-2 bg-slate-50">
      <div className="flex flex-row items-center justify-between p-4">
        <div className="flex flex-row items-center">
          <h1 className="font-semibold text-3xl text-blue-600">Split</h1>
          <h1 className="font-semibold text-3xl text-gray-800">Share</h1>
        </div>
        <img src="src\img\logo.svg" className="w-8"></img>
      </div>
      <div className="grid grid-rows-2 h-full content-between">
        <div className="h-full">
          <Sidebar theme={customTheme} className="ml-2 w-64 h-fit">
            <Sidebar.ItemGroup className="cursor-pointer">
              <Sidebar.Item
                active={location.includes("overview")}
                onClick={() => navigate("/overview")}
                icon={RiDashboardFill}>
                Overview
              </Sidebar.Item>
              <Sidebar.Item
                active={location.includes("groups")}
                onClick={() => navigate("/groups")}
                icon={MdOutlineGroups2}>
                Groups
              </Sidebar.Item>
              <Sidebar.Item
                icon={FaMoneyBillTransfer}
                className="cursor-not-allowed bg-gray-200 hover:bg-gray-200 hover:bg-opacity-100 border-gray-200 text-gray-500">
                Expenses
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar>
        </div>
        <div className="flex items-end h-full">
          <Sidebar className="h-13 ml-2" theme={customTheme}>
            <Sidebar.ItemGroup>
              {/* <Sidebar.Collapse label="Options" icon={IoSettingsOutline}>
                <Sidebar.Item onClick={() => navigate("/")}>Logout</Sidebar.Item>
              </Sidebar.Collapse> */}
              <Sidebar.Item
                onClick={() => navigate("/")}
                className="border-0 hover:border hover:border-red-700 hover:bg-transparent cursor-pointer h-10 p-3"
                icon={RiLogoutCircleLine}
                color="red">
                Logout
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar>
        </div>
      </div>
    </div>
  );
};
