import { Group } from "../store/server";

export const settleGroup = async (group: Group) => {
  const createBody = () => {
    const settledGroup: Group = {
      id: group.id,
      name: group.name,
      members: group.members.map((singleMember) => {
        return {
          userName: singleMember.userName,
          amount: 0,
        };
      }),
    };
    return settledGroup;
  };

  const res = await fetch("api/groups", { method: "PUT", body: JSON.stringify(createBody()) });

  return res;
};
