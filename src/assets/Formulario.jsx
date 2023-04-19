import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";

import "./Form.css";

const Formulario = () => {
  const [fomunenv, setformunenv] = useState(false);
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={(datos, { resetForm }) => {
          resetForm();
          console.log("formulario enviado");
          setformunenv(true);
          setTimeout(() => {
            setformunenv(false);
          }, 3000);
        }}
        validate={(validates) => {
          let errores = {};
          //validation name
          if (!validates.name) {
            errores.name = " ingrese un nombre aceptable";
          } else if (!/^[a-zA-Z-ÿ\s]{1,20}$/.test(validates.name)) {
            errores.name = "el nombre solo acepta letras y espacios";
          }

          if (!validates.email) {
            errores.email = " ingrese un correo aceptable";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z-]+$/.test(validates.email)
          ) {
            errores.email = "ingrese una direccion de correo existente";
          }
          return errores;
        }}
      >
        {({ errors }) => (
          <Form className="form">
            <div className="divform">
              <label>Name</label>
              <Field
                className="input"
                type="text"
                name="name"
                id="name"
                placeholder="write user"
              />
              <ErrorMessage
                name="name"
                component={() => {
                  return <div className="error">{errors.name}</div>;
                }}
              />
              <label>Email</label>
              <Field
                className="input"
                type="text"
                name="email"
                id="email"
                placeholder="enter Email"
              />
              <ErrorMessage
                name="email"
                component={() => {
                  return <div className="error">{errors.email}</div>;
                }}
              />
              <button type="submit">Enviar</button>
              {fomunenv && (
                <p className="exito">formulario enviado con exito!</p>
              )}
            </div>
            <div>
              <Field name="pais" as="select">
                <option value="colombia">colombia</option>
                <option value="chile">chile</option>
                <option value="mexico">mexico</option>
              </Field>
            </div>

            <label>
              <Field type="radio" name="sexo" value="hombre" />
              hombre
            </label>
            <label>
              <Field type="radio" name="sexo" value="mujer" />
              mujer
            </label>

            <div className="textareinput">
              <Field
                className="divarea"
                name="mensaje"
                as="textarea"
                placeholer="menssage"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
