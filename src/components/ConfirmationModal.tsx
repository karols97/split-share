import { Button, Modal, ModalBody, ModalFooter } from "flowbite-react";
import { useState } from "react";

type ConfirmationModalProps = {
  children: JSX.Element;
  label: string;
};

export const ConfirmationModal = ({ children, label }: ConfirmationModalProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div onClick={() => setIsExpanded(true)}>{children}</div>
      <Modal show={isExpanded} dismissible popup onClose={() => setIsExpanded(false)}>
        <ModalBody className="text-center text-lg font-medium p-8">{label}</ModalBody>
        <ModalFooter>
          <div className="flex flex-row w-full gap-2 items-center justify-center">
            <Button className="w-40" color={"blue"}>
              Confirm
            </Button>
            <Button
              className="w-40 border-blue-600 bg-transparent text-blue-700 focus:ring-0"
              color={"light"}
              onClick={() => setIsExpanded(false)}>
              Cancel
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
};
