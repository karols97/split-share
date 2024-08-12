import { Button, Table, TableBody } from "flowbite-react";
import { Group } from "../store/server";
import { ShowDemoFeature } from "./ShowDemoFeature";

type GroupTableProps = {
  group: Group;
};

export const MembersTable = ({ group }: GroupTableProps) => {
  return (
    <Table>
      <Table.Head className="normal-case border-b p-0 bg-transparent">
        <Table.HeadCell className="w-4/6 text-center">Member</Table.HeadCell>
        <Table.HeadCell className="text-center">Balance</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
      </Table.Head>
      <TableBody className="divide-y">
        {group.members.map((singleMember) => {
          const isUserOwed = singleMember.amount > 0;
          return (
            <Table.Row className="min-h-20">
              <Table.Cell className="p-0 pl-2 py-1 text-left text-gray-700 font-bold w-4/6">
                {singleMember.userName}
              </Table.Cell>
              <Table.Cell
                className={`p-0 py-1 text-center font-semibold ${
                  isUserOwed ? "text-green-500" : "text-red-500"
                }`}>
                {Number(singleMember.amount).toFixed(2)}
              </Table.Cell>
              <ShowDemoFeature>
                <Table.Cell className="p-0 pl-2 py-1 text-left">
                  <Button className="p-0 m-0 h-6 w-20 items-center" color="blue">
                    <p className="py-0">{isUserOwed ? "Settle" : "Pay up"}</p>
                  </Button>
                </Table.Cell>
              </ShowDemoFeature>
              <ShowDemoFeature>
                <Table.Cell className="p-0 pl-2 px-2 py-1 text-left">
                  <Button className="p-0 m-0 h-6 w-16 items-center" color="red">
                    <p>Remove</p>
                  </Button>
                </Table.Cell>
              </ShowDemoFeature>
            </Table.Row>
          );
        })}
      </TableBody>
    </Table>
  );
};
