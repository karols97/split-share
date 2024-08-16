import { ToggleSwitch } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { handleDemoFeatures } from "../store/appSlice";
import { useTranslation } from "react-i18next";

export const SwitchDemoFeatures = () => {
  const isShowedDemoFeatures = useSelector((state: RootState) => state.app.demoFeatures);
  const isExpanded = useSelector((state: RootState) => state.app.showSidebar);
  const dispatch = useDispatch();
  const { t } = useTranslation("translation");
  const label = isExpanded ? t("showDemo") : "";

  return (
    <div className="flex flex-row gap-2">
      <ToggleSwitch
        checked={isShowedDemoFeatures}
        onChange={() => dispatch(handleDemoFeatures())}
        color={"blue"}
        label={label}
        theme={theme}
      />
    </div>
  );
};

const theme = {
  root: {
    base: "group flex rounded-lg focus:outline-none",
    active: {
      on: "cursor-pointer",
      off: "cursor-not-allowed opacity-50",
    },
    label: "ms-3 mt-0.5 text-start text-sm font-medium text-gray-900 dark:text-gray-300",
  },
  toggle: {
    base: "relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all group-focus:ring-0 group-focus:ring-cyan-500/25",
    checked: {
      color: {
        blue: "border-blue-700 bg-blue-600",
      },
    },
  },
};
