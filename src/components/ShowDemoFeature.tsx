import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type ShowDemoFeatureProps = {
  children: JSX.Element;
};

export const ShowDemoFeature = ({ children }: ShowDemoFeatureProps) => {
  const isShowedDemoFeatures = useSelector((state: RootState) => state.demoFeatures.value);
  return isShowedDemoFeatures && children;
};
