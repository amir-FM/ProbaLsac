import React from "react"
import "./register.css"
import { Formik } from "formik"
import * as Yup from "yup"
import axios from "axios"

export default function Login() {
    const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format")
        .matches(/[a-zA-Z]+[\.\-_]?[a-zA-Z]+@gmail.com/, "Email needs to end in @gmail.com"),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters")
        .max(32, "Password must be maximum 32 characters long"),
    confirmPassword: Yup.string()
        .required("Please re-type your password")
        // use oneOf to match one of the values inside the array.
        // use "ref" to get the value of passwrod.
        .oneOf([Yup.ref("password")], "Passwords does not match"),
    });

    return (
        <div className="login">
            <Formik
                    validationSchema={schema}
                initialValues={{ email: "", password: "", confirmPassword: "" }}
                    onSubmit={(values) => {
                    console.log(JSON.stringify(values));
                    console.log(values);
                    axios.post('http://localhost:5000/api/user', {
                    email: values.email,
                    password: values.password
                })
                .then(function (response) {
                    console.log(response);
                    window.location.reload();
                })
                .catch(function (error) {
                    alert(error.response.data.error);
                });
                }}
                >
                    {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    }) => (
                    <div className="login">
                        <div className="form">
                    {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                        <form noValidate onSubmit={handleSubmit}>
                            <span>Register</span>
                        {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                            <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Email"
                            className="form-control inp_text"
                            id="email"
                            />
                            {/* If validation is not passed show errors */}
                            <p className="error">
                            {errors.email && touched.email && errors.email}
                            </p>
                            {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                            <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Password"
                            className="form-control"
                            />
                            <p className="error">
                            {errors.password && touched.password && errors.password}
                            </p>
                            <input
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            placeholder="Confirm password"
                            className="form-control"
                            />
                            {/* If validation is not passed show errors */}
                            <p className="error">
                            {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                            </p>
                            {/* Click on submit button to submit the form */}
                            <button type="submit">Register</button>
                        </form>
                        </div>
                    </div>
                    )}
            </Formik>
        </div>
    )
}
