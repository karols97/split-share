import { initialGroupState } from "../store/initialGroupState";
import { Badge, Button, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export const AllGroupsTable = () => {
  const navigate = useNavigate();

  return (
    <Table>
      <Table.Head className="rounded-t-lg border-b-2 border-blue-600">
        <Table.HeadCell>Group ID</Table.HeadCell>
        <Table.HeadCell>Group Name</Table.HeadCell>
        <Table.HeadCell>Number of members</Table.HeadCell>
        <Table.HeadCell>Balance</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {initialGroupState.map((singleGroup) => {
          const sum = Number(
            singleGroup.members
              .reduce((accumulator, currentValue) => {
                return accumulator + currentValue.amount;
              }, 0)
              .toFixed(2)
          );
          const isUserOwed = sum > 0;
          return (
            <Table.Row
              className="hover:bg-blue-500 hover:bg-opacity-15 cursor-pointer"
              onClick={() => navigate(`${singleGroup.id}`)}>
              <Table.Cell>{singleGroup.id}</Table.Cell>
              <Table.Cell>{singleGroup.name}</Table.Cell>
              <Table.Cell>{singleGroup.members.length}</Table.Cell>
              <Table.Cell
                className={`font-semibold ${isUserOwed ? "text-green-500" : "text-red-500"}`}>
                {sum}
              </Table.Cell>
              <Table.Cell>
                <Badge color="success" className="w-fit">
                  Active
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Button color={"red"} className="py-0">
                  Delete group
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
