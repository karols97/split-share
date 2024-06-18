import { GroupBox } from "../components/GroupBox";
import { SidebarMenu } from "../components/SidebarMenu";
import { initialGroupState } from "../store/initialGroupState";

export const Overview = () => {
  return (
    <div className="flex flex-row h-screen ">
      <SidebarMenu />
      <div className="grid grid-cols-3 gap-10 p-16">
        {initialGroupState.map((singleInitialGroupState) => {
          return <GroupBox group={singleInitialGroupState} />;
        })}
      </div>
    </div>
  );
};
