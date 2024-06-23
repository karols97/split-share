import { Button, Table, TableBody } from "flowbite-react";
import { GroupState } from "../store/groupSlice";

type GroupTableProps = {
  group: GroupState;
};

export const GroupTable = ({ group }: GroupTableProps) => {
  return (
    <Table className="w-[700px]">
      <Table.Head className="normal-case border-b p-0 bg-teal-500">
        <Table.HeadCell className="w-4/6 text-center">Member</Table.HeadCell>
        <Table.HeadCell className="text-center">Balance</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
      </Table.Head>
      <TableBody className="divide-y">
        {group.members.map((singleMember) => {
          const isUserOwed = singleMember.amount > 0;
          return (
            <Table.Row>
              <Table.Cell className="p-0 pl-2 py-1 text-left text-gray-700 font-bold w-4/6">
                {singleMember.userName}
              </Table.Cell>
              <Table.Cell
                className={`p-0 py-1 text-center font-semibold ${
                  isUserOwed ? "text-green-500" : "text-red-500"
                }`}>
                {singleMember.amount}
              </Table.Cell>
              <Table.Cell className="p-0 pl-2 py-1 text-left">
                <Button className="p-0 m-0 h-6 w-20 items-center" color="blue">
                  <p className="py-0">{isUserOwed ? "Settle" : "Pay up"}</p>
                </Button>
              </Table.Cell>
              <Table.Cell className="p-0 pl-2 px-2 py-1 text-left">
                <Button className="p-0 m-0 h-6 w-16 items-center" color="red">
                  <p>Remove</p>
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </TableBody>
    </Table>
  );
};
