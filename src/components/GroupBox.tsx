import { RiRefund2Line } from "react-icons/ri";
import { Group } from "../store/server";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type GroupBoxProps = {
  group: Group;
};

export const GroupBox = ({ group }: GroupBoxProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation("translation");

  const sum = Number(
    group.members.reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue.amount);
    }, 0)
  );

  const isUserOwed = sum > 0;

  return (
    <div
      className="flex flex-col h-32 w-52 sm:h-52 sm:w-64 p-2 px-3 content-normal border border-slate-300 rounded-lg bg-slate-50 shadow-xl  hover:bg-blue-500 hover:bg-opacity-15 active:border-2 active:border-blue-500 cursor-pointer"
      onClick={() => navigate(`/groups/${group.id}`)}>
      <div>
        <div className="flex flex-row items-center justify-between">
          <h1 className="sm:text-xl font-semibold">{group.name}</h1>
          <RiRefund2Line size={24} />
        </div>
        <p className="text-sm sm:text-lg">
          {t("numberOfMembers")}: {group.members.length}
        </p>
      </div>

      <div className="grid grid-rows-1 bt h-full items-end text-sm sm:text-lg">
        <p>{isUserOwed ? t("youAreOwed") : t("youOwe")}</p>
        <p
          className={`text-3xl sm:text-6xl ${
            isUserOwed ? "text-green-500" : "text-red-500"
          } font-semibold`}>
          {sum.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
