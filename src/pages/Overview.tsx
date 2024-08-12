import { useEffect, useState } from "react";
import { GroupBox } from "../components/GroupBox";
import { SidebarMenu } from "../components/SidebarMenu";
import { Group } from "../store/server";
import { AddGroupButton } from "../components/AddGroupButton";
import { SubmitHandler } from "react-hook-form";
import { Topbar } from "../components/Topbar";

export const Overview = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    fetch("/api/groups")
      .then((res) => res.json())
      .then((json) => setGroups(json.groups))
      .catch((error) => console.error(error));
  }, []);

  const onSubmit: SubmitHandler<Group> = async (data) => {
    const res = await fetch("/api/groups", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const json = await res.json();
    setGroups(json.groups);
  };

  return (
    <SidebarMenu>
      <>
        <Topbar title="Overview" />
        <div className="h-screen grid grid-cols-3 gap-10 px-16 py-10 overflow-y-scroll">
          {groups.map((singleGroup) => {
            return <GroupBox group={singleGroup} />;
          })}
          <AddGroupButton onSubmit={onSubmit} />
        </div>
      </>
    </SidebarMenu>
  );
};
