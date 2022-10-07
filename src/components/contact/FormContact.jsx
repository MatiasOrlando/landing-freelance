import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(6, 'muy corto!')
    .max(50, 'muy largo!')
    .required('Ingrese un nombre valido!'),
  email: Yup.string()
    .email('email invalido')
    .required('Este campo es requerido!'),
  phone: Yup.string()
    .min(8, 'muy corto!')
    .max(12, 'muy largo!')
    .required('Este campo es requerido!'),
  textArea: Yup.string()
    .min(6, 'muy corto!')
    .max(360, 'muy largo!')
    .required('Este campo es requerido!'),
});

//todo que envie el mail a aylen

const FormContact = ({ setState }) => {
  const classInputs =
    ' w-[327px] lg:w-[370px] h-[60px] border-secondary border-[1px] rounded-[5px] pl-4';

  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    textArea: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={(values, { resetForm }) => {
        setState(true);
        resetForm();
        console.log(values);
      }}
    >
      {({ values, handleBlur, handleChange, errors, touched }) => (
        <Form className='flex flex-col gap-5 font-roboto'>
          {(errors.fullName && touched.fullName) ||
          (errors.email && touched.email) ||
          (errors.phone && touched.phone) ||
          (errors.textArea && touched.textArea) ? (
            <p className='text-[#ff0000]'>
              Debe completar los campos requeridos
            </p>
          ) : null}
          <Field
            className={classInputs}
            placeholder='Nombre y Apellido(*)'
            name='fullName'
            type='text'
            autoComplete='off'
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Field
            className={classInputs}
            placeholder='Email(*)'
            type='email'
            name='email'
            autoComplete='off'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Field
            className={classInputs}
            placeholder='Telefono'
            name='phone'
            type='text'
            autoComplete='off'
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <textarea
            placeholder='Motivo de consulta(*)'
            name='textArea'
            className='w-[327px] border-[1px] border-secondary lg:w-[370px] h-[146px] pl-4 pt-4 rounded-[5px]'
            value={values.textArea}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button
            type='submit'
            className=' w-[327px] lg:w-[370px] h-[64px] text-[#fff] bg-secondary rounded-[8px]'
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;
