import { SidebarMenu } from "../components/SidebarMenu";
import { useParams } from "react-router-dom";
import { MembersTable } from "../components/MembersTable";
import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Group } from "../store/server";
import { ConfirmationModal } from "../components/ConfirmationModal";
import { ShowDemoFeature } from "../components/ShowDemoFeature";
import { Topbar } from "../components/Topbar";
import { useTranslation } from "react-i18next";

export const GroupDetails = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation("translation");

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
        <Topbar title={t("groupDetails")} />
        <div className="overflow-hidden">
          {isLoading && (
            <Spinner size={"xl"} color={"gray"} className="w-full my-20 overflow-hidden" />
          )}
          {group && !isLoading && (
            <div className="flex flex-col h-screen overflow-y-auto">
              <div className="h-fit w-5/6 p-10 bg-slate-50 place-self-center mt-10 rounded-3xl border">
                <div className="flex flex-row pb-4 items-start justify-between">
                  <div>
                    <p>{t("groupName")}:</p>
                    <h1 className="font-bold text-xl md:text-3xl">{group?.name}</h1>
                  </div>
                  <div className="flex flex-col md:flex-row items-baseline">
                    <p>{t("balance")}:</p>
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
                  <ShowDemoFeature>
                    <p>{t("created")}: 24.06.2024</p>
                  </ShowDemoFeature>
                  <p>
                    {t("numberOfMembers")}: {group?.members.length}
                  </p>
                </div>
                <div className="flex flex-col place-items-center w-full mt-4">
                  <div className="flex w-full rounded-lg p-2">
                    <MembersTable group={group} />
                  </div>
                  <div className="flex flex-col md:flex-row justify-around gap-2 p-4">
                    <ShowDemoFeature>
                      <ConfirmationModal label="Are you sure you want to settle all expenses?">
                        <Button className="w-24 md:w-32" color={"blue"}>
                          {t("settle")}
                        </Button>
                      </ConfirmationModal>
                    </ShowDemoFeature>
                    <ShowDemoFeature>
                      <Button className="w-24 md:w-32 text-nowrap" color={"blue"}>
                        {t("addMember")}
                      </Button>
                    </ShowDemoFeature>
                    <ShowDemoFeature>
                      <Button className="w-24 md:w-32" color={"red"}>
                        {t("archive")}
                      </Button>
                    </ShowDemoFeature>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    </SidebarMenu>
  );
};
