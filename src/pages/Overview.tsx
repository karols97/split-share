import { useEffect, useState } from "react";
import { GroupBox } from "../components/GroupBox";
import { SidebarMenu } from "../components/SidebarMenu";
import { Group } from "../store/server";
import { AddGroupButton } from "../components/AddGroupButton";

export const Overview = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    fetch("/api/groups")
      .then((res) => res.json())
      .then((json) => setGroups(json.groups))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SidebarMenu>
      <div className="h-full w-full grid grid-cols-3 gap-10 px-16 py-10 overflow-y-auto">
        {groups.map((singleGroup) => {
          return <GroupBox group={singleGroup} />;
        })}
        <AddGroupButton />
      </div>
    </SidebarMenu>
  );
};
