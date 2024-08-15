import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  TextInput,
} from "flowbite-react";
import { ChangeEvent, useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { Group, Member } from "../store/server";
import { SubmitHandler, useForm } from "react-hook-form";
import { createGroupSchema } from "../schemas/createGroupSchema";
import { yupResolver } from "@hookform/resolvers/yup";

type AddGroupButtonProps = {
  setGroups: (groups: Group[]) => void;
};

export const AddGroupButton = ({ setGroups }: AddGroupButtonProps) => {
  const [isAddGroupOpen, setIsAddGroupOpen] = useState(false);
  const [newGroupMembers, setNewGroupMembers] = useState<Member[]>([]);
  const [groupName, setGroupName] = useState<string>("");
  const { register, handleSubmit, formState, reset, watch } = useForm<Group>({
    defaultValues: {
      id: "",
      name: "",
      members: [],
    },
    //@ts-ignore
    resolver: yupResolver(createGroupSchema),
  });

  const onSubmit: SubmitHandler<Group> = async (data) => {
    const id = crypto.randomUUID();
    const dataWithId = {
      ...data,
      id: id,
    };
    const res = await fetch("/api/groups", {
      method: "POST",
      body: JSON.stringify(dataWithId),
    });

    const json = await res.json();
    setGroups(json.groups as Group[]);
    setIsAddGroupOpen(false);
  };

  const allFields = watch();
  const { errors } = formState;

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        id: "",
        name: "",
        members: [],
      });
      setNewGroupMembers([]);
      setGroupName("");
    }
  }, [formState]);
  useEffect(() => {
    reset({ ...allFields, name: groupName, members: newGroupMembers });
  }, [newGroupMembers]);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Add new group</ModalHeader>
            <ModalBody className="flex justify-center p-10 overflow-y-auto h-5/6">
              <div className="flex w-[525px] flex-col items-center gap-2 px-2">
                <div className="flex flex-row w-full items-center justify-between">
                  <Label htmlFor="groupName" className="text-md">
                    Group Name:
                  </Label>
                  <div className="flex flex-col">
                    <TextInput
                      {...register("name")}
                      {...register("id")}
                      value={groupName}
                      onChange={(e) => setGroupName(e.target.value)}
                      className="flex justify-center w-96"
                      id="groupName"
                      color={"blue"}
                    />
                    {errors.name ? (
                      <p className="text-xs text-red-700 font-semibold">{errors.name?.message}</p>
                    ) : (
                      <div className="h-2"></div>
                    )}
                  </div>
                </div>
                <h1 className="w-full text-left font-semibold">Group members:</h1>
                <div className="flex flex-col bg-gray-50 w-full items-center rounded-md shadow-inner gap-1 max-h-72 overflow-y-auto overflow-x-hidden px-5">
                  {newGroupMembers.map((singleNewGroupMember, index) => {
                    return (
                      <div className="flex flex-row w-full items-center justify-between gap-2 mr-2 mt-3">
                        <div className="flex flex-col w-2/3 ml-1">
                          <Label htmlFor="userName">User Name</Label>
                          <TextInput
                            {...register(`members.${index}.userName`)}
                            id="userName"
                            color={"blue"}
                            value={singleNewGroupMember.userName}
                            type="text"
                            onChange={(e) => updateMemberName(e, index)}
                          />
                          {errors.members &&
                          errors.members[index] &&
                          errors.members[index].userName ? (
                            <p className="text-xs h-2 text-red-700 font-semibold">
                              {errors.members[index].userName?.message}
                            </p>
                          ) : (
                            <div className="h-2"></div>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <Label htmlFor="userAmount">User amount</Label>
                          <TextInput
                            {...register(`members.${index}.amount`)}
                            id="userAmount"
                            color={"blue"}
                            type="number"
                            step="0.01"
                            onBlur={(e) => updateMemberAmount(e, index)}
                          />
                          {errors.members &&
                          errors.members[index] &&
                          errors.members[index].amount ? (
                            <p className="text-xs h-2 text-red-700 font-semibold">
                              {errors.members[index].amount?.message}
                            </p>
                          ) : (
                            <div className="h-2"></div>
                          )}
                        </div>
                        <div
                          className="flex mt-2 p-2 text-blue-600 hover:bg-blue-50 active:bg-blue-200 rounded-md cursor-pointer"
                          onClick={() => removeGroupMember(index)}>
                          <IoIosRemoveCircleOutline size={20} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex w-full flex-col">
                  <div
                    className="flex w-full h-10 mt-4 px-2 rounded-lg text-left justify-between text-blue-600 items-center border border-dashed border-blue-500 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 cursor-pointer"
                    onClick={addGroupMember}>
                    <p>Add member</p>
                    <IoIosAddCircleOutline className="mr-[2px]" size={21} />
                  </div>
                  {errors.members ? (
                    <p className="text-xs h-2 text-red-700 font-semibold">
                      {errors.members?.message}
                    </p>
                  ) : (
                    <div className="h-2"></div>
                  )}
                </div>
              </div>
            </ModalBody>
            <ModalFooter className="pt-0">
              <div className="flex flex-row w-full gap-2 items-center justify-center">
                <Button
                  className="flex flex-row items-center w-40 h-10"
                  type="submit"
                  color={"blue"}
                  onSubmit={() => formState.isSubmitted && setIsAddGroupOpen(false)}>
                  {formState.isSubmitting ? (
                    <Spinner className="mr-2 p-0" size={"md"} />
                  ) : (
                    <p>Confirm</p>
                  )}
                </Button>
                <Button
                  className="w-40 border-blue-600 bg-transparent text-blue-700 focus:ring-0"
                  color={"light"}
                  onClick={() => setIsAddGroupOpen(false)}>
                  Cancel
                </Button>
              </div>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    </>
  );
};
