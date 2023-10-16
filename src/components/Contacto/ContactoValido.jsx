import { Formik } from "formik";
import { Typography, TextField, Button, Box, Snackbar } from "@mui/material";
import { principal } from "./styles";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const ContactoValido = () => {
  const form = useRef();
  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  return (
    <>
      <Box sx={principal}>
        <Typography variant="h4" gutterBottom fontWeight={700}>
          Contacto
        </Typography>
        <Typography variant="body1" gutterBottom fontWeight={400} fontSize={22}>
          ¿Quieres contactarme?
        </Typography>
        <Typography variant="body1" gutterBottom fontWeight={400} fontSize={22}>
          Complete el siguiente formulario y me pondré en contacto con usted lo
          antes posible.
        </Typography>
        <Formik
          initialValues={{
            from_name: "",
            email: "",
            message: "",
          }}
          validate={(valores) => {
            let errores = {};

            // Validacion Nombre
            if (!valores.from_name) {
              errores.from_name = "Nombre inválido";
            } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.from_name)) {
              errores.from_name = "Ingrese un Nombre válido";
            }

            // Validacion email
            if (!valores.email) {
              errores.email = "Correo inválido";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.email
              )
            ) {
              errores.email = "Ingrese un Correo válido";
            }

            // Validar Mensaje
            if (!valores.message) {
              errores.message = "Mensaje inválido";
            } else if (!/^.+$/.test(valores.message)) {
              errores.message = "Ingrese un mensaje válido";
            }

            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
            emailjs
              .sendForm(
                "service_k0au51r",
                "template_55vgu5n",
                form.current,
                "rTsjZZ6lPG9qpekeJ"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setState({
                    open: true, // Mostrar el Snackbar cuando el mensaje se envía con éxito
                    Transition: SlideTransition, // Puedes configurar el tipo de transición aquí
                  });
                },
                (error) => {
                  console.log(error.text);
                }
              );
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} ref={form}>
              <TextField
                fullWidth
                label="Nombre"
                variant="outlined"
                name="from_name"
                placeholder="Nombre"
                value={values.from_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.from_name && touched.from_name)}
                helperText={
                  errors.from_name && touched.from_name && errors.from_name
                }
                autoComplete="off"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Correo"
                variant="outlined"
                name="email"
                placeholder="Correo"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.email && touched.email)}
                helperText={errors.email && touched.email && errors.email}
                autoComplete="off"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Mensaje"
                variant="outlined"
                name="message"
                placeholder="Mensaje"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.message && touched.message)}
                helperText={errors.email && touched.message && errors.message}
                autoComplete="off"
                margin="normal"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Enviar
              </Button>
              <Snackbar
                open={state.open}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message="Mensaje enviado con exito 👻👻"
                key={state.Transition.name}
                autoHideDuration={5000}
              />
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default ContactoValido;