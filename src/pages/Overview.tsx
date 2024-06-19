import { GroupBox } from "../components/GroupBox";
import { SidebarMenu } from "../components/SidebarMenu";
import { initialGroupState } from "../store/initialGroupState";

export const Overview = () => {
  return (
    <SidebarMenu>
      <div className="h-full w-full grid grid-cols-3 gap-10 px-16 py-10 overflow-y-auto">
        {initialGroupState.map((singleInitialGroupState) => {
          return <GroupBox group={singleInitialGroupState} />;
        })}
      </div>
    </SidebarMenu>
  );
};
