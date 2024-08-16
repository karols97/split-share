import * as yup from "yup";

export const createGroupSchema = yup.object({
  id: yup.string(),
  name: yup.string().required(),
  members: yup
    .array()
    .min(1)
    .of(
      yup.object().shape({
        userName: yup.string().required(),
        amount: yup.number().required(),
      })
    ),
});
