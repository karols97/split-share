import { Button, Table, TableBody } from "flowbite-react";
import { Group } from "../store/server";
import { ShowDemoFeature } from "./ShowDemoFeature";
import { useDemoFeatures } from "../hooks/useDemoFeatures";

type GroupTableProps = {
  group: Group;
};

export const MembersTable = ({ group }: GroupTableProps) => {
  const { isDemoShowed } = useDemoFeatures();
  return (
    <Table className="table-fixed">
      <Table.Head className="normal-case border-b p-0 bg-transparent">
        <Table.HeadCell className="text-left px-2">Member</Table.HeadCell>
        <Table.HeadCell className={`${isDemoShowed ? "text-center" : "text-right"} px-2`}>
          Balance
        </Table.HeadCell>
        <ShowDemoFeature>
          <Table.HeadCell></Table.HeadCell>
        </ShowDemoFeature>
      </Table.Head>
      <TableBody className="divide-y">
        {group.members.map((singleMember) => {
          const isUserOwed = singleMember.amount > 0;
          return (
            <Table.Row className="h-10">
              <Table.Cell className="px-2 pl-2 py-1 text-left text-gray-700 font-bold w-4/6">
                {singleMember.userName}
              </Table.Cell>
              <Table.Cell
                className={`px-2 py-1 ${
                  isDemoShowed ? "text-center" : "text-right"
                } font-semibold ${isUserOwed ? "text-green-500" : "text-red-500"}`}>
                {Number(singleMember.amount).toFixed(2)}
              </Table.Cell>
              <ShowDemoFeature>
                <Table.Cell className="flex p-0 pl-2 py-1 justify-end">
                  <div className="flex flex-col md:flex-row gap-2">
                    <Button className="p-0 m-0 h-6 w-20 items-center" color="blue">
                      <p className="py-0">{isUserOwed ? "Settle" : "Pay up"}</p>
                    </Button>
                    <Button className="p-0 m-0 h-6 w-20 items-center" color="red">
                      <p>Remove</p>
                    </Button>
                  </div>
                </Table.Cell>
              </ShowDemoFeature>
            </Table.Row>
          );
        })}
      </TableBody>
    </Table>
  );
};
