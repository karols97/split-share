import { RiRefund2Line } from "react-icons/ri";
import { GroupState } from "../store/groupSlice";
import { useNavigate } from "react-router-dom";

type GroupBoxProps = {
  group: GroupState;
};

export const GroupBox = ({ group }: GroupBoxProps) => {
  const navigate = useNavigate();

  const sum = Number(
    group.members
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
      }, 0)
      .toFixed(2)
  );

  const isUserOwed = sum > 0;

  return (
    <div
      className="flex flex-col h-52 w-64 p-2 px-3 content-between border border-slate-300 rounded-lg bg-slate-50 shadow-xl  hover:bg-blue-500 hover:bg-opacity-15 active:border-2 active:border-blue-500 cursor-pointer"
      onClick={() => navigate(`/groups/${group.id}`)}>
      <div>
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-xl font-semibold">{group.name}</h1>
          <RiRefund2Line size={24} />
        </div>
        <p>Number of members: {group.members.length}</p>
      </div>

      <div className="grid grid-rows-1 bt h-full items-end">
        <p>{isUserOwed ? "You are owed:" : "You owe:"}</p>
        <p className={`text-6xl ${isUserOwed ? "text-green-500" : "text-red-500"} font-semibold`}>
          {sum}
        </p>
      </div>
    </div>
  );
};
