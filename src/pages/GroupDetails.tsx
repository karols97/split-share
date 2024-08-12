import { SidebarMenu } from "../components/SidebarMenu";
import { useParams } from "react-router-dom";
import { MembersTable } from "../components/MembersTable";
import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Group } from "../store/server";
import { ConfirmationModal } from "../components/ConfirmationModal";
import { ShowDemoFeature } from "../components/ShowDemoFeature";
import { Topbar } from "../components/Topbar";

export const GroupDetails = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    fetch("/api/groups")
      .then((res) => res.json())
      .then((json) => setGroups(json.groups))
      .catch((error) => console.error(error));
  }, []);
  const { id } = useParams();
  const group = groups.find((singleGroup) => {
    return singleGroup.id === id;
  });

  const sum =
    group &&
    group.members.reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue.amount);
    }, 0);

  const isUserOwed = sum && sum > 0;

  return (
    <SidebarMenu>
      <>
        <Topbar title="Group details" />
        <div className="overflow-y-scroll">
          {group ? (
            <div className="flex flex-col h-screen">
              <div></div>
              <div className="h-fit w-5/6 p-10 bg-slate-50 place-self-center mt-10 rounded-3xl border">
                <div className="flex flex-row pb-4 items-start justify-between">
                  <div>
                    <p>Group name:</p>
                    <h1 className="font-bold text-xl md:text-3xl">{group?.name}</h1>
                  </div>
                  <div className="flex flex-col md:flex-row items-baseline">
                    <p>Balance:</p>
                    <p
                      className={`text-3xl md:text-6xl ml-2 ${
                        isUserOwed ? "text-green-500" : "text-red-500"
                      } font-semibold`}>
                      {sum?.toFixed(2)}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex flex-col py-5">
                  <p>Created on: 24.06.2024</p>
                  <p>Number of members: {group?.members.length}</p>
                </div>
                <div className="flex flex-col place-items-center w-full mt-4">
                  <div className="flex w-full rounded-lg p-2">
                    <MembersTable group={group} />
                  </div>
                  <div className="flex flex-col md:flex-row justify-around gap-2 p-4">
                    <ShowDemoFeature>
                      <ConfirmationModal label="Are you sure you want to settle all expenses?">
                        <Button className="w-40" color={"blue"}>
                          Settle
                        </Button>
                      </ConfirmationModal>
                    </ShowDemoFeature>
                    <ShowDemoFeature>
                      <Button className="w-40" color={"blue"}>
                        Add User
                      </Button>
                    </ShowDemoFeature>
                    <ShowDemoFeature>
                      <Button className="w-40" color={"red"}>
                        Archive
                      </Button>
                    </ShowDemoFeature>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex w-full h-full items-center justify-center">
              <div>
                <Spinner size={"xl"} color={"gray"} className="" />
              </div>
            </div>
          )}
        </div>
      </>
    </SidebarMenu>
  );
};
