import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(6, "muy corto!")
    .max(50, "muy largo!")
    .required("Este campo es requerido!"),
  email: Yup.string()
    .email("email invalido")
    .required("Este campo es requerido!"),
  phone: Yup.string().min(8, "muy corto!").max(12, "muy largo!"),
  message: Yup.string()
    .min(6, "muy corto!")
    .max(360, "muy largo!")
    .required("Este campo es requerido!"),
});

//todo que envie el mail a aylen

const FormContact = ({ setState }) => {
  const classInputs =
    " w-[327px] lg:w-[370px] h-[60px] border-secondary border-[1px] rounded-[5px] pl-4";

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  };

  const form = useRef();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={(values, { resetForm }) => {
        setState(true);
        emailjs
          .sendForm(
            "aylen-freelance",
            "template_gkjlxii",
            form.current,
            "Dy08KZjDfWS2Bmb7W"
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        resetForm();
      }}
    >
      {({ values, handleBlur, handleChange, errors, touched }) => (
        <Form ref={form} className="flex flex-col gap-5 font-roboto py-5">
          <Field
            id="contact"
            className={classInputs}
            placeholder="Nombre y Apellido(*)"
            name="fullName"
            type="text"
            autoComplete="off"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.fullName && touched.fullName && (
            <p className="text-[#ff0000]">{errors.fullName}</p>
          )}
          <Field
            className={classInputs}
            placeholder="Email(*)"
            type="email"
            name="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="text-[#ff0000]">{errors.email}</p>
          )}

          <Field
            className={classInputs}
            placeholder="Telefono"
            name="phone"
            type="text"
            autoComplete="off"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone && (
            <p className="text-[#ff0000]">{errors.phone}</p>
          )}

          <textarea
            placeholder="Motivo de consulta(*)"
            name="message"
            className="w-[327px] border-[1px] border-secondary lg:w-[370px] h-[146px] px-4 pt-4 rounded-[5px]"
            value={values.textArea}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && touched.message && (
            <p className="text-[#ff0000]">{errors.message}</p>
          )}

          <button
            type="submit"
            className=" w-[327px] lg:w-[370px] h-[64px] text-[#fff] mb-5 bg-secondary rounded-[8px] hover:bg-[#f9f9f9] shadow-md hover:text-secondary ease-linear transition-all duration-200"
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;
