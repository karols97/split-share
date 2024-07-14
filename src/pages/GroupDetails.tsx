import { SidebarMenu } from "../components/SidebarMenu";
import { useParams } from "react-router-dom";
import { MembersTable } from "../components/MembersTable";
import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Group } from "../store/server";
import { ConfirmationModal } from "../components/ConfirmationModal";

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
    Number(
      group.members
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue.amount;
        }, 0)
        .toFixed(2)
    );

  const isUserOwed = sum && sum > 0;

  return (
    <SidebarMenu>
      {group ? (
        <div className="flex w-full h-full place-content-center">
          <div className="w-5/6 h-5/6 p-10 bg-slate-50 place-self-center rounded-3xl border">
            <div className="flex flex-row pb-4 items-center justify-between">
              <div>
                <p>Group name:</p>
                <h1 className="font-bold text-3xl">{group?.name}</h1>
              </div>
              <div className="flex flex-row items-baseline gap-5">
                <p>Balance:</p>
                <p
                  className={`text-6xl ${
                    isUserOwed ? "text-green-500" : "text-red-500"
                  } font-semibold`}>
                  {sum}
                </p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col py-5">
              <p>Created on: 24.06.2024</p>
              <p>Number of members: {group?.members.length}</p>
            </div>
            <div className="flex flex-col place-items-center w-full mt-4">
              <div className="flex w-fit border-2 border-gray-400 rounded-lg p-2">
                <MembersTable group={group} />
              </div>
              <div className="flex flex-row justify-around gap-2 p-4">
                <ConfirmationModal label="Are you sure you want to settle all expenses?">
                  <Button className="w-40" color={"blue"}>
                    Settle
                  </Button>
                </ConfirmationModal>

                <Button className="w-40" color={"blue"}>
                  Add User
                </Button>
                <Button className="w-40" color={"red"}>
                  Archive
                </Button>
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
    </SidebarMenu>
  );
};
