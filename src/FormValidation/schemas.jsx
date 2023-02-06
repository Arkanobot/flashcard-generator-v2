import * as Yup from "yup";

export const formSchema = Yup.object({
  cardName: Yup.string().min(3).max(15).required("Please enter a Title"),
  cardDesc: Yup.string().min(3).max(500).required("Please enter a Description"),
  cardImg: Yup.mixed().required(" Required"),
  termName: Yup.string().min(3).max(15).required("Please enter a Term Name"),
  termDef: Yup.string()
    .min(3)
    .max(500)
    .required("Please enter a Term Defination"),
  termImg: Yup.mixed(),
});
