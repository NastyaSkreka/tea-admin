import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Product name is required"), 
    price: Yup.number()
      .required("Price is required"), 
    description: Yup.string()
        .required("Description is required"), 
    miles: Yup.string()
      .required("Miles is required"), 
    time: Yup.string().required("Time is required"),
  });
