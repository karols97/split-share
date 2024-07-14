import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import { ChangeEvent, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { Member } from "../store/server";

export const AddGroupButton = () => {
  const [isAddGroupOpen, setIsAddGroupOpen] = useState(false);
  const [newGroupMembers, setNewGroupMembers] = useState<Member[]>([]);

  const addGroupMember = () => {
    const groupMembers = [...newGroupMembers];
    groupMembers.push({ userName: "", amount: 0 });

    setNewGroupMembers(groupMembers);
  };

  const removeGroupMember = (index: number) => {
    const groupMembers = [...newGroupMembers];
    groupMembers.splice(index, 1);

    setNewGroupMembers(groupMembers);
  };

  const updateMemberName = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const groupMembers = [...newGroupMembers];
    groupMembers[index].userName = event.target.value;

    setNewGroupMembers(groupMembers);
  };

  const updateMemberAmount = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const groupMembers = [...newGroupMembers];
    groupMembers[index].amount = Number(event.target.value);

    setNewGroupMembers(groupMembers);
  };

  return (
    <>
      <div className="flex flex-col h-52 w-64 p-2 px-3 content-between border-2 border-dashed border-blue-500 rounded-lg shadow-xl bg-blue-500 bg-opacity-10 hover:bg-opacity-20 active:border-2 active:border-blue-500 cursor-pointer">
        <div
          className="w-full h-full flex flex-col justify-center items-center gap-1 pb-2"
          onClick={() => setIsAddGroupOpen(true)}>
          <h1>Add new group</h1>
          <IoIosAddCircleOutline size={60} className="text-blue-600" />
        </div>
        <Modal show={isAddGroupOpen} popup dismissible onClose={() => setIsAddGroupOpen(false)}>
          <ModalHeader>Add new group</ModalHeader>
          <ModalBody className="flex justify-center p-10">
            <div className="flex w-[500px] flex-col items-center gap-5">
              <div className="flex flex-row w-full items-center justify-between">
                <Label htmlFor="groupName" className="">
                  Group Name:
                </Label>
                <TextInput className="flex justify-center w-96" id="groupName" color={"blue"} />
              </div>
              <div className="flex flex-col w-full items-center gap-3 mt-2">
                <h1>Members:</h1>
                {newGroupMembers.map((singleNewGroupMember, index) => {
                  return (
                    <div className="flex flex-row w-full items-center justify-between gap-2 mr-2">
                      <div className="flex flex-col w-2/3 ml-1">
                        <Label htmlFor="userName">User Name</Label>
                        <TextInput
                          id="userName"
                          color={"blue"}
                          value={singleNewGroupMember.userName}
                          type="text"
                          onChange={(e) => updateMemberName(e, index)}
                        />
                      </div>
                      <div className="flex flex-col">
                        <Label htmlFor="userAmount">User amount</Label>
                        <TextInput
                          id="userAmount"
                          color={"blue"}
                          type="number"
                          value={singleNewGroupMember.amount}
                          onChange={(e) => updateMemberAmount(e, index)}
                        />
                      </div>
                      <div
                        className="flex mt-6 text-blue-600 p-2 hover:bg-blue-50 active:bg-blue-200 rounded-md cursor-pointer"
                        onClick={() => removeGroupMember(index)}>
                        <IoIosRemoveCircleOutline size={20} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className="flex w-full h-10 px-2 rounded-lg text-left justify-between text-blue-600 items-center border border-dashed border-blue-500 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 cursor-pointer"
                onClick={addGroupMember}>
                <p>Add member</p>
                <IoIosAddCircleOutline className="mr-[2px]" size={21} />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="flex flex-row w-full gap-2 items-center justify-center">
              <Button className="w-40" color={"blue"}>
                Confirm
              </Button>
              <Button
                className="w-40 border-blue-600 bg-transparent text-blue-700 focus:ring-0"
                color={"light"}
                onClick={() => setIsAddGroupOpen(false)}>
                Cancel
              </Button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};
