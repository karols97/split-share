import { Button, Sidebar, Tooltip } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { MdOutlineGroups2 } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { HiOutlineLanguage } from "react-icons/hi2";
import { RiLogoutCircleLine } from "react-icons/ri";
import { PiArrowsOutLineHorizontalFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import { SwitchDemoFeatures } from "./SwitchDemoFeatures";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { handleShowSidebar } from "../store/appSlice";

type SidebarMenuProps = {
  children?: JSX.Element;
};

export const SidebarMenu = ({ children }: SidebarMenuProps) => {
  const dispatch = useDispatch();
  const isExpanded = useSelector((state: RootState) => state.app.showSidebar);
  const { t, i18n } = useTranslation("translation");
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const customTheme = {
    item: {
      base: "h-10 w-full flex items-center justify-center rounded-xl p-3 text-sm font-semibold text-gray-900 hover:bg-blue-500 hover:bg-opacity-15 dark:text-white dark:hover:bg-gray-700 border border-gray-300",
      active: "border-blue-500 border-2",
      icon: {
        base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
        active: "text-gray-700 dark:text-gray-100",
      },
    },
  };

  const handleChangeLanguage = (language: string) => {
    return i18n.changeLanguage(language);
  };

  return (
    <div className="flex flex-row h-svh">
      <div
        className={`flex flex-col transition-all ${
          isExpanded ? "w-[240px]" : "w-[74px] px-0"
        }  border border-r-2 bg-slate-50`}>
        <div
          className="flex flex-row items-center justify-between p-4 cursor-pointer"
          onClick={() => navigate("/")}>
          <div
            className={`flex flex-row items-center overflow-hidden transition-all ${
              isExpanded ? "w-full" : "w-0"
            }`}>
            <h1 className="font-semibold text-3xl text-blue-600">Split</h1>
            <h1 className="font-semibold text-3xl text-gray-800">Share</h1>
          </div>
          <img src={`${process.env.PUBLIC_URL}/src/img/logo.svg`} className="w-8"></img>
        </div>
        <div className="grid grid-rows-2 h-full content-between capitalize">
          <div className="h-full">
            <Sidebar
              theme={customTheme}
              className={`${isExpanded ? "ml-2 w-56 h-fit" : "w-14 ml-0 px-0"} text-sm`}>
              <Sidebar.ItemGroup className="cursor-pointer">
                <Sidebar.Item
                  active={location.includes("overview")}
                  onClick={() => navigate("/overview")}
                  icon={RiDashboardFill}
                  className={`${!isExpanded && "pl-8 pr-2"}`}>
                  {isExpanded && t("overview")}
                </Sidebar.Item>
                <Sidebar.Item
                  active={location.includes("groups")}
                  onClick={() => navigate("/groups")}
                  icon={MdOutlineGroups2}
                  className={`${!isExpanded && "pl-8 pr-2"}`}>
                  {isExpanded && t("groups")}
                </Sidebar.Item>
                <Sidebar.Item
                  icon={FaMoneyBillTransfer}
                  className={`cursor-not-allowed bg-gray-200 hover:bg-gray-200 hover:bg-opacity-100 border-gray-200 text-gray-500 ${
                    !isExpanded && "pl-8 pr-2"
                  }`}>
                  {isExpanded && t("expenses")}
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar>
          </div>
          <div className="flex items-end h-full">
            <Sidebar
              className={`h-13 ${isExpanded ? "ml-2 w-58 h-fit" : "w-14 ml-0 px-0"}`}
              theme={customTheme}>
              <SwitchDemoFeatures />
              <Sidebar.ItemGroup>
                {isExpanded ? (
                  <Sidebar.Collapse
                    label={t("language")}
                    icon={HiOutlineLanguage}
                    className={`p-3 h-10 hover:border-red-700 text-sm hover:bg-transparent cursor-pointer`}>
                    <Sidebar.Item
                      onClick={() => handleChangeLanguage("en-US")}
                      className="text-sm border-0 group font-normal hover:bg-blue-200 hover:font-semibold hover:bg-transparent cursor-pointer h-6 p-3">
                      {"English"}
                    </Sidebar.Item>
                    <Sidebar.Item
                      onClick={() => handleChangeLanguage("es")}
                      className="text-sm border-0 group font-normal hover:bg-blue-200 hover:font-semibold hover:bg-transparent cursor-pointer h-6 p-3">
                      {"Español"}
                    </Sidebar.Item>
                    <Sidebar.Item
                      onClick={() => handleChangeLanguage("pl")}
                      className="text-sm border-0 group font-normal hover:bg-blue-200 hover:font-semibold hover:bg-transparent cursor-pointer h-6 p-3">
                      {"Polski"}
                    </Sidebar.Item>
                  </Sidebar.Collapse>
                ) : (
                  <Tooltip
                    content={
                      <div className="p-0">
                        <Button
                          color={"gray"}
                          className="flex items-center w-full rounded-none h-8 font-normal hover:text-gray-800"
                          onClick={() => handleChangeLanguage("en-US")}>
                          {"English"}
                        </Button>
                        <Button
                          color={"gray"}
                          className="flex items-center w-full rounded-none h-8 font-normal hover:text-gray-800"
                          onClick={() => handleChangeLanguage("es")}>
                          {"Español"}
                        </Button>
                        <Button
                          color={"gray"}
                          className="flex items-center w-full rounded-none h-8 font-normal hover:text-gray-800"
                          onClick={() => handleChangeLanguage("pl")}>
                          {"Polski"}
                        </Button>
                      </div>
                    }
                    placement="right"
                    style="light"
                    arrow={false}
                    trigger="click"
                    className="p-0"
                    animation={false}>
                    <div className="bg-transparent border-0 text-gray-500 hover:text-gray-800 px-2 cursor-pointer mb-2">
                      <HiOutlineLanguage size={24} />
                    </div>
                  </Tooltip>
                )}

                <Sidebar.Item
                  onClick={() => dispatch(handleShowSidebar())}
                  className={`border-0 group font-normal hover:bg-blue-200 hover:bg-transparent cursor-pointer h-10 p-3 ${
                    !isExpanded && "pl-8 pr-2"
                  }`}
                  icon={PiArrowsOutLineHorizontalFill}
                  color="blue">
                  {isExpanded && "Hide sidebar"}
                </Sidebar.Item>
                <Sidebar.Item
                  onClick={() => navigate("/")}
                  className={`border-0 group font-normal hover:bg-blue-200 hover:bg-transparent cursor-pointer h-10 p-3 ${
                    !isExpanded && "pl-8 pr-2"
                  }`}
                  icon={RiLogoutCircleLine}>
                  {isExpanded && t("logout")}
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-screen w-full">{children}</div>
    </div>
  );
};
