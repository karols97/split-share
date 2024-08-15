import { useEffect, useState } from "react";
import { GroupBox } from "../components/GroupBox";
import { SidebarMenu } from "../components/SidebarMenu";
import { Group } from "../store/server";
import { AddGroupButton } from "../components/AddGroupButton";
import { Topbar } from "../components/Topbar";
import { Spinner } from "flowbite-react";

export const Overview = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/groups")
      .then((res) => res.json())
      .then((json) => {
        setGroups(json.groups);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <SidebarMenu>
      <>
        <Topbar title="Overview" />
        <div className="overflow-hidden">
          {isLoading && (
            <Spinner size={"xl"} color={"gray"} className="w-full my-20 overflow-hidden" />
          )}
          {groups && !isLoading && (
            <div className="h-full grid grid-cols-3 gap-10 px-16 py-10 overflow-y-auto">
              {groups.map((singleGroup) => {
                return <GroupBox group={singleGroup} />;
              })}
              <AddGroupButton setGroups={setGroups} />
            </div>
          )}
        </div>
      </>
    </SidebarMenu>
  );
};
