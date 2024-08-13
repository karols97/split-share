import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useDemoFeatures = () => {
  const isDemoShowed = useSelector((state: RootState) => state.app.demoFeatures);

  return { isDemoShowed };
};
