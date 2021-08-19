import * as yup from 'yup'

export const ContactSchema = yup.object().shape({
    email: yup.string().email().required('Email is a required field'),
    name: yup.string().required('Name is a required field'),
    message: yup
        .string()
        .min(10, 'Message must be at least 10 characters')
        .required('Please fill the message box'),
})
