import { SidebarMenu } from "../components/SidebarMenu";
import { useParams } from "react-router-dom";
import { initialGroupState } from "../store/initialGroupState";
import { GroupTable } from "../components/GroupTable";

export const GroupDetails = () => {
  const { id } = useParams();
  const group = initialGroupState.find((singleGroup) => {
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
          <div className="flex w-full mt-4 place-content-center">
            <div className="align-middle w-fit border-2 border-gray-400 rounded-lg p-2">
              <GroupTable group={group} />
            </div>
          </div>
        </div>
      </div>
    </SidebarMenu>
  );
};
