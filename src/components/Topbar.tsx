import { Button } from "flowbite-react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type TopbarProps = {
  title: string;
};

export const Topbar = ({ title }: TopbarProps) => {
  const navigate = useNavigate();
  return (
    <div className="h-12 w-full bg-gray-50">
      <div className="flex flex-row px-10 py-3 items-center gap-2">
        <Button
          color={"gray"}
          className="flex items-center h-6 p-0 border-gray-300"
          onClick={() => navigate(-1)}>
          <BsArrowLeft size={20} color="gray" />
        </Button>
        <h1 className="ml-6 font-semibold">{title}</h1>
      </div>
    </div>
  );
};
