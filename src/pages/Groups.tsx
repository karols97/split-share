import { AllGroupsTable } from "../components/AllGroupsTable";
import { SidebarMenu } from "../components/SidebarMenu";
export const Groups = () => {
  return (
    <div className="h-screen">
      <SidebarMenu>
        <div className="p-10">
          <AllGroupsTable />
        </div>
      </SidebarMenu>
    </div>
  );
};
