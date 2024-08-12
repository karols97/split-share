import { AllGroupsTable } from "../components/AllGroupsTable";
import { SidebarMenu } from "../components/SidebarMenu";
import { Topbar } from "../components/Topbar";

export const Groups = () => {
  return (
    <SidebarMenu>
      <>
        <Topbar title={"All Groups Table"}></Topbar>
        <div className="h-screen overflow-y-scroll">
          <AllGroupsTable />
        </div>
      </>
    </SidebarMenu>
  );
};
