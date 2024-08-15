import * as yup from "yup";

export const createGroupSchema = yup.object({
  id: yup.string(),
  name: yup.string().required("Group name is required"),
  members: yup
    .array()
    .min(1, "New group has to include at least 1 member")
    .of(
      yup.object().shape({
        userName: yup.string().required("Member name is required"),
        amount: yup.number().required("Initial user amount is required"),
      })
    ),
});
