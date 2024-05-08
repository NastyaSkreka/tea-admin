import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    phone: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').required('Mobile Number is required'),
});

export const signInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});