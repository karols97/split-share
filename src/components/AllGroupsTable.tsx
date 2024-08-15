import { Badge, Button, Spinner, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Group } from "../store/server";
import { ShowDemoFeature } from "./ShowDemoFeature";

export const AllGroupsTable = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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

  const deleteGroup = async (id: string) => {
    try {
      await fetch(`/api/groups/${id}`, { method: "DELETE" });

      const newGroups = [...groups].filter((singleGroup) => singleGroup.id !== id);
      setGroups(newGroups);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-full p-10 mb-10">
      <Table>
        <Table.Head className="rounded-t-lg border-b-2 border-blue-600">
          <Table.HeadCell>Group Name</Table.HeadCell>
          <Table.HeadCell>Number of members</Table.HeadCell>
          <Table.HeadCell>Balance</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body id="tableBody">
          {isLoading && (
            <Table.Cell colSpan={5} className="">
              <Spinner size={"xl"} color={"gray"} className="w-full my-10" />
            </Table.Cell>
          )}
          {groups &&
            !isLoading &&
            groups.map((singleGroup) => {
              const sum = singleGroup.members.reduce((accumulator, currentValue) => {
                return accumulator + Number(currentValue.amount);
              }, 0);
              const isUserOwed = sum > 0;
              return (
                <Table.Row
                  className="hover:bg-blue-500 hover:bg-opacity-15 cursor-pointer h-20"
                  onClick={() => navigate(`${singleGroup.id}`)}
                  id={`row-${singleGroup.id}`}>
                  <Table.Cell>{singleGroup.name}</Table.Cell>
                  <Table.Cell>{singleGroup.members.length}</Table.Cell>
                  <Table.Cell
                    className={`font-semibold ${isUserOwed ? "text-green-500" : "text-red-500"}`}>
                    {sum.toFixed(2)}
                  </Table.Cell>
                  <Table.Cell>
                    <Badge color="success" className="w-fit">
                      Active
                    </Badge>
                  </Table.Cell>
                  <Table.Cell onClick={(e) => e.stopPropagation()}>
                    <ShowDemoFeature>
                      <Button
                        color={"red"}
                        className="py-0"
                        onClick={() => deleteGroup(singleGroup.id)}>
                        Delete group
                      </Button>
                    </ShowDemoFeature>
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </div>
  );
};
