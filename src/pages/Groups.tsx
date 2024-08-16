import { useTranslation } from "react-i18next";
import { AllGroupsTable } from "../components/AllGroupsTable";
import { SidebarMenu } from "../components/SidebarMenu";
import { Topbar } from "../components/Topbar";

export const Groups = () => {
  const { t } = useTranslation("translation");

  return (
    <SidebarMenu>
      <>
        <Topbar title={t("allGroupsTable")}></Topbar>
        <div className="h-screen overflow-y-scroll">
          <AllGroupsTable />
        </div>
      </>
    </SidebarMenu>
  );
};
