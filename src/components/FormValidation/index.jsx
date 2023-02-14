import * as Yup from "yup";

//getting yup for form validation
export const formSchema = Yup.object({
  cardName: Yup.string().min(3).max(15).required("Please enter a Title"), // displays error if the card name is less than 3 chars and does not allow more than 15 chars
  cardDesc: Yup.string().min(3).max(500).required("Please enter a Description"), // displays error if card disc is less than 3 chars and does not allow more than 15 chars
  cardImg: Yup.mixed().required(" Required"), // displays error - required when the image is not uploaded
  terms: Yup.array(
    // expects an array value called terms with following object value
    Yup.object({
      termName: Yup.string()
        .min(3)
        .max(15)
        .required("Please enter a Term Name"), // displays error if the term name is less than 3 chars and does not allow more than 15 chars
      termDef: Yup.string()
        .min(3)
        .max(500)
        .required("Please enter a Term Defination"), // displays error if term defination is less than 3 chars and does not allow more than 15 chars
      termImg: Yup.mixed(), // expects an image file but not required
    })
  ),
});
